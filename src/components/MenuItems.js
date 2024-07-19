import { useState } from "react";
import { MenuItemCard } from "./MenuItemCard.js";

export const MenuItems = (props)=> {
  const [isOpen, setIsOpen]  = useState(true);
  const menuData = props?.menuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const recommendData = menuData[2].card.card;
  const {title, itemCards} = recommendData;
  
  function btnHandler() {
    setIsOpen(!isOpen);
  }

  if(itemCards === undefined) {
    return;
  }

  return(
    <div className="menuItems-container">

      <div onClick={()=> {btnHandler()}} className="dropDown-heading-container">
        <h3>{title}({itemCards.length})</h3>
      </div>

      {isOpen ? <div className="dropDown-list">
        {itemCards.map((itemCard)=> {
          return(<MenuItemCard key={itemCard.card.info.id} cardInfo={itemCard.card.info}/>)
        })} </div> : ''}
        
        <div key={5} className="regular-items-container">
        <h3 className="regular-items">Regular Menu</h3>
        </div>

    </div>
  )
}