import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Action from "../Redux/Action"

const Navbar=()=>
{
    const[name,setname]=useState(localStorage.getItem("username")||"Guest")
    //const[login,isloggedin]=useState(false)
    const dispatch=useDispatch()
    const {isloggedin}=useSelector((storedata)=>storedata)
    useEffect(()=>
    {
        let loggedinusername=localStorage.getItem("username")
        if(loggedinusername)
        {
           console.log(isloggedin)
            setname(loggedinusername)
        }
    },[isloggedin])
    return(
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/userdashboard">Users</Link>
            <Link to="/admindashboard">Admin</Link>
            <button>Hi, {name}</button>
            <button disabled={isloggedin?false:true} onClick={()=>
            {
                localStorage.removeItem("authtoken")
                localStorage.removeItem("username")
                Action({isloggedin:false},dispatch)
                window.location.reload()
            }} >LOGOUT</button>
        </div>
    )
}
export default Navbar