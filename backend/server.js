//npm i express dotenv mongoose colors   -install dependencies packages
// npm i -D nodemon   - as a dev dependency

console.log("Hello");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.listen(port, () => console.log(`Server started on port ${port}`));
