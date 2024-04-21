export const Title=()=>{
    return(
        <a>
            <img
            className="logo"
            alt="logo"
            src="https://cdn-images-1.medium.com/max/45/1*v5SYqjYEdQMPIwNduRrnCw@2x.png"
            />
        </a>
    )
}

const Header=()=>{
    return(
        <div className="container">
            <Title/>
            <div className="nav-items">
                <div className="button-container">
                    <button className="b">Home</button>
                    <button className="b">About</button>
                    <button className="b">Contact</button>
                    <button className="b">Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Header;