import axios from "axios"
import { useEffect, useState } from "react"

let url=process.env.REACT_APP_URL
const AdminDash=()=>
{
    let[ag,setag]=useState(false)
    let[userdata,setuserdata]=useState([])
    const[vis,setvis]=useState(false)
    const[inputrole,setinputrole]=useState({role:"", id:""})
    const[searchinput,setsearchinput]=useState("")
    const SearchData=()=>
    {
        let text="Bearer "+localStorage.getItem("authtoken")
        console.log(searchinput)
        axios.post(`${url}/api/searchdata`,{
            data:searchinput,
            headers:{
                "Authorization":text
            }
        }).then((res)=>
        {
            console.log(res)
            if(res.data.data)
            {
                setuserdata(res.data.data)
                setag(true)
            }
            else
            {
                setuserdata([])
                alert("No user data matched")
            }
        })
    }
    const SubmitData=()=>
    {
        let text="Bearer "+localStorage.getItem("authtoken")
        axios.post(`${url}/api/edituser`,inputrole,{
            headers:{
                "Authorization":text
            }
        }).then((res)=>
        {
           if(res.data.message=="The data is updated")
           {
            alert("The data has been updated...")
            axios.get(`${url}/api/admindash`,{
                headers:{
                    "Authorization":text
                }
            }).then((res)=>{
                if(res.data.data)
                {
                    setag(true)
                    setuserdata(res.data.data)
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
        axios.get(`${url}/api/admindash`,{
            headers:{
                Authorization:text
            }
        }).then((res)=>{
            
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
            <>
                <div>
                <input type="text" placeholder="Search the user" onChange={(e)=>
                {
                    setsearchinput(e.target.value)
                }}></input>
                <button onClick={()=>
                {
                    SearchData()
                }}>SearchData</button>
            </div>
            <div id="admindash">
                {
                    userdata.map((ele,i)=>
                    {
                        if(ele.role!="admin")
                        return(
                            <div key={i}>
                                <h4>ID: {ele._id}</h4>
                                <h4>Name: {ele.name}</h4>
                                <h4>Email: {ele.email}</h4>
                                <h4>Password: *****</h4>
                                <h4>Role: {ele.role}</h4>
                                <button onClick={()=>
                                {
                                    setvis(true)
                                }}>Edit Role</button><br/>
                                <input hidden={vis?false:true} type="text" placeholder="Enter the role to edit" onChange={(e)=>
                                {
                                    setinputrole({id:ele._id,role:e.target.value})
                                }}></input><br/>
                                <button hidden={vis?false:true} onClick={()=>
                                {
                                    SubmitData()
                                }}>Submit</button>
                            </div>
                        )
                    })
                }
                
            </div>
            </>
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