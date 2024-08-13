import { useParams } from "react-router-dom";
import "./RestaurantDetailCard.css";
import useFetchRestaurantDetails from "../../Hooks/useFetchRestaurantDetails";
import RestaurantWholeMenu from "../RestaurantWholeMenu/RestaurantWholeMenu";
import { useContext } from "react";
import ResCardProvider from "../Provider/ResCardProvider";

const RestaurantDetailCard = () => {

  const {allList} = useContext(ResCardProvider)
  // console.log("allList is", allList[0].info.areaName)
  const { id } = useParams();
  const restaurantDetails = useFetchRestaurantDetails(id);
  const restaurantName = restaurantDetails?.[0]?.card?.card?.text || "";
  const restDetails = restaurantDetails?.[2]?.card?.card?.info || {};
  let allitemsArray = restaurantDetails?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemOffer = restaurantDetails?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

  let enchancedRestaurantWholeMenu = allitemsArray.filter((wholeMenu) => {
    return wholeMenu.card.card["@type"].includes("ItemCategory");
  });


 const nameIs = allList
 console.log("name is", allList)

  return (
    <>
      <h1 className="common-heading">{restaurantName} </h1>
      <div className="item-wrapper">
        <p>
          {restDetails.avgRating} {`(${restDetails.totalRatingsString})`} {restDetails.costForTwoMessage}
        </p>
        <p>{restDetails.cuisines?.[0]}</p>
        <p>Outlet: {restDetails.city}</p>
        <p>{restDetails.aggregatedDiscountInfoV2?.descriptionList?.[0]?.meta}</p>
      </div>
      <h1 className="common-heading">Deals For You</h1>
      <div className="item-discount">
        {itemOffer.map((item, index) => (
          <div className="single-item-discount" key={index}>
            <h3>{item.info.header}</h3>
            <p>
              {item.info.couponCode ? item.info.couponCode : "NO COUPON CODE"}
            </p>
          </div>
        ))}
      </div>
      <div>
      {enchancedRestaurantWholeMenu?.map(function (wholeMenu) {
          return <RestaurantWholeMenu key={wholeMenu.card.card.title} wholeMenu={wholeMenu} />;
        })}
      </div>
    </>
  );
};

export default RestaurantDetailCard;
