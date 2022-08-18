const express = require("express");
const server = express();
const mongoose = require("./configs/mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 3004;

server.use(cookieParser());
server.use(express.urlencoded());
server.use(bodyParser.json());

server.set("view engine", "ejs");
server.set("views", "./views");

server.use("/", require("./routes"));

server.listen(port, (req, res) =>
  console.log("server is running on port:", port)
);
module.exports = server;
