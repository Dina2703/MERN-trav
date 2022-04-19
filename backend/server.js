//npm i express dotenv mongoose colors   -install dependencies packages
// npm i -D nodemon   - as a dev dependency

const path = require("path");
const colors = require("colors");
// console.log("Hello");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDb = require("./config/db");

const { errorHandler } = require("./middleware/errorMiddleware");

connectDb();

const app = express();

//middleware for accepting req.body for POST  request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

//Prepare for deployment
//if you do 'npm tun build' it then creates 'build' folder with all your static assets. So what we need to do is point to that  -->that's the static assets that index.html file that gets created in the build folder that is basically going to be the entry point to our frontend, so we have to add to this to the server.js file.
// Make sure add it under the API routes. as we did under '//Serve frontend'
// for 'production' mode: to point to our 'build' folder with our statis assets, do -->
//app.use(express.static(path.join(_dirname, '../frontend/build')));
//__dirname (double underscore dirname) - is the current directory, server.js
// to load our index.html inside our static folder, we add -->
//app.get("*", (req, res) =>
//res.sendFile(path.resolve(_dirname, "../", "frontend", "build", "index.html")));
