import { useState, useEffect } from 'react';
import { CardDetails } from './CardDetails.js';
import searchIcon from '../../Images/search_24dp_FILL0_wght400_GRAD0_opsz24.png';
import restIcon from '../../Images/reset_settings_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { apiUrl } from '../utiles/urls.js';
import { ShimmerCards, ShimmerFilterStrip } from './ShimmerCards.js';


export const Body = ()=> {
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(()=> {
    fetchData();
  },[]);

  async function fetchData () {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const jsonData = await data.json();
    setRestaurantsData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(restaurantsData.length === 0) {
    const shimmerLen = Array(20).fill(1);
    
    return (
      <div className='body-container'>
        <ShimmerFilterStrip/>
        <div className="card-container">
          {shimmerLen.map((data,index)=> <ShimmerCards key={index}/>)}
        </div>
      </div>
    )
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