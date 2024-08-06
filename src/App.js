import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header.js';
import { Body } from './components/Body.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Contact } from './components/Contact.js';
import { Cart } from './components/Cart.js';
import { Error } from './components/Error.js';
import { ResturentMenu } from './components/ResturentMenu.js';
import { AboutClassShimmer } from './components/AboutClassShimmer.js';
import { Provider } from 'react-redux';
import { appStore } from './utiles/appStore.js';

const AboutClass = lazy(()=> import('./components/AboutClass.js'));

const AppLayout = ()=> {
  return(
    <Provider store={appStore}>
      <div className='app'>
        <Header/>
        <Outlet/>
      </div>
    </Provider>
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
        element: <Suspense fallback={<AboutClassShimmer/>}><AboutClass/></Suspense> 
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