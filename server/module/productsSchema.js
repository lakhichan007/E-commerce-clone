const mongoose= require("mongoose")

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log(`Connect to Database`)
})
.catch(err=>{
    console.log(err)
})

const productSchema= new mongoose.Schema({
    id:{type:String ,unique:true},
    url:{type:String},
    detailUrl:{type:String},
    title:{type:Object},
    price:{type:Object},
    quantity:{type:Number},
    description:{type:String},
    discount:{type:String},
    tagline:{type:String}
})

const Mydata= mongoose.model("Product",productSchema)
module.exports=Mydata