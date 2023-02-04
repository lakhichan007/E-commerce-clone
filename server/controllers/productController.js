
const {Products} = require("../module/Schema")
const getProducts= async()=>{
    try{
        let allproducts =await Products.find()
        res.json({allproducts})
    }
    catch(err){
        res.json({message:err.message})}
}

module.exports={getProducts}