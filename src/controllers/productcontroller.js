const productModel = require("../models/productmodel")

const createpro = async function(req,res){
  const productcreated = await productModel.create(req.body)
  res.send(productcreated)
}

module.exports.createpro = createpro