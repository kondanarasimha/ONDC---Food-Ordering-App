import { useSelector } from 'react-redux';
import logo from '../../Images/ONDC-logo.png';
import { Link } from 'react-router-dom';


export const Header = ()=> {
  const cartItems = useSelector((store)=> store.cart.items);
  return(
  <div className='bg-white w-full pb-1 rounded-b-xl drop-shadow-lg flex flex-row justify-between items-center fixed z-50 max-sm:flex-col max-sm:pl-1'>
    <div className='ml-5'>
      <Link to="/"><img className='w-20 rounded-full mx-4 my-1' src={logo} alt="logo-png"/></Link>
    </div>
    <div className='mr-5'>
      <ul className='flex flex-row space-x-14 font-semibold text-xl mx-4'>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/cart">CART({cartItems.length})</Link></li>
      </ul>
    </div>
  </div>
)};