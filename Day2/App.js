import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";


// const styles={
//     border:"1px solid red"
// }


// // inline css in Funtional Component
// const Jsx=()=>(
//     <div style={{
//         backgroundColor:"yellow"
//     }}>
//         <h1>Hello</h1>
//         <h2>Bhai</h2>
//     </div>
// )


const Title=()=>(
    <a href="#">
        <img 
        className="logo"
        alt="logo"
        src="https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/297554916_600342054774196_2046055065676818650_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BYgTlkgJaDkAb4_wNq1&_nc_ht=scontent.fagr1-4.fna&oh=00_AfAybFSg4WqDc7o0vlI43g9kr7UfqOCEcEtX-8Eg89vjkQ&oe=6620C0D7">
        </img>
    </a>
);

const restrauntList=[
    {
    type:"restraunt",
    data:{
    name:"burgerKing",
    image:"https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/274152200_488983839440013_2341323483352800098_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=i9DE5B8B7fIAb7Dmau_&_nc_ht=scontent.fagr1-1.fna&oh=00_AfDG6o4AUu1ZN4av6fJ8Q-YJyM5yUWPZ2UR5WHFmDamIzA&oe=66209643",
    cuisines:["Burger","American"],
    rating:"5",
    id:6554,
},
    },
    {
        type:"restraunt",
    data:{
    name:"KFC",
    image:"https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/274152200_488983839440013_2341323483352800098_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=i9DE5B8B7fIAb7Dmau_&_nc_ht=scontent.fagr1-1.fna&oh=00_AfDG6o4AUu1ZN4av6fJ8Q-YJyM5yUWPZ2UR5WHFmDamIzA&oe=66209643",
    cuisines:["Chicken","American"],
    rating:"4",
    id:654,
},
    }
]

const RestroCard=({name,image,cuisines,rating})=>{
    return(
        <div className="card">
            <img className="foodcard"src={image}alt="burgers"></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}

const Header=()=>(
    <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
const Body=()=>(
        <div className="restro">

        {restrauntList.map((restraunt)=>{
            return <RestroCard{...restraunt.data} key={restraunt.data.id}/>
        })}
            
        {/* <RestroCard name={restrauntList[0].data.name}
        cuisines={restrauntList[0].data.cuisines}/> */}

                        {/* or */}

        {/* <RestroCard{...restrauntList[0].data}/>
        <RestroCard{...restrauntList[1].data}/> */}

        {/* <RestroCard name={restrauntList[1].name}
        cuisines={restrauntList[1].data.cuisines}/> */}
        
        </div>
)
const Footer=()=>(
    <h4>Footer</h4>
)

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