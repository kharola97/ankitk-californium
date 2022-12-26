const mongoose = require('mongoose');
const Objectid = require("mongodb").ObjectId

const orderSchema = new mongoose.Schema( {
    userId: {
        type:Objectid,
        ref : "newuser"
    },
	productId: {
        type:Objectid,
        ref: "product"
    },
	amount:Number,
	isFreeAppUser: Boolean, 
	date: String
});

module.exports = mongoose.model('order', orderSchema) 