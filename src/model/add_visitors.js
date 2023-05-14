const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    gender: String

})

const Visitor = new mongoose.model("Visitor", visitorSchema)
module.exports = Visitor;