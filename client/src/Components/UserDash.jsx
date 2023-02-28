import axios from "axios"
import { useEffect, useState } from "react"
let url=process.env.REACT_APP_URL
const UserDash=()=>
{
    const[ag,setag]=useState(false)
    const[input,setinput]=useState({name:"",email:"",password:"",id:""})
    const[userdata,setuserdata]=useState({})
    const[vis,setvis]=useState({name:false,email:false,password:false})
    
    const SubmitData=()=>
    {
        let text="Bearer "+localStorage.getItem("authtoken")
        axios.post(`${url}/api/edituser`,input,{
            headers:{
                "Authorization":text
            }
        }).then((res)=>
        {
           console.log(res)
           if(res.data.message=="The data is updated")
           {
            alert("The data has been updated...")
            axios.get(`${url}/api/userdash`,{
                headers:{
                    "Authorization":text
                }
            }).then((res)=>{
                if(res.data.data)
                {
                    setag(true)
                    setuserdata(res.data.data)
                    let{email,name,_id,password}=res.data.data
                    setinput({name:name,email:email,password:password,id:_id})
                }
                else
                {
                    setag(false)
                }
            })
           }
        })
    }
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
                let{email,name,_id,password}=res.data.data
                setinput({name:name,email:email,password:password,id:_id})
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
            <div>
                <h4>Name: {userdata.name}</h4>
                <button onClick={()=>{
                    setvis({...vis,name:true})
                }}>Edit Name</button><br/>
                <input hidden={vis.name?false:true} type="text" placeholder="Enter name" onChange={(e)=>
                {
                    setinput({...input,name:e.target.value})
                }}/>
                <h4>Email: {userdata.email}</h4>
                <button onClick={()=>{
                    setvis({...vis,email:true})
                }}>Edit Email</button>
                <input hidden={vis.email?false:true} type="text" placeholder="Enter email" onChange={(e)=>
                {
                    setinput({...input,email:e.target.value})
                }}/>
                <h4>Password: ******</h4>
                <button onClick={()=>{
                    setvis({...vis,password:true})
                }}>Edit Password</button>
                <input hidden={vis.password?false:true} type="text" placeholder="Enter password" onChange={(e)=>
                {
                    setinput({...input,password:e.target.value})
                }}/>
                <h4>Role: {userdata.role}</h4>
                <button hidden={(vis.email || vis.name || vis.password)?false:true} onClick={SubmitData}>SUBMIT</button>
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