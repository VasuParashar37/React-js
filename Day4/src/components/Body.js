// no key <<< index key  << unique key
import {restaurantList} from "../config";
import RestroCard from "./RestroCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput,restaurant){
    const filterData= restaurant.filter(restaurant=>restaurant.name?.toLowerCase().includes(searchInput.toLowerCase())
)
    return filterData;
}



const Body=()=>{


    let searchText="KFC";

    // useState is used for creating state variables
    // [] is used for destructuring the variable
    

    // or
    
    /** 
        const searchVar=useState();
        const[searchInput,setSearchInput]=searchVar; 
    */

        // const[clicked,setClicked]=useState("false");
        
        const[allrestaurant,setAllRestaurant]=useState([]);
        // const[restaurant,setRestaurant]=useState([]);
        const[filteredRestaurant,setFilteredRestaurant]=useState([]);
        // console.log("searchInput");
        const[searchInput,setSearchInput]=useState("");
        console.log(useState());


        /**
         * Empty Dependency Array => once after render
         * dep array [searchInput] => once after initial render + everytime after render(my      searchText changes)
         */

        // useEffect(()=>{
        //     console.log("Hello Bhai Kese Ho Aap");
        // },[searchInput])
        // console.log("Hello");
        // useEffect(()=>{
        //     console.log("Hello Bhai Kese Ho Aap");
        // },[restaurant])
        // console.log("Hello");

        useEffect(()=>{
            getRestaurants();
        },[]);
         async function getRestaurants(){
            const data=await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=23ik0iqbb7Z5OYeh9WPW0ONpa4FCMsW62cMY6WpIQu_PNVQb15AO5yeGUrgdnFgyrJRHE8T7K0fih_t5prQgdPIRz1wtGBvZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOofTjnvH12CAvveDZRmfAs5vqiYNfb55uE9zk_S-0wa2GC3xeVJVmXOWund3BvOztudgtNbb3VogcBWvmNnSwQktRy9KJ-t-A&lib=MVEzi28vQZHtbPI2IU2wIfrLH4UjpOLQo");
            const json=await data.json();
            console.log(json);
            setAllRestaurant(json?.data);
            setFilteredRestaurant(json?.data);
        }
        console.log("render");

        // Early Return 
        return allrestaurant.length==0?<Shimmer/>:(
        <>
        <div className="search-container">
        <input 
            className="search-input" 
            type="text" 
            placeholder="Search"
            value={searchInput}
            // onChange={(e)=>console.log(e.target.value)}
            // onChange={(e)=>{
            //     setSearchInput(e.target.value);
            // }}
            onChange={(e)=>{
                setSearchInput(e.target.value);
            }}
            />
            {/* <h1>{clicked}</h1> */}
            <button 
                className="search-btn"
                // onClick={()=>{
                //     if(clicked=="false")
                //         setClicked("true");
                //     else
                //         setClicked("false");
                // }}

                onClick={(e)=>{
                    const data=filterData(searchInput,allrestaurant);
                    setFilteredRestaurant(data);
                }}
            >Search</button>
        </div>
        <div className="restaurantList">
            {filteredRestaurant.map((restaurant) =>{
                    return (
                        <RestroCard{...restaurant}/>
                    );
                })}
        </div>
        </>
    )
}
export  default Body;
