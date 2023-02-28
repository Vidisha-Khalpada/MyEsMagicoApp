import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const url=process.env.REACT_APP_URL
const Login=()=>
{
    const[input,setinput]=useState({email:"",password:""})
    const navigate=useNavigate()
    const SubmitData=()=>
    {
        axios.post(`${url}/api/login`,input,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            if(res.data.token)
            {
                localStorage.setItem("authtoken",res.data.token)
                localStorage.setItem("username",res.data.name)
                alert("The login is successfull")
                navigate("/")
            }
            else
            {
                alert("The user is not registered. Please register to continue...")
            }
        })
    }
    
    return(
        <div>
            <h2>Login</h2>
            <button onClick={()=>
            {
                navigate("/usersignup")
            }}>User SignUp</button>
            <button onClick={()=>
            {
                navigate("/verifyadmin")
            }}>Admin SignUp</button><br/>
            <label>Email</label><br/>
            <input type="email" placeholder="Enter your email" onChange={(e)=>
            {
                setinput({...input,email:e.target.value})
            }}></input><br/>
            <label>Password</label><br/>
            <input type="password" placeholder="Enter your password" onChange={(e)=>
            {
                setinput({...input,password:e.target.value})
            }}></input><br/>
            <button onClick={SubmitData}>Submit</button><br/>
        </div>
    )

}
export default Login