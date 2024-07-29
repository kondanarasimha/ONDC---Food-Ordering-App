import { resturentImgsLink } from '../utiles/urls.js';
import deliveryIcon from '../../Images/directions_bike_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { useStartRating } from '../utiles/useStartRating.js';

export const CardDetails = (props)=> {
  const {name, cloudinaryImageId, avgRating, totalRatingsString,
        costForTwo, cuisines, locality, sla} = props.resDetails.info;

  return(
  <div className='hover:bg-white hover:rounded-md hover:drop-shadow-lg w-52'>
  <div>
    <img className='w-52 p-1 h-40 object-cover rounded-lg' src={resturentImgsLink+cloudinaryImageId}/>
    <div className='ml-1.5'>
      <h3 className='text-xl font-bold overflow-hidden text-nowrap max-w-48 overflow-ellipsis'>{name}</h3>

      <div className='flex gap-1 mt-1'>
      <img className='w-6' src={deliveryIcon}/>
      <p>{sla.deliveryTime} Mins</p>
      </div>

      <div className='flex'>
      {useStartRating(avgRating,'w-18')}
      <p>{avgRating} • {totalRatingsString}
      </p>
      </div>
      <div>
        <h3 className='font-semibold text-xl'>{costForTwo}</h3>
      </div>

      <h6 className='overflow-hidden text-nowrap max-w-40 overflow-ellipsis text-gray-500'>{cuisines.join(', ')}</h6>
      <h4 className='pb-2'>{locality}</h4>

    </div>
  </div>
</div>
)}