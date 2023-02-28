const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const env=require("dotenv")
env.config({
    path:".env"
})
const SignUpModel = require("../Models/SignUpModel")
const router=express.Router()
const secret=process.env.SECRET

router.post("api/usersignup",async(req,res)=>
{
    try {
        let {name,email,password}=req.body
        let existinguser=await SignUpModel.find({email:email})
        if(existinguser.length>0)
        {
            return res.send({message:"The user is already registered."})
        }
        bcrypt.hash(password,10,async(err,hash)=>
        {
            existinguser=await SignUpModel.create({
                name:name,
                email:email,
                password:hash,
                role:"user"
            })
            res.send({
                message:"Signup Successfull"
            })
        })
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
})

router.post("api/adminsignup",async(req,res)=>
{
    try {
        let {name,email,password}=req.body
        let existinguser=await SignUpModel.find({email:email})
        if(existinguser.length>0)
        {
            return res.send({message:"The user is already registered."})
        }
        bcrypt.hash(password,10,async(err,hash)=>
        {
            existinguser=await SignUpModel.create({
                name:name,
                email:email,
                password:hash,
                role:"admin"
            })
            res.send({
                message:"Signup Successfull"
            })
        })
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
})

router.post("api/login",async(req,res)=>
{
    try {
        let{email,password}=req.body
        let existinguser=await SignUpModel.find({email:email})
        if(existinguser.length>0)
        {
            bcrypt.compare(password,existinguser[0].password,function(err,result)
            {
                if(result)
                {
                    let{name,email,role,_id}=existinguser[0]
                    const token=jwt.sign({name,email,role,_id},secret)
                    return res.send({
                        token:token,
                        name:name,
                        message:"Login Successfull"
                    })
                }
                else
                {
                    return res.status(400).send("Incorrect Password")
                }
            })
        }
        else
        {
            return res.status(400).send("The user has not registered")
        }
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
})
module.exports=router