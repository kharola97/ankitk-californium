const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

//const commonMW = require ("../middlewares/commonMiddlewares")
const product = require("../controllers/productcontroller")
const myUser = require("../controllers/Myusercon")
const myorder = require("../controllers/orderpur");
const midware = require('../middlewares/headermw');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/products", product.createpro )
router.post("/myUser", myUser.createMyUser )
router.post("/myorder",midware.head1,midware.checkid, myorder.myOrderDetail )

//router.post("/createBook", commonMW.abc, BookController.createBook  )
//router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

module.exports = router;