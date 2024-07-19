import { useState, useEffect } from "react";
import { resturentMenuUrl } from "../utiles/urls";
import { MenuHeader } from "./MenuHeader.js";
import { useParams } from "react-router-dom";
import { TopPicksCards } from "./TopPicksCards.js";
import { MenuHeader } from "./MenuHeader.js";
import { MenuItems } from "./MenuItems.js";
import { MenuItemCard } from "./MenuItemCard.js";


export const ResturentMenu = ()=> {
  const paramId = useParams();
  const restaurantId = paramId.id;

  const [menuDetails, setMenuDetails] = useState(null);
  const itemsData = menuDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card.itemCards;
    
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
    <div key={0} className="menu-body">
      <MenuHeader key={1} props={menuDetails}/>
      <TopPicksCards key={2} props={menuDetails}/>
      <MenuItems key={3} menuItems={menuDetails}/>
      {itemsData && itemsData.map((itemCard)=> {
        return(
          <div className="regular-card-container">
            <MenuItemCard key={itemCard.card.info.id} cardInfo={itemCard.card.info}/>
          </div>
        )
      })}
    </div>
  )
};