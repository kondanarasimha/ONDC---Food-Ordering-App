import { restaurantsData } from '../../back-end/data.js';
import { CardDetails } from './CardDetails.js';



export const RestaurantCard = ()=> {
  return(
  <div className='card-container'>

    {restaurantsData.map((restaurantDetails)=> 
      (
        <CardDetails key={restaurantDetails.info.id} resDetails={restaurantDetails}/>
      ))}
  
  </div>
)}
