const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
     
title:{type:String,required:true},
img1:{type:String,required:true},
img2:String,
price:String,
PriceToAccess:{type:Number,required:true},
Stock:{type:String,required:true},
ProductDescription:{type:Array,required:true},
ProductDetails:Array,
Category:{type:String,required:true}
 
})

const ProductModel=mongoose.model("product",productSchema)

module.exports={ProductModel}