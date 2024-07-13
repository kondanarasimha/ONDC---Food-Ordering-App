import { useState, useEffect } from "react";
import { resturentMenuUrl } from "../utiles/urls";
import highRatingIcon from '../../Images/star_half_24dp_FILL0_wght400_GRAD0_opsz24.png';
import lowRatingIcon from '../../Images/star_half_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png';
import locationIcon from '../../Images/pin_drop_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
import deliveryIcon from '../../Images/directions_bike_24dp_FILL0_wght400_GRAD0_opsz24.png';

export const MenuHeader = (props)=> {
  const {name, 
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    city,
    sla
    } = props?.props?.data?.cards[2]?.card?.card?.info;
  return (
      <div className="resturent-header-container">

        <div className="resturent-name">
          <h1>{name}</h1>
        </div>

        <div className="res-details-container">
          <div className="res-rating-price">
            {avgRating >= 4 ? <img className="menu-ratingIcon" src={highRatingIcon}/> :
            <img className="menu-ratingIcon" src={lowRatingIcon}/>}
            <h4>{avgRating} ({totalRatingsString}) • {costForTwoMessage}</h4>
          </div>

          <div className="res-location-container">
            <img className="location-icon" src={locationIcon}/>
            <h5><span className="outlet">Outlet</span> {city} </h5>
          </div>

          <div className="del-container">
            <img className="delivery-icon" src={deliveryIcon}/>
            <h5>{sla.slaString}</h5>
          </div>
        </div>

      </div>
  )
}