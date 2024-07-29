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
    <div className="mt-4">

      <div onClick={()=> {btnHandler()}} className="border-b-[1px] border-gray-400 mb-2 cursor-pointer">
        <h3 className="text-xl pb-1.5 font-semibold">{title}({itemCards.length})</h3>
      </div>

      {isOpen ? <div>
        {itemCards.map((itemCard)=> {
          return(<MenuItemCard key={itemCard.card.info.id} cardInfo={itemCard.card.info}/>)
        })} </div> : ''}
        
        <div key={5} className="border-b-[1px] border-gray-400">
        <h3 className="text-xl font-semibold pb-1.5">Regular Menu</h3>
        </div>

    </div>
  )
}