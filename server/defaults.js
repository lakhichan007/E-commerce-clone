

const products= require("./Constants/data")
const {Products} = require("./module/Schema")

const addProducts= async()=>{
    try{
        let currentData= await Products.find().count()
        // console.log(currentData)
        if(currentData===0){
            await Products.create(products)
        }

    }
    catch(err){
        console.log(err)
    }
}
module.exports=addProducts