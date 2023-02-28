
const express=require("express")
const Connection = require("./Config/Connection")
const router = require("./Routes/Routes")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use("/",router)


app.listen(4000,()=>
{
    try {
        Connection()
        console.log("The server is listening to port 4000")
    } catch (error) {
        console.log(error)
    }
})