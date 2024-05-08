const RestroCard = ({ name, image, cuisines, area, rating }) => {
    return (
            <div className="card">
            <h2>{name}</h2>
            <img className="image" src={image} alt="Food" />
            <h3>{cuisines}</h3>
            <p>{area}</p>
            <p>{rating}</p>
        </div>
    );
}

export default RestroCard;
