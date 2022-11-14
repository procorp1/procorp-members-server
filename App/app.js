const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const errorHandler = require("../middleware/errorHandler");

// middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// route

const authRoute = require("../routes/auth.route");

app.use("/api/v1/auth", authRoute);


// check server 
app.get("/", (req, res) => {
  res.send("procorp members server running");
});
app.get("/health", (req, res) => {
  res.send("health ok");
});

module.exports = app;
