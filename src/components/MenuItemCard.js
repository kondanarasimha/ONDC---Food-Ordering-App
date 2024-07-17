import { itemImgUrl } from "../utiles/urls.js";
import { topRatingIcon } from "../../Images/star_half_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png";
import { lowRatingIcon } from "../../Images/star_half_24dp_FILL0_wght400_GRAD0_opsz24.png";

export const MenuItemCard = (props)=> {
  const {name, itemAttribute, price, ratings, description, imageId, defaultPrice} = props.cardInfo;  

  return(        
    <div className="dish-container">

      <div className="dish-details-container">
        <h4>{itemAttribute.vegClassifier}</h4>
        <h3>{name}</h3>
        {price === undefined ? <h4>₹ {((defaultPrice)/100).toFixed()}</h4> : <h4>₹ {((price)/100).toFixed()}</h4>}
        {ratings.aggregatedRating.rating === undefined ? null : 
        (<h5>{ratings.aggregatedRating.rating}({ratings.aggregatedRating.ratingCountV2})</h5>)}
        <div className="item-description-container">
          <h6>{description}</h6>
        </div>
      </div>

      <div className="dish-img-container">
        {imageId === undefined ? <div className="emptyImg-container"/> : <img src={itemImgUrl+imageId}></img>}
        <button className="itemAdd-btn">ADD</button>
      </div>

    </div>
    )
}