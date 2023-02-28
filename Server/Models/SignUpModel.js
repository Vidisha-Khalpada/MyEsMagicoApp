const mongoose=require("mongoose")
const SignUpSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String
})
const SignUpModel=mongoose.model("Users",SignUpSchema)

module.exports=SignUpModel