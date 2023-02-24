const mongoose= require("mongoose")

const adminSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    email:{type:String,required:true},
    mobile:{type:Number,required:true},
    GST_no:{type:String,required:true},
    password:{type:String,required:true},
    authenticated:{type:Boolean},
    status:{type:Boolean}
})

const adminModel= mongoose.model("admin",adminSchema) 

module.exports={
    adminModel
}