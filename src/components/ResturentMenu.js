import { useState, useEffect } from "react";
import { resturentMenuUrl } from "../utiles/urls";
import { MenuHeader } from "./MenuHeader.js";
import { useParams } from "react-router-dom";
import { TopPicksCards } from "./TopPicksCards.js";
import { MenuHeader } from "./MenuHeader.js";
import { MenuItems } from "./MenuItems.js";
import { useMenuData } from "../utiles/useMenuData.js";

export const ResturentMenu = ()=> {
  const paramId = useParams();
  const restaurantId = paramId.id;

  const menuDetails = useMenuData(restaurantId);
    
  if(menuDetails === null) {
    return
  }

  return(
    <div key={1} className="py-28 px-52">
      <MenuHeader key={2} props={menuDetails}/>
      <TopPicksCards key={3} props={menuDetails}/>
      <MenuItems key={4} menuItems={menuDetails}/>
    </div>
  )
};