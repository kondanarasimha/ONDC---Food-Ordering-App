import React from 'react';
import ReactDOM from 'react-dom/client';

import logo from './Images/ONDC-logo.png';
import biryaniImg from './Images/mario-raj-ysmeQt1dzcw-unsplash.jpg';
import deliveryIcon from './Images/directions_bike_24dp_FILL0_wght400_GRAD0_opsz24.png';
import ratingIcon from './Images/star_half_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { restaurantsData } from './data.js';


const Header = ()=> {
  return(
  <div className='header-container'>
    <div className='logo-container'>
    <img src={logo} alt="logo-png"/>
    </div>
    <div className='nav-container'>
      <ul>
        <li>HOME</li>
        <li>CONTACT</li>
        <li>ABOUT</li>
        <li>CART</li>
      </ul>
    </div>
  </div>
)};

const Search = ()=> (
  <div>
    <input />
  </div>
)

const CardDetails = (props)=> {
  const {name, cloudinaryImageId, avgRating,
        costForTwo, cuisines, locality, sla} = props.resDetails.info;


  return(
  <div className='resturent-card-container'>
  <div className='resturent-img-container'>
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+cloudinaryImageId}/>
    <div className='resturent-details-container'>
      <h3>{name}</h3>

      <div className='resturent-delivery-container'>
      <img src={deliveryIcon}/>
      <p>{sla.deliveryTime} Mins</p>
      </div>

      <div className='resturent-rating-container'>
      <img src={ratingIcon}/>
      <p>{avgRating}</p>
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


const Card = ()=> {
  return(
  <div className='card-container'>

    {restaurantsData.map((restaurantDetails)=> 
      (
        <CardDetails key={restaurantDetails.info.id} resDetails={restaurantDetails}/>
      ))}
  
  </div>
)}


const AppLayout = ()=> {
  return(
  <div className='app'>
    <Header/>
    <Search/>
    <Card/>
  </div>
)}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);