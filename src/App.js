import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header.js';
import { RestaurantCard } from './components/RestaurantCard.js';
import { Search } from './components/Search.js';


const AppLayout = ()=> {
  return(
  <div className='app'>
    <Header/>
    <Search/>
    <RestaurantCard/>
  </div>
)}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);