import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const url=process.env.REACT_APP_URL

const AdminSignUp=()=>
{
    let[input,setinput]=useState({name:"",email:"", password:""})
    const navigate =useNavigate()
    const SubmitData=()=>
    {
        axios.post(`${url}/api/adminsignup`,input,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            if(res.data.message=="Signup Successfull")
            {
                alert("The user has successfully Signed Up..")
                navigate("/login")
            }
            else if(res.data.message=="The user is already registered.")
            {
                alert("The user is already registered.. Please continue to login")
                navigate("/login")
            }
            else
            {
                alert("Enter correct credentials")
            }
        })
        
    }
    return(
        <div id="adminpanel">
            <label>Name</label><br/>
            <input type="text" placeholder="Enter your name" onChange={(e)=>
            {
                setinput({...input,name:e.target.value})
            }}></input><br/>
            <label>Email</label><br/>
            <input type="email" placeholder="Enter your email" onChange={(e)=>
            {
                setinput({...input,email:e.target.value})
            }} ></input><br/>
            <label>Password</label><br/>
            <input type="password" placeholder="Enter your password" onChange={(e)=>
            {
                setinput({...input,password:e.target.value})
            }}/><br/>
            <button onClick={SubmitData}>Submit</button>
        </div>
    )
}
export default AdminSignUp