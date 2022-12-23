const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId

const newBook = new mongoose.Schema({
    name:String,
    author: {
        type: objectid,
        
        ref: "newAuthor"
    },
    price:Number,
    publisher:{
        type: objectid,
        ref: "Publisher"
    }

},{ timestamps: true });

module.exports = mongoose.model('newBook', newBook)