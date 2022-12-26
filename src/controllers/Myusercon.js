const userMod = require("../models/myusermodel")

const createMyUser = async function(req,res){
    let data = req.body
    let checkData = req.headers.isfreeappuser
    if(checkData==null)
{
    return res.send("mandatory header is missing")
}
let head = req.headers.isfreeappuser
if(head=="true"){
  data.isFreeAppUser = true
  const myUsercreated = await userMod.create(data)
  return res.send(myUsercreated)
}
else{
  data.isFreeAppUser = false
  const myUsercreated = await userMod.create(data)
  return res.send(myUsercreated)
}
 
}

module.exports.createMyUser = createMyUser