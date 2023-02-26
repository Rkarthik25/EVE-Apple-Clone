const express=require("express")
const {ProductModel}= require("../models/product.model")

const productRouter =express.Router()
// get all products
productRouter.get("/",async(req,res)=>{
 const {Category,PriceToAccess}= req.query

 let filter
 if(Category){
    filter={Category}
 }
 else {filter={}
}
    const product =await ProductModel.find(filter).sort({PriceToAccess})
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

// ! patch the products form admin

productRouter.patch("/update/:id",async(req,res)=>{
    console.log(req.params.id,req.body)
    try{
        await ProductModel.findByIdAndUpdate(req.params.id,req.body)
        
        res.send("post has been updated")
        }
        catch{
            res.send("can not update the post")
        }
})

module.exports={productRouter}
