const express = require("express")
const server = express()

server.get("/",(req, res)=>{
    res.send("this is user page")
})

server.get("/dashboard",(req, res)=>{
    res.send("this is user dashboard")
})

module.exports = server