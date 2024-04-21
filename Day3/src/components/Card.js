const Cards=(props)=>{
    const {image,name,cuisines,rating}=props;
    return(
        <div className="card">
            <img className="image" src={image}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}
export default Cards;