//npm i express dotenv mongoose colors   -install dependencies packages
// npm i -D nodemon   - as a dev dependency
const colors = require("colors");
console.log("Hello");
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

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
