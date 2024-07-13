import { useState, useEffect } from "react";
import { resturentMenuUrl } from "../utiles/urls";
import { MenuHeader } from "./MenuHeader.js";
import { useParams } from "react-router-dom";
import { TopPicksCards } from "./TopPicksCards.js";


export const ResturentMenu = ()=> {
  const paramId = useParams();
  const restaurantId = paramId.id;

  const [menuDetails, setMenuDetails] = useState(null);

  useEffect(()=> {menuItemsData()},[]);

  async function menuItemsData() {
    const data = await fetch(resturentMenuUrl+restaurantId);
    const jsonData = await data.json();
    setMenuDetails(jsonData);
  };

  if(menuDetails === null) {
    return
  }

  return(
    <div className="menu-body">
      <MenuHeader props={menuDetails}/>
      <TopPicksCards props={menuDetails}/>
      
    </div>
  )
};