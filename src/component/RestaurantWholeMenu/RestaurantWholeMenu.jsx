import ItemCategory from "../ItemCategory/ItemCategory";
import "./RestaurantWholeMenu.css"

import { useState } from "react";

const RestaurantWholeMenu = ({ wholeMenu }) => {
  const [showItems, setShowItems] = useState(false);
  const { card } = wholeMenu;

  function toggleAccordionHandler() {
    // setShowItems((prevShowItems) => {
    //   return !prevShowItems;
    // });
    setShowItems(!showItems)
  }
  return (
    <div className="restaurant-menu-container">
      <div
        className="restaurant-menu-accordion-header"
        onClick={() => {
          toggleAccordionHandler();
        }}
      >
        <h3 className="accordion-title">{card.card.title} ({card?.card?.itemCards?.length})</h3>
        <h3 className="accordion-title">{!showItems ? "Open" : "Close"}</h3>
      </div>
      {showItems && (
        <div className="restaurant-menu-accordion-body">
          {card.card.itemCards?.map((cardItem) => {
            return (
              <ItemCategory key={cardItem.card.info.name} cardItem={cardItem} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantWholeMenu;
