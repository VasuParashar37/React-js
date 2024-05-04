import { useState } from "react";

const LoggedIn=()=>{
    return true;
}

export const Title=()=>(
    <a href="#">
        <img 
        className="logo"
        alt="logo"
        src="https://cdn-images-1.medium.com/max/45/1*v5SYqjYEdQMPIwNduRrnCw@2x.png">
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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {/* {
            // Expression vs Statements
            ((a=10),console.log(a))
        } */}

        {isLoggedIn?(
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
        ):
        (
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        )}
    </div>
    )
}
export default Header; 