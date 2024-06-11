const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const students = require("./models/student")


const app = express()
app.use(cors())
app.use(express.json())//must to enable json




app.post("/add",(req,res)=>{
    let input = req.body
    console.log(input)

    res.send("Server Started")

})

app.listen(8080,()=>{
    console.log("Server Started")
})









