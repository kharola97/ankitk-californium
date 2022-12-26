const mongoose = require('mongoose');

const myUserSchema = new mongoose.Schema( {
    Name: String,
    balance:{
        type: Number,
        default: "100"
    },
    age: Number,
    address:String,
 	gender: {
        type:String,
        lowercase:true,
        enum: ["male","female", "other"]
    },
	isFreeAppUser: {
        type:Boolean,
        default: "false"
    }

   
});

module.exports = mongoose.model('newuser', myUserSchema) 