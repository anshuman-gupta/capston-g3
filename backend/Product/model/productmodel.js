const mongoose = require("mongoose")
const schema = mongoose.Schema
mongoose.connect("mongodb+srv://abhi_capstone:g3capstone@cluster0.jwbklkz.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log("connecting prduct model")).catch((err)=>console.log(err))

const productSchema = new schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        requied: true
    },
    category:{
        type: String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const productModel = mongoose.model("productdata", productSchema)

module.exports= productModel
