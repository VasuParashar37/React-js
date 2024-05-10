import { Component, useEffect, useState } from "react";

const Profile=(props)=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(0);

useEffect(()=>{
    const timer=setInterval(()=>{
        console.log("This is Functional Component");
    },1000);
    console.log("render");
    return()=>{
        clearInterval(timer);
        console.log("useEffect Render");
    }
},[])

    return (
        <>
            <h1>Hello</h1>  
            <h2>Name : {props.name}</h2>
            <h3>Count:{count}</h3>
            <button onClick={(e)=>{
                setCount(1)
            }}>Func</button>
        </>
    )
}
export default Profile;