const AuthorModel= require("../models/authorModel")
const publisher = require('../models/publisherModel')
const bookModel= require("../models/newbook")
const { count } = require("console")

var objectId = require('mongodb').ObjectId


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const createpublisher= async function (req, res) {
    let publish = req.body
    let publishers = await publisher.create(publish)
    res.send({data: publishers})
}
const createBook = async (req,res)=>{
    if(!(req.body.author && req.body.publisher)){
        return res.send("author/publisher is required");
        }
      else if(!(objectId.isValid(req.body.author)&& objectId.isValid(req.body.publisher))){
        return res.send("author/publisher is not present");
      }
      else{
        let BookCreated = await bookModel.create(req.body);
        res.send({msg :BookCreated})
      }  
}
const getbooks= async (req,res)=>{
    let Book4 = await bookModel.find().populate('author').populate('publisher')
    res.send({Data : Book4})
}
const updatebook = async function(req,res){
    const publishers = await publisher.find({name:{$in:['Penguin','HarperCollins']}})
    const publishersid = publishers.map(x=>x._id)
    const updateddata = await bookModel.updateMany({publisher:{$in:publishersid}}, {$set:{ishardcover:true}}, {upsert:false} )
    res.send({data: updateddata}) 
}
const updateprice=async function(req,res){
    
  const updatePrice=await bookModel.updateMany(
      {ratings:{$gt:3.5}},
      {$inc:{"price":2}},
      {new:true})
  res.send({msg:updatePrice});
}
module.exports.updateprice = updateprice
module.exports.createAuthor= createAuthor
module.exports.createpublisher= createpublisher
module.exports.createBook= createBook
module.exports.getbooks = getbooks
module.exports.updatebook = updatebook