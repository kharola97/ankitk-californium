const jwt = require("jsonwebtoken");


const authenticate = async function(req, res, next) {
    let tok = req.headers["x-auth-token"]
        if(!tok){
            return res.send("token is missing")
        }
         
        next()
    }
    const authorise = async function(req, res, next){
        let tok = req.headers["x-auth-token"]
        let verifysecret = jwt.verify(tok, "This is secret")
        if(!verifysecret){
            return res.send("invalid token")
        }
        let userid = req.params.userId
        let tokenid = verifysecret.userId
        
        if(userid!=tokenid){
           return res.send("auhtorization error")
        }
        next()
    }
module.exports.authorise = authorise
module.exports.authenticate = authenticate
        