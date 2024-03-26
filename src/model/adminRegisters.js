const mongoose = require("mongoose")

const adminregisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: Number
})

const adminRegister = new mongoose.model("adminRegister", adminregisterSchema)
module.exports = adminRegister;