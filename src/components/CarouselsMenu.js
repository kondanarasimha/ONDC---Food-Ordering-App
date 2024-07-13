import { carouselImgUrl } from "../utiles/urls";

export const CarouselsMenu = (props)=> {
  const {creativeId} = props.props;
  const {price} = props.props.dish.info;
  return(
      <div>
        <img src={carouselImgUrl+creativeId}/>
        <div className="btn-price-container">
          <button>ADD</button>
          <h5>₹{(price/100).toFixed(0)}</h5>
        </div>
      </div>
  )
}