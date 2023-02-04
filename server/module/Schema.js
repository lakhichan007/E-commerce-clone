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

const userSchema=new mongoose.Schema({
    email:{type:String},
    mobile:{type:Number},
    password:{type:String}
})
const Products= mongoose.model("Product",productSchema)
const Users=mongoose.model("user",userSchema)
module.exports={Products,Users}