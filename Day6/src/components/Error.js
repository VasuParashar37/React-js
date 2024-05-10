import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    const{status,statusText}=err;
    console.log(err);
    return(
    <>
    <h1>Oops!</h1>
    <h1>Something Went Wrong !!</h1>
    <h2>{status+" : "+statusText}</h2>
    {/* or */}
    {/* <h2>{err.status+" : "+err.statusText}</h2> */}
    </>
    )
}
export default Error;