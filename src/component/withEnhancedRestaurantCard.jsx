
const withEnhancedRestaurantCard = (RestaurantCard) => {
    return (props) => {
        const {rating} = props;
        let backgroundColorClass = "";
        if(rating > 4.5) {
            backgroundColorClass = "green"
        }
        else if (rating > 4) {
            backgroundColorClass = "yellow"
        }
        else if (rating > 3.5) {
            backgroundColorClass = "orange"
        }
        else {
            backgroundColorClass = "red"
        }
        return (
            <RestaurantCard {...props} backgroundColorClass = {backgroundColorClass}/>
        )
    }

}


export default withEnhancedRestaurantCard;