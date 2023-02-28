let initialdata={isloggedin:false}
const Reducer=(state=initialdata,action)=>
{
    if(action.type==="login")
    {
        state=action.payload
    }
    return state
}
export default Reducer