const mongoose = require("mongoose")

const noticeSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    notice: String

})

const Notice = new mongoose.model("Notice", noticeSchema)
module.exports = Notice;