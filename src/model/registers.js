const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    name: String, 
    email:String,
    username:String,
    password: Number
})

const Register = new mongoose.model("Register", registerSchema)
module.exports = Register;