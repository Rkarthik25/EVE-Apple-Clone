const express=require("express")
const {ProductModel} =require("../model/ProductModel")

const productRouter =express.Router()

productRouter.get("/",async(req,res)=>{
    const product =await ProductModel.find()
    res.send(product)
})
productRouter.get("/:category",async(req,res)=>{
    const params=req.params.category
const product=await ProductModel.find({Category:params})
res.send(product)
})
productRouter.get("/:id",async(req,res)=>{
    const params=req.params.id
    const product=await ProductModel.find({_id:params})
    res.send(product)
})

productRouter.post("/create",async(req,res)=>{
    const payload=req.body
    // console.log(payload)
    const post =new ProductModel(payload)
    await post.save()
    res.send({"msg":"posts created"})

})

module.exports={productRouter}