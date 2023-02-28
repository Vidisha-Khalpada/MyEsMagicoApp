import { useState } from "react"

const SignUp=()=>
{
    
    let[input,setinput]=useState({name:"",email:"", password:""})
    const SubmitData=()=>
    {
        
    }
    return(
        <div>
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
            }}/>
            <button onClick={SubmitData}>Submit</button>
        </div>
    )
}
export default SignUp