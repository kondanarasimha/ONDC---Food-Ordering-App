import { itemImgUrl } from "../utiles/urls.js";
import { useStartRating } from '../utiles/useStartRating.js';
import { usePisaToRupee } from "../utiles/usePricePisa.js";
import { itemImgUrl } from "../utiles/urls.js";
import { useDispatch } from "react-redux";
import { removeItems } from "../utiles/cartSlice.js";

export const CartItem = (props)=> {
  const dispatch = useDispatch();
  const removeBtnHandler = (itemIndex)=> {
    dispatch(removeItems(itemIndex))
  }
  return(
    <div>
      {props.data.map((itemDetails, index)=> {
        return(
          <div className="flex justify-between ml-1 mr-1 mb-5 mt-1 pb-8 border-b-[1px] border-gray-300 max-sm:flex-col">
            <div className="ml-1">
              <h4 className="font-semibold mt-1 mb-1 max-sm:text-xs">{itemDetails.card.info.itemAttribute.vegClassifier}</h4>
              <h3 className="text-xl font-medium max-w-[650px] mb-1 max-sm:text-sm">{itemDetails.card.info.name}</h3>
              {itemDetails.card.info.price === undefined ? <h4 className="mb-1 text-lg max-sm:text-nowrap"> ₹ {usePisaToRupee(itemDetails.card.info.defaultPrice)}</h4> : <h4 className="mb-1 text-lg max-sm:text-nowrap max-sm:text-sm">₹ {usePisaToRupee(itemDetails.card.info.price)}</h4>}
              {itemDetails.card.info.ratings.aggregatedRating.rating === undefined ? null : 
              (<div className="w-5 flex mb-1 max-sm:text-sm">{useStartRating(itemDetails.card.info.ratings.aggregatedRating.rating)}
              <h5>{itemDetails.card.info.ratings.aggregatedRating.rating}({itemDetails.card.info.ratings.aggregatedRating.ratingCountV2})</h5></div>) }
              <div className="max-w-[650px]">
                <h6 className="text-justify max-w-[600px] text-gray-500 text-[14px]">{itemDetails.card.info.description}</h6>
              </div>
            </div>
            <div>
              {itemDetails.card.info.imageId === undefined ? <div className="w-[100px] h-[100px] mr-4"/> : <img className="w-[100px] h-[100px] object-cover rounded-xl relative mr-4 mt-2" src={itemImgUrl+itemDetails.card.info.imageId}></img>}
              <button className="bg-white w-20 text-red-600 drop-shadow-lg rounded-sm absolute z-30 ml-[10px] -mt-2 active:opacity-95 font-semibold max-sm:w-auto max-sm:text-sm max-sm:p-0.5" onClick={()=> {
                removeBtnHandler(index);
              }}>REMOVE</button>
            </div>

          </div>
          )
        })}
    </div>
  )
  
}