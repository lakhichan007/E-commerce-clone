

const products= require("./Constants/data")
const Mydata = require("./module/productsSchema")

const addProducts= async()=>{
    try{
        let currentData= await Mydata.find().count()
        if(currentData===0){
            await Mydata.create(products)
        }

    }
    catch(err){
        console.log(err)
    }
}
module.exports=addProducts