// no key <<< index key  << unique key
import {restaurantList} from "../config";
import RestroCard from "./RestroCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
// import {Shimmer} from 'react-shimmer';

import { Link } from "react-router-dom";

function filterData(searchInput,restaurant){
    const filterData= restaurant.filter(restaurant=>restaurant.name?.toLowerCase().includes(searchInput.toLowerCase())
)
    // if(!filterData){
    //     return <h1>No results fouond...</h1>
    // }
    // return filterData;
}
const Body=()=>{
        const[allrestaurant,setAllRestaurant]=useState([]);
        const[filteredRestaurant,setFilteredRestaurant]=useState([]);
        const[searchInput,setSearchInput]=useState("");
        // console.log(useState());
        useEffect(()=>{
            getRestaurants();
        },[]);
         async function getRestaurants(){
            const data=await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=wZyINzmQCcqo_qNVVWH8-i-ngJ1DdGrOuN1icTBGWCIIzjhBsRzmmgiJBv01FF7RGpPK7I1NgAheoikVfp64s8e_pQtOUeKtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN3PYDuvYzY4ED8stEDi_1F43TBvh0UtvJdJea1Z4JQnlPUUBjZskUh5qTX_ewmuDDu3kcKYYqBX_dalcRwtMnpuwMB68ut2k9z9Jw9Md8uu&lib=MQN5fNiqQvj_pdcrUYhg37HX3KK0a2owx");
            const json=await data.json();
            // console.log(json);
            setAllRestaurant(json?.data);
            setFilteredRestaurant(json?.data);
        }
        // console.log("render");
        // if(filteredRestaurant.length===0)
        //     return <h1>No restaurants matched</h1> 
        return allrestaurant.length==0?<Shimmer/>:(
        <>
        <div className="search-container">
            <div className="input-container">
        <input 
            className="search-input" 
            type="text" 
            placeholder="Search for Restaurants"
            value={searchInput}

            onChange={(e)=>{
                setSearchInput(e.target.value);
            }}
                /></div>
            <div className="button-container"><button 
                className="search-btn"
                onClick={(e)=>{
                    const data=filterData(searchInput,allrestaurant);
                    setFilteredRestaurant(data);
                }}
            >Search</button>
                </div>
        </div>
        <div className="restaurantList">
            {filteredRestaurant.map((restaurant) =>{
                    return (
                        <Link  to={"/restaurant/"+restaurant.id} key={restaurant.id}><RestroCard{...restaurant}/></Link>
                    );
                })}
        </div>
        </>
    )
}
export  default Body;
