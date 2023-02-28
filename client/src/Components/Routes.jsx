import {Route,Routes} from "react-router-dom"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import SignUp from "./SignUp"
const AllRoutes=()=>
{
    return(
        <Routes>
            <Route path="/usersignup" element={<SignUp />}/>
            <Route path="/adminsignup" element/>
            <Route path="/userdashboard" element={<PrivateRoute></PrivateRoute>}/>
            <Route path="/admindashboard" element={<PrivateRoute></PrivateRoute>}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}
export default AllRoutes

