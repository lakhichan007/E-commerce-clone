const express=require("express")
const router=express.Router()
const {userSignup,userLogin}= require("../controllers/userController")
const {getProducts}=require("../controllers/productController")

router.post("/signup",userSignup);
router.post("/login",userLogin);
router.get("/products",getProducts)

module.exports =router