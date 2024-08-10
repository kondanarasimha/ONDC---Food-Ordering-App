import { useState } from "react";
import { CategoryItemList } from "./CategoryItemList";


export const ItemCategory = (props, isItemsShowing)=> {
  const [MenuitemCards, setItemCards] = useState();
  const { title, itemCards } = props.data;
  const { isItemsDisplay } = props;

  function btnHandler() {
    props.setShowingIndex();
  }

  return(
      <div className="mb-2">
        <h1 onClick={()=> {btnHandler()}} className="text-xl font-semibold mb-1 border-b-[1px] border-gray-500 pb-1 cursor-pointer max-sm:text-nowrap max-sm:text-lg max-sm:border-none">{title} ({itemCards.length})</h1>
        {isItemsDisplay && <CategoryItemList data={props.data.itemCards}/>}
      </div>
  )
}
