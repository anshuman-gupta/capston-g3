const express = require("express");
const server = express();
const port = 3004;
server.get("/", (req, res) => {
  res.send("this is user page");
});

server.get("/dashboard", (req, res) => {
  res.send("this is user dashboard");
});
server.listen(port, (req, res) =>
  console.log("server is running on port:", port)
);
module.exports = server;
