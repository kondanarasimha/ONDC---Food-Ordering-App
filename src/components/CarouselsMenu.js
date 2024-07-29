import { carouselImgUrl } from "../utiles/urls";

export const CarouselsMenu = (props)=> {
  const {creativeId} = props.data;
  const {price, defaultPrice} = props.data.dish.info;  
  return(
      <div>
        <img className="relative" src={carouselImgUrl+creativeId}/>
        <div className="flex justify-between w-48 pl-4 pr-1 absolute z-40 -mt-9">
          {price === undefined ? <h5 className="text-white shadow-md text-2xl">₹{(defaultPrice/100).toFixed()}</h5> : <h5 className="text-white shadow-md text-lg">₹{(price/100).toFixed()}</h5>}
          <button className="bg-white w-[65px] h-[25px] rounded-md font-semibold text-green-600 active:opacity-90">ADD</button>
        </div>
      </div>
  )
}