//const orderModel = require("../models/ordermodel")
const userModel = require("../models/myusermodel")
const productModel = require("../models/productmodel")
const Objectid = require("mongodb").ObjectId


const head1 = function(req,res,next){
    
    let checkData = req.headers.isfreeappuser
    if(checkData==null)
{
    return res.send("mandatory header is missing")
}
      next()
}

const checkid = async function(req,res,next){
    let myid = req.body.userId
    let prid = req.body.productId
    
    const final = await userModel.findById(myid)
    if(!final){
        return res.send("user not found")
    }
    const final2 = await productModel.findById(prid)
    if(!final2){
        return res.send("product not found")
    }
    next()
}

module.exports={head1,checkid}