import { useState, useEffect } from 'react';
import { CardDetails } from './CardDetails.js';
import searchIcon from '../../Images/search_24dp_FILL0_wght400_GRAD0_opsz24.png';
import restIcon from '../../Images/reset_settings_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { apiUrl } from '../utiles/urls.js';

export const Body = ()=> {
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(()=> {
    fetchData();
  },[]);

  async function fetchData () {
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    setRestaurantsData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return(
    <div className="body-container">

      <div className="filterStrip-container">
        <div className="search-container">
          <input placeholder="Chicken Biryani"/>
          <button>
            <img src={searchIcon}/>
          </button>
        </div>
        <div className="filter-btn-container">
          <button onClick={()=> {
            fetchData();
          }}><img className='reset-icon' src={restIcon}></img></button>

          <button onClick={()=>{
            const topRatedRestaurants = restaurantsData.filter(restaurantData=> restaurantData.info.avgRating > 4);
            setRestaurantsData(topRatedRestaurants);
          }}>Top Rating</button>

          <button onClick={()=> {
            const fastDelivery = restaurantsData.filter(restaurantData=> restaurantData.info.sla.deliveryTime <= 35);
            setRestaurantsData(fastDelivery);
          }}>Fast Delivery</button>

          <button onClick={()=> {
            const lowPrice = restaurantsData.filter((restaurantData)=> (restaurantData.info.costForTwo <= `₹${300} for two`));
            setRestaurantsData(lowPrice);
          }}>Rs 150-300</button>
        </div>
      </div>

      <div className='card-container'>{restaurantsData.map((restaurantDetails)=> (
          <CardDetails key={restaurantDetails.info.id} resDetails={restaurantDetails}/>))}
      </div>

    </div>
  )
}