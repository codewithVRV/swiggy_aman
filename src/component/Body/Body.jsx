import { useContext, useEffect, } from "react";
import RestaurantCard from "../RestoCard/RestaurantCard";
import "./Body.css";
import { Restaurant_URL } from "../../utils/ConstantData";
import axios from "axios";
import Shimmer from "../ShimmerUI/Shimmer";
import ResCardProvider from "../Provider/ResCardProvider";
import FilterCardProvider from "../Provider/FilterCardProvider";
import withEnhancedRestaurantCard from "../withEnhancedRestaurantCard";
import { ImPure, Pure } from "../PureImpureComponent";

const Body = () => {
  const {allList, setAllList} = useContext(ResCardProvider)
  const {filterList, setFilterList} = useContext(FilterCardProvider)

  const EnhancedRestaurantCard = withEnhancedRestaurantCard(RestaurantCard);
  function sortRating() {
    let newData = allList.filter((item) => item.info.avgRating > 4.2);
    setFilterList(newData);
  }



  async function fetchAllRestaurants () {
    try{
       const response = await axios.get(Restaurant_URL)
       let list = response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       setAllList(list)
       setFilterList(list)
       
    }
    catch(err){
      console.log("Error caught by fetchAllRestaurants from body component:->", fetchAllRestaurants)
    }
  }




  useEffect(() => {
    fetchAllRestaurants()

  }, [])

  if(allList.length === 0) {
    return (
        <Shimmer />
    )
  }

 
  return ( 
    <> 
      <button onClick={sortRating} className="btn">Above 4.2 rating</button>
      {/* <Pure num={1}/> */}
      {/* <ImPure num={1}/> */}


      <div className="card-container">
        {
          filterList.map((item) =>           <EnhancedRestaurantCard 
                                                key={item.info.id}
                                                restaurantId={item.info.id}
                                                name={item.info.name}
                                                rating={item.info.avgRating}
                                                price={item.info.costForTwo}
                                                cardImage={item.info.cloudinaryImageId}
                                            />

              )
        }
      </div>
    </>
  );
};

export default Body;
