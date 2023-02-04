require('dotenv').config()
const express= require("express")
const app =express()
const cors= require("cors")
app.use(cors())
app.use(express.json())
const port= process.env.PORT || 5400

const addProducts =require("./defaults")

const Router =require("./routes/route")

app.use("/",Router)

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
addProducts()
