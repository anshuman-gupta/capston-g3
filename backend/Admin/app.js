const express = require("express")
const server = express()

server.get("/",(req, res)=>{
    res.send("this is admin page")
})

server.get("/dashboard",(req, res)=>{
    res.send("this is admin dashboard")
})

module.exports = server