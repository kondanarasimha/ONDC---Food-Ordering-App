import { useState, useEffect } from 'react';
import { CardDetails, IsVegCard } from './CardDetails.js';
import searchIcon from '../../Images/search_24dp_FILL0_wght400_GRAD0_opsz24.png';
import restIcon from '../../Images/reset_settings_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { ShimmerCards, ShimmerFilterStrip } from './ShimmerCards.js';
import { Link } from 'react-router-dom';
import { useRestaurantsData } from '../utiles/useRestaurantsData.js';


export const Body = ()=> {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [ratingBtnSty, setRatingBtnSty] = useState(null);
  const [fstDelBtnSty, setFstDelBtnSty] = useState(null);
  const [lowRsBtnSty, setLowRsBtnSty] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const btnStyle = {backgroundColor : 'rgb(50, 50, 56)', color : 'white'};
  const VegCardDetails = IsVegCard(CardDetails);

  useEffect(()=> {fetchingRestaurantData()},[]);

  async function fetchingRestaurantData () {
    const restaurantData = await useRestaurantsData();
    setRestaurantsData(restaurantData);
    setFilterRestaurants(restaurantData);
  }

  if(restaurantsData === undefined || restaurantsData.length === 0) {
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
    <div className="py-32 px-24">

      <h1 className='px-2 ml-3.5 mr-3.5 text-2xl font-semibold tracking-wide max-sm:ml-10 max-sm:mt-3 max-md:text-center'>TOP RESTAURENTS</h1>

      <div className="flex flex-row justify-between px-2 ml-3.5 mr-3.5 h-20 max-sm:flex-col max-md:flex-col">
        <div className='flex items-center'>
          <input className='p-1.5 pr-32 border border-gray-900 max-sm:w-10 max-sm:ml-6 max-sm:pr-44 max-lg:w-14 max-lg:ml-6 max-lg:pr-44' onChange={(keys)=> {
            setSearchText(keys.target.value);
          }} placeholder="Search Restaurants"/>

          <button className='ml-2 border border-gray-900  rounded-sm text-center my-6 p-1 max-sm:h-9' onClick={(event)=> {
            if(searchText === null) {
              return alert('Enter Restaurent Name');
            }
            setRatingBtnSty(null);
            setFstDelBtnSty(null);
            setLowRsBtnSty(null);
            const searchedRestaurents = restaurantsData.filter(restaurantDetails=> (((restaurantDetails.info.name).toLowerCase()).includes((searchText).toLowerCase())));
            searchedRestaurents.length === 0 ? alert('No Such Restaurents Found') : (setFilterRestaurants(searchedRestaurents));
          }}><img className='w-7' src={searchIcon}/></button>
        </div>
        
        <div className='flex items-center max-sm:-mt-20 max-md:-mt-20'>
          <button className='ml-6 border border-gray-900 rounded-sm text-center my-16 p-1 max-sm:text-sm max-md:text-sm' style={ratingBtnSty} onClick={()=>{
            const topRatedRestaurants = restaurantsData.filter(restaurantData=> restaurantData.info.avgRating >= 4.0);
            ratingBtnSty === null ? (setRatingBtnSty(btnStyle), setFstDelBtnSty(null),
            setLowRsBtnSty(null), 
            setFilterRestaurants(topRatedRestaurants)) : 
            (setRatingBtnSty(null),setFilterRestaurants(restaurantsData));
          }}>Top Rating</button>

          <button className='ml-6 border border-gray-900 rounded-sm text-center my-16 p-1 max-sm:text-sm max-md:text-sm' style={fstDelBtnSty} onClick={()=> {
            const leastDelTime = Math.min(...restaurantsData.map(restaurantData => (restaurantData.info.sla.deliveryTime)));            
            const fastDelivery = restaurantsData.filter(restaurantData=> restaurantData.info.sla.deliveryTime <= leastDelTime + 10);
            fstDelBtnSty === null ? (setFstDelBtnSty(btnStyle), setRatingBtnSty(null), setLowRsBtnSty(null),
            setFilterRestaurants(fastDelivery)) :  
            (setFstDelBtnSty(null), setFilterRestaurants(restaurantsData));
          }}>Fast Delivery</button>

          <button className='ml-6 border border-gray-900 rounded-sm text-center my-16 p-1 max-sm:text-sm max-md:text-sm' style={lowRsBtnSty} onClick={()=> {
            const lowPrice = restaurantsData.filter((restaurantData)=> (restaurantData.info.costForTwo <= `₹${200} for two`));
            lowRsBtnSty === null ? (setLowRsBtnSty(btnStyle), setFilterRestaurants(lowPrice), setRatingBtnSty(null),
            setFstDelBtnSty(null)) : 
            (setLowRsBtnSty(null), setFilterRestaurants(restaurantsData));
          }}>Rs &lt; 200</button>
        </div>
      </div>

      <div className='grid grid-cols-4 justify-items-center gap-6 max-sm:grid max-sm:grid-cols-1 max-sm:mt-16 max-md:grid-cols-2 max-md:mt-16 max-lg:grid-cols-3 max-lg:mt-16'>{filterRestaurants.map((restaurantDetails)=> {
        return (
          <Link key={restaurantDetails.info.id} to={`/restaurant/${restaurantDetails.info.id}`}>
            {restaurantDetails.info.veg  === true ? <VegCardDetails resDetails={restaurantDetails}/> :
            <CardDetails resDetails={restaurantDetails}/>}
          </Link>
        )

      })}</div>
    </div>
  )
}