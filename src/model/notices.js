const mongoose = require("mongoose")

const noticeSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    status: String

})

const Notice = new mongoose.model("Notice", noticeSchema)
module.exports = Notice;