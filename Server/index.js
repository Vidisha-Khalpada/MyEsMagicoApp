
const express=require("express")
const Connection = require("./Config/Connection")
const router = require("./Routes/Routes")
const app=express()
app.use("/",router)
app.use(express.json())

app.listen(4000,()=>
{
    try {
        Connection()
        console.log("The server is listening to port 4000")
    } catch (error) {
        console.log(error)
    }
})