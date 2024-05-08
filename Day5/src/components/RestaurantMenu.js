import React, { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";
import {restaurantList} from "../config";


export const RestaurantMenu=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM2=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[1].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[1].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[1].area}</h3></div>
        </div>
    )
}
export const RM3=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[2].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[2].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[2].area}</h3></div>
        </div>
    )
}
export const RM4=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[3].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[3].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[3].area}</h3></div>
        </div>
    )
}
export const RM5=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[4].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[4].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[4].area}</h3></div>
        </div>
    )
}
export const RM6=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[5].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[5].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[5].area}</h3></div>
        </div>
    )
}
export const RM7=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[6].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[6].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[6].area}</h3></div>
        </div>
    )
}
export const RM8=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[7].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[7].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[7].area}</h3></div>
        </div>
    )
}
export const RM9=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[8].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[8].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[8].area}</h3></div>
        </div>
    )
}
export const RM10=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[9].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[9].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[9].area}</h3></div>
        </div>
    )
}
export const RM11=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[10].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[10].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[10].area}</h3></div>
        </div>
    )
}
export const RM12=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[11].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[11].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[11].area}</h3></div>
        </div>
    )
}
export const RM13=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[12].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[12].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[12].area}</h3></div>
        </div>
    )
}
export const RM14=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[13].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[13].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[13].area}</h3></div>
        </div>
    )
}
export const RM15=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[14].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[14].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[14].area}</h3></div>
        </div>
    )
}
export const RM16=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[15].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[15].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[15].area}</h3></div>
        </div>
    )
}
export const RM17=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM18=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM19=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM20=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM21=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM22=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM23=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM24=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM25=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM26=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM27=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}
export const RM28=()=>{
    const [restaurant,setRestaurant]=useState(restaurantList);

    // const handleCardClick = (restaurantName) => {
    //     setSelectedRestaurant(restaurantName);
    //   };
    return(
        <div className="first">
            <div className="name-container"><h1>Name : {restaurant[0].name}</h1></div>
            {/* <img className="img" src={restaurant[0].image} alt="Restaurant"/> */}
            <div className="menu-container"><h2>{restaurant[0].menu}</h2></div>
            <div className="area-container"><h3>{restaurant[0].area}</h3></div>
        </div>
    )
}

// const RestaurantMenu=()=>{
//     const {resId}=useParams();
//     // const {id}=params;
//     // console.log({id});

//     useEffect(()=>{
//         getRestaurantsInfo();
//     },[]);
//     async function getRestaurantsInfo(){
//         const data=await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=wZyINzmQCcqo_qNVVWH8-i-ngJ1DdGrOuN1icTBGWCIIzjhBsRzmmgiJBv01FF7RGpPK7I1NgAheoikVfp64s8e_pQtOUeKtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN3PYDuvYzY4ED8stEDi_1F43TBvh0UtvJdJea1Z4JQnlPUUBjZskUh5qTX_ewmuDDu3kcKYYqBX_dalcRwtMnpuwMB68ut2k9z9Jw9Md8uu&lib=MQN5fNiqQvj_pdcrUYhg37HX3KK0a2owx");
//         const json=await data.json();
//         setRestaurant(json.data);
//     }

//     const[restaurant,setRestaurant]=useState(null);

//     return (
//         <div>
//             <div>
//                 <h1>Restaurant id:{resId}</h1>
//                 <h2>{restaurant.name}</h2>
//                 <img className="image" src={image} alt="Food" />
//                 <h3>{area}</h3>
//                 <h3>{city}</h3>
//                 <h3>{rating}</h3>
//                 <h3>{lastMileTravelString}</h3>
//             </div>
//             <div>
//                 {/* <h3>{restaurant.menu}</h3> */}
//             </div>
//         </div>
//     )
// }
// export default RestaurantMenu;