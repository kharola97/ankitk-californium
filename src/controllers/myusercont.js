const myUserModel = require("../models/userModel")
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const ObjectId = require('mongodb').ObjectId;



const myUserData = async function(req,res){
    let data = req.body
    let finalData = await myUserModel.create(data)
    return res.send({msg:finalData})
}

const login = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let myUser = await myUserModel.findOne({ emailId: userName, password: password });
      if (!myUser)
        return res.send({
          status: false,
         msg: "username or the password is not corerct",
       });
       let token = jwt.sign({
        userId:myUser._id,
        name: myUser.firstName,
       }, "This is secret")
       res.setHeader("x-auth-token", token);

       res.send({status: true, token:token})
    }

const userloggedin = async function(req,res){
    let userid = req.params.userId
     if(!ObjectId.isValid(userid)){
            return res.send("Id is not valid")
           }
            let user = await userModel.findById(userid)
            if(!user){
                return res.send("user is not present")
            }
            else{
                return res.send({status:true, msg:user})
            }
        
    }

const updateUser = async function(req,res){
       let userid = req.params.userId
       let finduser = await userModel.findById(userid)
        if(!finduser){
            return res.send("User not found")
        }
        else{
            let updateduser = await userModel.findOneAndUpdate({_id: userid},req.body,{new:true})
            return res.send({status:true, msg:updateduser})
        }
}

const postMessage = async function(req,res){
    let message = req.body.message
    
    let finduser = await userModel.findById(req.params.userId)
   
    if(!finduser){
        return res.send("User not found")
    }
    else{
        let updatedpost = finduser.posts
        updatedpost.push(message)
        let updateduser = await userModel.findOneAndUpdate({_id: finduser._id},{posts:updatedpost},{new:true})
        return res.send({status:true, msg:updateduser})
    }

}


const deleteuser = async function(req,res){
    let userid = req.params.userId
    
    let finduser = await userModel.findById(userid)
       if(!finduser){
            return res.send("User not found")
           }
        else{
            let updateduser = await userModel.findOneAndUpdate({_id: userid},{$set:{isDeleted:true}},{new:true})
            return res.send({status:true, msg:updateduser})
        }
}


module.exports.myUserData = myUserData
module.exports.login = login
module.exports.userloggedin = userloggedin
module.exports.updateUser = updateUser
module.exports.deleteuser = deleteuser
module.exports.postMessage = postMessage