const express = require("express")
const server = express()

server.get("/",(req, res)=>{
    res.send("this is product page")
})

server.get("/dashboard",(req, res)=>{
    res.send("this is product dashboard")
})

module.exports = server