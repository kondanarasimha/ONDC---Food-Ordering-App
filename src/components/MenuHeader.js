import { useState, useEffect } from "react";
import { resturentMenuUrl } from "../utiles/urls";
import { useStartRating } from "../utiles/useStartRating";
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
      <div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
        </div>

        <div className="bg-white  w-2/1 h-auto border border-black pl-1.5 p-3 rounded-lg drop-shadow-md">
          <div className="flex">
            {useStartRating(avgRating)}
            <h4 className="text-1xl font-semibold ml-1">{avgRating} ({totalRatingsString}) • {costForTwoMessage}</h4>
          </div>

          <div className="flex mt-2">
            <img className="w-6" src={locationIcon}/>
            <h5 className="ml-2"><span className="font-semibold">Outlet</span> {city} </h5>
          </div>

          <div className="flex mt-2">
            <img className="w-6" src={deliveryIcon}/>
            <h5 className="ml-2 font-semibold">{sla.slaString}</h5>
          </div>
        </div>

      </div>
  )
}