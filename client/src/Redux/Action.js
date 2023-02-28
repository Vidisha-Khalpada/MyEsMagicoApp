const Action=(data,dispatch)=>
{
    dispatch({
        type:"login",
        payload:data
    })
}
export default Action