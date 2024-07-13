import logo from '../../Images/ONDC-logo.png';
import { Link } from 'react-router-dom';


export const Header = ()=> {
  return(
  <div className='header-container'>
    <div className='logo-container'>
      <Link to="/"><img src={logo} alt="logo-png"/></Link>
    </div>
    <div className='nav-container'>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/cart">CART</Link></li>
      </ul>
    </div>
  </div>
)};