import { resturentImgsLink } from '../utiles/urls.js';
import deliveryIcon from '../../Images/directions_bike_24dp_FILL0_wght400_GRAD0_opsz24.png';
import ratingIcon from '../../Images/star_half_24dp_FILL0_wght400_GRAD0_opsz24.png';


export const CardDetails = (props)=> {
  const {name, cloudinaryImageId, avgRating, totalRatingsString,
        costForTwo, cuisines, locality, sla} = props.resDetails.info;

  return(
  <div className='resturent-card-container'>
  <div className='resturent-img-container'>
    <img src={resturentImgsLink+cloudinaryImageId}/>
    <div className='resturent-details-container'>
      <h3>{name}</h3>

      <div className='resturent-delivery-container'>
      <img src={deliveryIcon}/>
      <p>{sla.deliveryTime} Mins</p>
      </div>

      <div className='resturent-rating-container'>
      <img src={ratingIcon}/>
      <p>{avgRating} • {totalRatingsString}</p>
      </div>

      <div className='priceCents'>
        <h3>{costForTwo}</h3>
      </div>

      <h6>{cuisines.join(', ')}</h6>
      <h4>{locality}</h4>

    </div>
  </div>
</div>
)}