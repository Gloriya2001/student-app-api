const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name": String,
        "rollNo": String


    }
)

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel} 