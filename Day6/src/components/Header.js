import { useState } from "react";
import download from "../assets/img/swiggy_logo.png";
import { Link } from "react-router-dom";

// const LoggedIn=()=>{
//     return true;
// }

export const Title=()=>(
    <a href="/">
        <img 
        className="logo"
        alt="logo"
        src={download}>
        </img>
    </a>
);


const Header=()=>{
    // const[changeVar,setChangeVar]=useState("Food Villa");

    const[isLoggedIn,setIsLoggedIn]=useState(false);

    return(
    <div className="header">
        <Title/>
        {/* <h1>{changeVar}</h1> */}
        {/* <h1>{changeVar}</h1> */}
        
        {/* <button onClick={()=>{
            setChangeVar("Food House");
        }}>Change</button> */}
        
        <div className="nav-items">
            <ul>
                <Link className="link" to={"/home"}>Home</Link>
                <Link className="link" to={"/about"}>About</Link>
                <Link className="link" to={"/contact"}>Contact</Link>
                <Link className="link" to={"/cart"}>Cart</Link>
            </ul>
        </div>
        {/* {
            // Expression vs Statements
            ((a=10),console.log(a))
        } */}

        {isLoggedIn?(
            <Link><button className="login" onClick={()=>setIsLoggedIn(false)}>Logout</button></Link>
        ):
        (
            <Link to={"/login"}><button className="login" onClick={()=>setIsLoggedIn(true)}>Login</button></Link>
        )}
    </div>
    )
}
export default Header; 