import axios from "axios"
import { useEffect, useState } from "react"

let url=process.env.REACT_APP_URL
const AdminDash=()=>
{
    let[ag,setag]=useState(false)
    let[userdata,setuserdata]=useState([])
    useEffect(()=>
    {
        let text="Bearer "+localStorage.getItem("authtoken")
        axios.get(`${url}/api/admindash`,{
            headers:{
                Authorization:text
            }
        }).then((res)=>{
            console.log(res)
            if(res.data.data)
            {
                setuserdata(res.data.data)
                setag(true)
            }
            else
            {
                setag(false)
            }
        })
    },[])
    
    if(ag)
    {
        return(
            
            userdata.map((ele,i)=>
            {
                if(ele.role==="user")
                return(
                    <div key={i}>
                        <h4>ID: {ele._id}</h4>
                        <h4>Name: {ele.name}</h4>
                        <h4>Email: {ele.email}</h4>
                        <h4>Password: *****</h4>
                        <h4>Role: {ele.role}</h4>
                    </div>
                )
            })
            
        )
        
    }
    else
    {
        return(
            <h2>Access Denied</h2>
        )
    }
}
export default AdminDash