import React from "react";
import ReactDOM from "react-dom/client";
// import {Title,Header} from "./components/Header";
// or
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import Login from "./components/LoginPage.js";
import Profile from "./components/Profile.js";

import {RestaurantMenu,RM2,RM3,RM4,RM5,RM6,RM7,RM8,RM9,RM10,RM11,RM12,RM13,RM14,
    RM15,RM16,RM17,RM18,RM19,RM20,RM21,RM22,RM23,RM24,RM25,RM26,RM27,RM28} from "./components/RestaurantMenu.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


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
        {/* <Body/> */}
        <Outlet/>
        <Footer/>
        </>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/home",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/restaurant/1",
                element:<RestaurantMenu/>
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    },

                ],
            },
            {
                path:"/restaurant/2",
                element:<RM2/>
            },
            {
                path:"/restaurant/3",
                element:<RM3/>
            },
            {
                path:"/restaurant/4",
                element:<RM4/>
            },
            {
                path:"/restaurant/5",
                element:<RM5/>
            },
            {
                path:"/restaurant/6",
                element:<RM6/>
            },
            {
                path:"/restaurant/7",
                element:<RM7/>
            },
            {
                path:"/restaurant/8",
                element:<RM8/>
            },
            {
                path:"/restaurant/9",
                element:<RM9/>
            },
            {
                path:"/restaurant/10",
                element:<RM10/>
            },
            {
                path:"/restaurant/11",
                element:<RM11/>
            },
            {
                path:"/restaurant/12",
                element:<RM12/>
            },
            {
                path:"/restaurant/13",
                element:<RM13/>
            },
            {
                path:"/restaurant/14",
                element:<RM14/>
            },
            {
                path:"/restaurant/15",
                element:<RM15/>
            },
            {
                path:"/restaurant/16",
                element:<RM16/>
            },
            {
                path:"/restaurant/17",
                element:<RM17/>
            },
            {
                path:"/restaurant/18",
                element:<RM18/>
            },
            {
                path:"/restaurant/19",
                element:<RM19/>
            },
            {
                path:"/restaurant/20",
                element:<RM20/>
            },
            {
                path:"/restaurant/21",
                element:<RM21/>
            },
            {
                path:"/restaurant/22",
                element:<RM22/>
            },
        ]   
    },
    // {
    //     path:"about",
    //     element:<About/>
    // }
])



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);