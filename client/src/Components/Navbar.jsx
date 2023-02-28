import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar=()=>
{
    const[name,setname]=useState(localStorage.getItem("username")||"Guest")
    const[login,isloggedin]=useState(false)
    useEffect(()=>
    {
        let loggedinusername=localStorage.getItem("username")
        if(loggedinusername)
        {
            setname(loggedinusername)
            isloggedin(true)
        }
    },[login])
    return(
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/userdashboard">Users</Link>
            <Link to="/admindashboard">Admin</Link>
            <button>Hi,{name}</button>
            <button disabled={login?false:true} onClick={()=>
            {
                localStorage.removeItem("authtoken")
                localStorage.removeItem("username")
                isloggedin(false)
            }} >LOGOUT</button>
        </div>
    )
}
export default Navbar