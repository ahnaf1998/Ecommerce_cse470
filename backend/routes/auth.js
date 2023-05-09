const router = require("express").Router();
const{registerUser,loginUser}=require( "../Controllers/authController.js")
const{checkUser}=require("../Middleware/AuthMiddleware")



router.post("/",checkUser)
router.post("/register",registerUser)
router.post("/login",loginUser)


module.exports = router;


