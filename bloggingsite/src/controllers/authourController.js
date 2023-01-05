const jwt = require("jsonwebtoken");
const validator=require("validator");
const author=require("../modules/authorModel");

const createAuthor=async function(req,res){
  try {
    let data=req.body;

    if(!(validator.isAlpha(data.fname)||validator.isAlpha(data.lname)))  return res.status(400).send({status:false,msg:"invalid name"})
     
    
    let fname=data.fname.trim().split(" ").join("");
     let lname=data.lname.trim().split(" ").join("");
    data.fname=fname;
    data.lname=lname;

     if(!(validator.isEmail(req.body.email))) return res.status(400).send({status:false,msg:"please put a valid email"})
     
     if (!validator.isStrongPassword(data.password)) {
      return res.status(400).send({ status: false, msg: "Kindly use atleast one uppercase alphabets, numbers and special characters for strong password." })
}
     let setData=await author.create(data);
    res.status(201).send({status:true,data:setData});
}catch(error){
    res.status(500).send({status:false,msg:error.message})
}
}

const login = async(req, res) => {
  try {
      let username = req.body.email
      let password = req.body.password

      if (!username || !password) {
          return res.status(400).send({ status: false, msg: "Please Enter email id and password both." })
      }

      let auth = await author.findOne({ email: username }).select({ email: 1, password: 1 })

      if (!auth) {
          return res.status(400).send({ status: false, msg: "Please enter correct email." })
      }
      if (password !== auth.password) {
          return res.status(401).send({ status: false, msg: "Email Id and password are not matched. Enter the correct password." })
      }

      let token = jwt.sign({ authorId: auth._id.toString(), batch: "californium"},"californium-blog");
      res.setHeader("x-api-key", token)
      res.status(201).send({ status: true, data: token })

  } catch (error) {
      res.status(500).send({ status: false, msg: error.message })
  }
}


module.exports={createAuthor,login};
