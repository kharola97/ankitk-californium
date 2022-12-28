const express = require('express');
const router = express.Router();
const userController= require("../controllers/myusercont")
const authentication = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.myUserData  )

router.post("/login", userController.login)
 router.get("/login/:userId",authentication.authenticate, userController.userloggedin)
 router.put("/login/:userId",authentication.authenticate, authentication.authorise, userController.updateUser)
 router.post("/login/:userId/posts",authentication.authenticate,authentication.authorise, userController.postMessage)
router.delete("/login/:userId",authentication.authenticate,authentication.authorise, userController.deleteuser)

//The userId is sent by front end
//router.get("/users/:userId", userController.getUserData)

//router.put("/users/:userId", userController.updateUser)

module.exports = router;