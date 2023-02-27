const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
     
title:String,
img1:String,
img2:String,
price:String,
PriceToAccess:Number,
Stock:Number,
ProductDescription:Array,
ProductDetails:Array,
Category:String
 
})

const ProductModel=mongoose.model("product",productSchema)

module.exports={ProductModel}

