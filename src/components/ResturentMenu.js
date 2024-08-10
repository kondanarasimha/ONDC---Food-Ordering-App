import { useState, useEffect } from "react";
import { resturentMenuUrl } from "../utiles/urls";
import { MenuHeader } from "./MenuHeader.js";
import { useParams } from "react-router-dom";
import { MenuHeader } from "./MenuHeader.js";
import { MenuItems } from "./MenuItems.js";
import { useMenuData } from "../utiles/useMenuData.js";

export const ResturentMenu = ()=> {
  const paramId = useParams();
  const restaurantId = paramId.id;

  const menuDetails = useMenuData(restaurantId);
  
    
  if(menuDetails === null) {
    const itemsLen = Array(20).fill(1);
    return(
      <div className="py-28 px-52">
        <div className="bg-gray-100 w-auto h-[120px] rounded-lg mt-9"></div>
        {itemsLen.map(()=> (<div className="mt-24 bg-gray-100 w-auto h-[200px]"></div>))}
      </div>
    )
  }

  return(
    <div key={1} className="py-28 px-52">
      <MenuHeader key={2} props={menuDetails}/>
      <MenuItems key={3} menuItems={menuDetails}/>
    </div>
  )
};