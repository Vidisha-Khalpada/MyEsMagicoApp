const jwt=require("jsonwebtoken")
const env=require("dotenv")
env.config({
    path:".env"
})
const secret=process.env.SECRET
const Authorization=(req,res,next)=>
{
    const token=req.headers?.authorization?.split(" ").pop()
    if(token)
    {
        const decoded=jwt.verify(token,secret)
        if(decoded)
        {
            next()
        }
        else
        {
            return res.status(400).send("Please login first..")
        }
    }
    else
    {
        return res.send("Please login first..")
    }
}
module.exports=Authorization
