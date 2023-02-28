import { useNavigate } from "react-router-dom"

const Home=()=>
{
    const navigate=useNavigate()
    return(
        <div id="homediv">
            <h1>Welcome Users to the Application!!</h1>
            
            <button onClick={()=>
            {
                navigate("/usersignup")
            }}>User</button>
            <button onClick={()=>
            {
                navigate("/verifyadmin")
            }}>Admin</button><br/>
        </div>
    )
}
export default Home