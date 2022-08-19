const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("./configs/mongoose");

app.use(express.urlencoded());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./route"));

module.exports = app;
