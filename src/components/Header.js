import logo from '../../Images/ONDC-logo.png';


export const Header = ()=> {
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