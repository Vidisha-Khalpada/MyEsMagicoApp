import axios from "axios"
import { useEffect, useState } from "react"
let url=process.env.REACT_APP_URL
const UserDash=()=>
{
    const[ag,setag]=useState(false)
    const[userdata,setuserdata]=useState({})
    useEffect(()=>
    {
        let text="Bearer "+localStorage.getItem("authtoken")
        axios.get(`${url}/api/userdash`,{
            headers:{
                "Authorization":text
            }
        }).then((res)=>{
            if(res.data.data)
            {
                setag(true)
                setuserdata(res.data.data)
            }
        })
    },[])
    if(ag)
    {
        return(
            <div>
                <h4>Name: {userdata.name}</h4>
                <h4>Email: {userdata.email}</h4>
                <h4>Password: {userdata.password}</h4>
                <h4>Role: {userdata.role}</h4>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <h2>Access Denied</h2>
            </div>
        )
    }
}
export default UserDash