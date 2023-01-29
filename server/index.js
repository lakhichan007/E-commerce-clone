require('dotenv').config()
const express= require("express")
const app =express()
const port= process.env.PORT || 5400
const Mydata =require("./module/productsSchema")
const addProducts =require("./defaults")

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
addProducts()
