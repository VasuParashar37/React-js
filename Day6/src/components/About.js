import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
// import Profile from "./ProfileClass.js";

// const About=()=>{
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <Profile name={"Vasu"}/>
//             <ProfileClass name={"Parashar"} var={"abc"}/>
//             <p>This is about section</p>
//         </div>
//     )
// }
class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }
    componentDidMount(){
        // best place to call an api 
        // console.log("parent - componentDidMount");
    }
    render(){
        // console.log("Parent Render");
        return(
            <div>
            <h1>About Us Page</h1>
            {/* <Profile name={"Vasu"}/> */}
            {/* <ProfileClass name={"First Child"} var={"abc"}/> */}
            <Profile />
            
            {/* <ProfileClass name={"Second Child"} var={"abc"}/> */}
            <p>This is about section</p>
         </div>
        )
    }
}
export default About;

/**
 * parent constructor
 * parent render 
 * child contructor
 * child render
 * child componentDidMount
 * parent componrntDidMount
 * 
 * 
 * parent constructor
 * parent render 
 * child1 contructor
 * child1 render
 * child2 contructor
 * child2 render
 * 
 * render phase completed
 * 
 * child1 componentDidMount
 * child2 componentDidMount
 * parent componrntDidMount
 */