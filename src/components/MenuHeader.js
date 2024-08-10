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
      <div className="max-sm:mt-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 max-sm:text-lg max-sm:text-nowrap">{name}</h1>
        </div>

        <div className="bg-white  w-2/1 h-auto border border-black pl-1.5 p-3 rounded-lg drop-shadow-md max-sm:border-none max-sm:drop-shadow-none">
          <div className="flex">
            {useStartRating(avgRating)}
            <h4 className="text-1xl font-semibold ml-1 max-sm:text-nowrap max-sm:text-sm">{avgRating} ({totalRatingsString}) • {costForTwoMessage}</h4>
          </div>

          <div className="flex mt-2">
            <img className="w-6 max-sm:h-6" src={locationIcon}/>
            <h5 className="ml-2 max-sm:text-sm"><span className="font-semibold max-sm:text-sm">Outlet</span> {city} </h5>
          </div>

          <div className="flex mt-2">
            <img className="w-6 max-sm:h-6" src={deliveryIcon}/>
            <h5 className="ml-2 font-semibold max-sm:text-nowrap max-sm:text-sm">{sla.slaString}</h5>
          </div>
        </div>

      </div>
  )
}