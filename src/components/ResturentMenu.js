import { useState, useEffect } from "react";
import { resturentMenuUrl } from "../utiles/urls";
import ratingIcon from '../../Images/star_half_24dp_FILL0_wght400_GRAD0_opsz24.png';
import locationIcon from '../../Images/pin_drop_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
import deliveryIcon from '../../Images/directions_bike_24dp_FILL0_wght400_GRAD0_opsz24.png';

export const ResturentMenu = ()=> {
  const [menuDetails, setMenuDetails] = useState();

  useEffect(()=> {menuItemsData()},[]);

  async function menuItemsData() {
    const data = await fetch(resturentMenuUrl);
    const jsonData = await data.json();
    setMenuDetails(jsonData);
  };

  console.log(menuDetails);

  return(
    <div className="menu-body">
      <div className="resturent-header-container">

        <div className="resturent-name">
          <h2>Citi Cafe</h2>
        </div>

        <div className="res-details-container">
          <div className="res-rating-price">
            <img className="menu-ratingIcon" src={ratingIcon}/>
            <h3>Rating | Rupees 150</h3>
          </div>

          <div className="res-location-container">
            <img className="location-icon" src={locationIcon}/>
            <h3>Outlet <span className="city">Ongole</span></h3>
          </div>
          
          <div className="del-container">
            <img className="delivery-icon" src={deliveryIcon}/>
            <h3>30-40</h3>
          </div>
        </div>

      </div>
    </div>
  )
};