import { Link } from "react-router-dom"

const Navbar=()=>
{
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/userdashboard">Users</Link>
            <Link to="/admindashboard">Admin</Link>
        </div>
    )
}
export default Navbar