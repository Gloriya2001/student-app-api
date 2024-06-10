const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name": String,
        "rollNo": String,
        "admNo":String,
        "parentName":String,
        "collegeName":String,
        "dob":String,
        "emailId":String,
        "password":String,
        "confirmPassword":String

    }
)

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel} 