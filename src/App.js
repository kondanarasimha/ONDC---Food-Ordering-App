import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header.js';
import { Body } from './components/Body.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Contact } from './components/Contact.js';
// import { AboutClass } from './components/AboutClass.js';
import { Cart } from './components/Cart.js';
import { Error } from './components/Error.js';
import { ResturentMenu } from './components/ResturentMenu.js';

const AboutClass = lazy(()=> import('./components/AboutClass.js'));

const AppLayout = ()=> {
  return(
  <div className='app'>
    <Header/>
    <Outlet/>
  </div>
)}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/about',
        element: <Suspense fallback={<h1>loading</h1>}><AboutClass/></Suspense> 
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restaurant/:id',
        element: <ResturentMenu/>
      }
    ],
    errorElement: <Error />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);