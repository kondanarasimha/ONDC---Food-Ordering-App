import { carouselImgUrl } from "../utiles/urls";

export const CarouselsMenu = (props)=> {
  const {creativeId} = props.data;
  const {price, defaultPrice} = props.data.dish.info;  
  return(
      <div>
        <img src={carouselImgUrl+creativeId}/>
        <div className="btn-price-container">
          <button>ADD</button>
          {price === undefined ? <h5>₹{(defaultPrice/100).toFixed()}</h5> : <h5>₹{(price/100).toFixed()}</h5>}
        </div>
      </div>
  )
}