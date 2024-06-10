const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const students = require("./models/student")


const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})


app.post("/contact",(req,res)=>{
    res.send("Welcome to my contact")
})


app.post("/add",(req,res)=>{
    res.send("Server Started")
})

app.listen(8080,()=>{
    console.log("Server Started")
})









