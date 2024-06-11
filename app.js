const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { studentmodel } = require("./models/student")


const app = express()
app.use(cors())
app.use(express.json())//must to enable json

mongoose.connect("mongodb+srv://gloria2001:gloria2001@cluster0.ipg35w1.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0")



app.post("/add", (req, res) => {

    let input = req.body//input read

    let student = new studentmodel(input)
    student.save()
    console.log(student)

    res.json({"status":"success"})

})

app.get("/view",(req,res)=>{

studentmodel.find().then(
    (data)=>{
        res.json(data)
    }
).catch(
    (error)=>{
        res.json(error)
    }
)

})



app.listen(8080, () => {
    console.log("Server Started")
})









