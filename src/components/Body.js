import { useState, useEffect } from 'react';
import { CardDetails } from './CardDetails.js';
import searchIcon from '../../Images/search_24dp_FILL0_wght400_GRAD0_opsz24.png';
import restIcon from '../../Images/reset_settings_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { apiUrl } from '../utiles/urls.js';
import { ShimmerCards, ShimmerFilterStrip } from './ShimmerCards.js';


export const Body = ()=> {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [ratingBtnSty, setRatingBtnSty] = useState(null);
  const [fstDelBtnSty, setFstDelBtnSty] = useState(null);
  const [lowRsBtnSty, setLowRsBtnSty] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const btnStyle = {backgroundColor : 'rgb(50, 50, 56)', color : 'white'};
  useEffect(()=> {fetchData()},[]);

  async function fetchData () {
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    setRestaurantsData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
          <input onChange={(keys)=> {
            setSearchText(keys.target.value);
          }} placeholder="Chicken Biryani"/>
          <button onClick={(event)=> {
            const searchedRestaurents = restaurantsData.filter(restaurantDetails=> (((restaurantDetails.info.name).toLowerCase()).includes((searchText).toLowerCase())));
            searchedRestaurents.length === 0 ? alert('No Such Restaurents Found') : (setRestaurantsData(searchedRestaurents));
          }}><img src={searchIcon}/></button>
        </div>
        <div className="filter-btn-container">
          <button onClick={()=> {
            setRatingBtnSty(null);
            setFstDelBtnSty(null);
            setLowRsBtnSty(null);
            fetchData();
          }}><img className='reset-icon' src={restIcon}></img></button>

          <button style={ratingBtnSty} onClick={()=>{
            const topRatedRestaurants = restaurantsData.filter(restaurantData=> restaurantData.info.avgRating > 4);
            ratingBtnSty === null ? (setRatingBtnSty(btnStyle),setRestaurantsData(topRatedRestaurants)): (setRatingBtnSty(null),fetchData());
          }}>Top Rating</button>

          <button style={fstDelBtnSty} onClick={()=> {
            const fastDelivery = restaurantsData.filter(restaurantData=> restaurantData.info.sla.deliveryTime <= 45);
            fstDelBtnSty === null ? (setFstDelBtnSty(btnStyle),setRestaurantsData(fastDelivery)) :  (setFstDelBtnSty(null),fetchData());
          }}>Fast Delivery</button>

          <button style={lowRsBtnSty} onClick={()=> {
            const lowPrice = restaurantsData.filter((restaurantData)=> (restaurantData.info.costForTwo <= `₹${300} for two`));
            lowRsBtnSty === null ? (setLowRsBtnSty(btnStyle),setRestaurantsData(lowPrice)) : (setLowRsBtnSty(null),fetchData());
          }}>Rs &lt; 300</button>
        </div>
      </div>

      <div className='card-container'>{restaurantsData.map((restaurantDetails)=> (
          <CardDetails key={restaurantDetails.info.id} resDetails={restaurantDetails}/>))}
      </div>

    </div>
  )
}