import {Route,Routes} from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
const AllRoutes=()=>
{
    return(
        <Routes>
            <Route path="/" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}
export default AllRoutes

