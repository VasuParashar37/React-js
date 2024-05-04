import React from "react";
import ReactDOM from "react-dom/client";
// import {Title,Header} from "./components/Header";
// or
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer";

// or
// import * as XYZ from "./components/Header.js"

// const styles={
//     border:"1px solid red"
// }

// inline css in Funtional Component

// const Jsx=()=>(
//     <div style={{
//         backgroundColor:"yellow"
//     }}>
//         <h1>Hello</h1>
//         <h2>Bhai</h2>
//     </div>
// )
const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);