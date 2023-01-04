const express=require("express");
const router=express.Router();
const authorController=require("../controllers/authourController");
const blogController=require('../controllers/bloggController')
const middleWare=require("../middleware/middl")

router.post("/authors",authorController.createAuthor);
//=========================================================
router.post('/blogs',middleWare.authen, blogController.createBlog);
//====================================================================
router.get("/blogs",blogController.getBlogs);
//========================================================================
router.put("/blogs/:blogId",middleWare.authen,middleWare.authoris,blogController.updateBlog);
//====================================================================================================
router.delete("/blogs/:blogId",middleWare.authen,middleWare.authoris,blogController.deletById);
//======================================================================================================
router.delete("/blogs",middleWare.authen,middleWare.authoris,blogController.deleteQuery);
//==========================================================================================================

router.post("/login",authorController.login);





module.exports=router
