import { useEffect, useState } from "react"
import { RESTAURANT_DETAILS } from "../component/MockData/MockData"
import axios from "axios"


function useFetchRestaurantDetails (id) {
    const [restaurantDetails, setRestaurantDetails] = useState([])

    async function fetchRestaurantDetail () {
        const url = RESTAURANT_DETAILS.replace(`$resID`, id)
        try{
            let response = await axios.get(url)
            setRestaurantDetails(response.data.data.cards)
        }
        catch(error) {
            console.log("Error from RestaurantDetailCard Component and fetchRestaurantDetail this method:->", error)
        }
    }

    
    useEffect(() => {
        fetchRestaurantDetail()
    }, [])
    
    return restaurantDetails;
}


export default useFetchRestaurantDetails;