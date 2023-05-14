const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/societySquare')
.then(() => console.log("Connection success with MongoDB"))
.catch(err => console.log(err));