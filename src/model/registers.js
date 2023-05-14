const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    firstname: String, 
    lastname: String,
    email:String,
    gender: String,
    phone:Number,
    password: Number
})

const Register = new mongoose.model("Register", employeeSchema)
module.exports = Register;