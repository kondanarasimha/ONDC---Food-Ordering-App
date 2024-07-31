import { useState } from "react";
import { ItemCategory } from "./ItemCategory.js";

export const MenuItems = (props)=> {
  const menuData = props?.menuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const itemsCategoryData = menuData.filter((menuCard)=> {return(menuCard?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')});
  const [showingIndex, setShowingIndex] = useState(0);
  
  return(
    <div className="mt-4">
      <h4 className="text-xl text-gray-600 text-center mb-5">- Menu -</h4>

      {itemsCategoryData.map((itemCategory,i)=> {
        return(<ItemCategory key={i} data={itemCategory?.card?.card} 
          isItemsDisplay = {i === showingIndex ? true : false} setShowingIndex={()=> {setShowingIndex(i)}}/>)
      })};

    </div>
  )
}