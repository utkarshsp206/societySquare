const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String

})

const Visitor = new mongoose.model("Visitor", visitorSchema)
module.exports = Visitor;