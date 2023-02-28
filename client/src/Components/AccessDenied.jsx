import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AccessDenied=()=>
{
    const navigate=useNavigate()
    let[input,setinput]=useState("")
    const SubmitData=()=>
    {
        if(input==="masaischool")
        {
            alert("Naivagting to adminpage..")
            navigate("/adminsignup")
        }
        else
        {
            alert("Acess Denied..")
        }
    }
    return(
        <div>
            <h2>Acess Denied!!! Please enter password key to continue to admin login and signup page</h2>
            <label>Secret Key</label><br/>
            <input type="text" placeholder="Enter the key to access" onChange={(e)=>
            {
                setinput(e.target.value)
            }}></input>
            <button onClick={SubmitData}>SUBMIT</button>
        </div>
    )
}
export default AccessDenied