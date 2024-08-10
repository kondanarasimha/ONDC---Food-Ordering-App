import { itemImgUrl } from "../utiles/urls.js";
import { useStartRating } from '../utiles/useStartRating.js';
import { usePisaToRupee } from "../utiles/usePricePisa.js";
import { CategoryItemList } from "./CategoryItemList.js";
import { itemImgUrl } from "../utiles/urls.js";
import { useDispatch } from "react-redux";
import { addItems } from "../utiles/cartSlice.js";


export const CategoryItemList = (props)=> { 
  const dispatch = useDispatch(); 
  const addBtnHandler = (item)=> {
    dispatch(addItems(item))
  };
  return(
    <div key={7}>
      {props.data.map((itemDetails)=> {
        return(
          <div className="flex justify-between ml-1 mr-1 mb-5 mt-1 pb-8 border-b-[1px] border-gray-300 max-sm:flex-col">
            <div className="ml-1">
              <h4 className="font-semibold mt-1 mb-1 max-sm:text-sm max-sm:font-semibold">{itemDetails.card.info.itemAttribute.vegClassifier}</h4>
              <h3 className="text-xl font-medium mb-1 max-sm:text-xs max-sm:max-w-20">{itemDetails.card.info.name}</h3>
              {itemDetails.card.info.price === undefined ? <h4 className="mb-1 text-lg max-sm:text-sm"> ₹ {usePisaToRupee(itemDetails.card.info.defaultPrice)}</h4> : <h4 className="mb-1 text-lg max-sm:text-sm">₹ {usePisaToRupee(itemDetails.card.info.price)}</h4>}
              {itemDetails.card.info.ratings.aggregatedRating.rating === undefined ? null : 
              (<div className="w-5 flex mb-1 max-sm:text-sm">{useStartRating(itemDetails.card.info.ratings.aggregatedRating.rating)}
              <h5>{itemDetails.card.info.ratings.aggregatedRating.rating}({itemDetails.card.info.ratings.aggregatedRating.ratingCountV2})</h5></div>) }
              <div className="max-w-[650px] max-sm:hidden">
                <h6 className="text-justify max-w-[600px] text-gray-500 text-[14px]">{itemDetails.card.info.description}</h6>
              </div>
            </div>
            <div>
              {itemDetails.card.info.imageId === undefined ? <div className="w-[100px] h-[100px] mr-4"/> : <img className="w-[100px] h-[100px] object-cover rounded-xl relative mr-4 mt-2" src={itemImgUrl+itemDetails.card.info.imageId}></img>}
              <button className="bg-white w-16 text-green-500 drop-shadow-lg rounded-sm absolute z-30 ml-[20px] -mt-2 active:opacity-95 font-semibold max-sm:w-auto max-sm:pl-1 max-sm:pr-1 max-sm:ml-2" onClick={()=> {
                addBtnHandler(itemDetails);
              }}>ADD</button>
            </div>

          </div>
          )
        })}
        
    </div>)  
}