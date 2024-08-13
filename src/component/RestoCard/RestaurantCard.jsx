
import { Link } from "react-router-dom";
import { IMG_URL } from "../MockData/MockData";
import "./RestCard.css"

const RestaurantCard = (props) => {
    const {name, rating, price, cardImage, restaurantId, backgroundColorClass} = props;
    return (
        <Link to={`/resDetail/${restaurantId}`}>
            <div id="item-img">
                <div id="div-img">
                    <img src={`${IMG_URL}/${cardImage}`} alt="Image not Found"/>
                </div>
                <div id="name-rating">
                    <p>{name}</p>
                    <p className={`${backgroundColorClass}`}>{rating}</p>
                </div>
                <div id="cate-price">
                    <p>{price}</p>
                </div>

            </div>
        </Link>
    )
}

export default RestaurantCard;