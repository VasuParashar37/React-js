import React from "react";
import ReactDOM from "react-dom/client";
import Header, {Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import * as a from "./components/Body";
{
// const heading1=React.createElement("h1",{
//     id:"head1",
//     key:100,
// },
//     "Heading 1",
// )
// const heading2=React.createElement("h1",{
//     id:"head2",
//     key:123,
// },
//     "Heading 2"
// )
// const container=React.createElement("div",{
// id:"cont"
// },[heading1,heading2]);



// // JSX Expression
// const head=(
//     <>
//     <h1 className="head" id="heading">Hello</h1>
//     <h1>Hello</h1>
//     <div>
//         <p>Kya kar raha h</p>
//         <p>Kuch nai bhai</p>
//     </div>
//     <p>
//         or
//     </p>
//     </>
// );
// console.log(head);



// const Heads=()=>(
//     <h1>Its Heads</h1>

// )
// const Head=()=>{
//     return(
//     <><Heads/>
//     <div className="container">
//         <h1>Compo1</h1>
//         <h1>Compo2</h1>
//     </div>
//     <div className="container2">
//         <h2>Compo3</h2>
//         <h2>Compo4</h2>
//     </div>
//     </>
//     )
// }
}
const AppLayout=()=>(
    <>
        {Header()}
        <Body/>
        <Footer/>
    </>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());



