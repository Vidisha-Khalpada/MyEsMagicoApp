import {Route,Routes} from "react-router-dom"
import AccessDenied from "./AccessDenied"
import AdminDash from "./AdminDash"
import AdminSignUp from "./AdminSignup"
import Home from "./Home"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import SignUp from "./SignUp"
import UserDash from "./UserDash"
const AllRoutes=()=>
{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usersignup" element={<SignUp />}/>
            <Route path="/adminsignup" element={<AdminSignUp />}/>
            <Route path="/userdashboard" element={<PrivateRoute><UserDash /></PrivateRoute>}/>
            <Route path="/admindashboard" element={<PrivateRoute><AdminDash /></PrivateRoute>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="verifyadmin" element={<AccessDenied/>}/>
        </Routes>
    )
}
export default AllRoutes

