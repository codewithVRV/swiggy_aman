import { SWIGGY_RESTAURANT_DETAIL_ITEM_URL } from "../../utils/ConstantData";
import "./ItemCategory.css"


const ItemCategory = ({ cardItem }) => {
  const { card } = cardItem;
  return (
    <div className="item-category">
      <div className="item-category-left">
        <div className="item-name">{card.info.name}</div>
        <div className="item-price">
          Rs{" "}
          {card.info.price
            ? card.info.price / 100
            : card.info.defaultPrice / 100}
          /-
        </div>
        <div className="item-description">{card.info.description}</div>
      </div>
      <div className="item-category-right">
        <img src={`${SWIGGY_RESTAURANT_DETAIL_ITEM_URL}${card.info.imageId}`} />
      </div>
    </div>
  );
};

export default ItemCategory;
