import React from 'react';
import ReactDOM from 'react-dom/client';

import logo from './Images/ONDC-logo.png';
import biryaniImg from './Images/mario-raj-ysmeQt1dzcw-unsplash.jpg';
import deliveryIcon from './Images/directions_bike_24dp_FILL0_wght400_GRAD0_opsz24.png';
import ratingIcon from './Images/star_half_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { data } from './data.js';


const Header = ()=> (
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
);

const Search = ()=> (
  <div>
    <input />
  </div>
)

const CardDetails = ()=> (
  <div className='resturent-card-container'>
  <div className='resturent-img-container'>
    <img src={biryaniImg}/>
    <div className='resturent-details-container'>
      <h2>Bilal</h2>

      <div className='resturent-delivery-container'>
      <img src={deliveryIcon}/>
      <p>15-20 Min</p>
      </div>

      <div className='resturent-rating-container'>
      <img src={ratingIcon}/>
      <p>4.5</p>
      </div>

      <div className='priceCents'>
        <h3>TWO FOR 200 ₹</h3>
      </div>

      <h6>Biryani, chicken, Mutton, southindia</h6>
      <h4>Ongole</h4>

    </div>
  </div>
</div>
)


const Card = ()=> (
  <div className='card-container'>
    <CardDetails/>
    <CardDetails/>
    <CardDetails/>
    <CardDetails/>
  </div>
)


const AppLayout = ()=> (
  <div className='app'>
    <Header/>
    <Search/>
    <Card/>
  </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);