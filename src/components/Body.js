import { useState, useEffect } from 'react';
import { CardDetails } from './CardDetails.js';
import searchIcon from '../../Images/search_24dp_FILL0_wght400_GRAD0_opsz24.png';
import restIcon from '../../Images/reset_settings_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { apiUrl } from '../utiles/urls.js';
import { ShimmerCards, ShimmerFilterStrip } from './ShimmerCards.js';
import { Link } from 'react-router-dom';


export const Body = ()=> {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [ratingBtnSty, setRatingBtnSty] = useState(null);
  const [fstDelBtnSty, setFstDelBtnSty] = useState(null);
  const [lowRsBtnSty, setLowRsBtnSty] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const btnStyle = {backgroundColor : 'rgb(50, 50, 56)', color : 'white'};
  
  useEffect(()=> {fetchData()},[]);

  async function fetchData () {
    const data = await fetch(apiUrl);
    const jsonData = await data.json();
    const restaurantData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantsData(restaurantData);
    setFilterRestaurants(restaurantData);
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
          }} placeholder="Search Restaurants"/>

          <button onClick={(event)=> {
            if(searchText === null) {
              return alert('Enter Restaurent Name');
            }
            const searchedRestaurents = restaurantsData.filter(restaurantDetails=> (((restaurantDetails.info.name).toLowerCase()).includes((searchText).toLowerCase())));
            searchedRestaurents.length === 0 ? alert('No Such Restaurents Found') : (setFilterRestaurants(searchedRestaurents));
          }}><img src={searchIcon}/></button>
        </div>
        
        <div className="filter-btn-container">
          <button onClick={()=> {
            setRatingBtnSty(null);
            setFstDelBtnSty(null);
            setLowRsBtnSty(null);
            setFilterRestaurants(restaurantsData);
          }}><img className='reset-icon' src={restIcon}></img></button>

          <button style={ratingBtnSty} onClick={()=>{
            const topRatedRestaurants = restaurantsData.filter(restaurantData=> restaurantData.info.avgRating >= 4.0);
            ratingBtnSty === null ? (setRatingBtnSty(btnStyle), setFstDelBtnSty(null),
            setLowRsBtnSty(null), 
            setFilterRestaurants(topRatedRestaurants)) : 
            (setRatingBtnSty(null),setFilterRestaurants(restaurantsData));
          }}>Top Rating</button>

          <button style={fstDelBtnSty} onClick={()=> {
            const leastDelTime = Math.min(...restaurantsData.map(restaurantData => (restaurantData.info.sla.deliveryTime)));            
            const fastDelivery = restaurantsData.filter(restaurantData=> restaurantData.info.sla.deliveryTime <= leastDelTime + 10);
            fstDelBtnSty === null ? (setFstDelBtnSty(btnStyle), setRatingBtnSty(null), setLowRsBtnSty(null),
            setFilterRestaurants(fastDelivery)) :  
            (setFstDelBtnSty(null), setFilterRestaurants(restaurantsData));
          }}>Fast Delivery</button>

          <button style={lowRsBtnSty} onClick={()=> {
            const lowPrice = restaurantsData.filter((restaurantData)=> (restaurantData.info.costForTwo <= `₹${200} for two`));
            lowRsBtnSty === null ? (setLowRsBtnSty(btnStyle), setFilterRestaurants(lowPrice), setRatingBtnSty(null),
            setFstDelBtnSty(null)) : 
            (setLowRsBtnSty(null), setFilterRestaurants(restaurantsData));
          }}>Rs &lt; 200</button>
        </div>
      </div>

      <div className='card-container'>{filterRestaurants.map((restaurantDetails)=> (
        <Link key={restaurantDetails.info.id} to={`/restaurant/${restaurantDetails.info.id}`}> <CardDetails resDetails={restaurantDetails}/> </Link>
        ))}
      </div>

    </div>
  )
}