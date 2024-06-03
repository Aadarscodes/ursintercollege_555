import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import '../App.css';



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`containerx ${mobileMenu ? 'show-mobile-menu' : ''}`}>
      {/* Replace the logo and menu icon with your own */}
      {/* <img src={logo} alt='' className='logo' /> */}
      <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
      <li><Link to="/" className='chutiya'>Home</Link></li>
            <li><Link to="/aboutus" className='chutiya'>About Us</Link></li>
            <li><Link to="/managing-committee" className='chutiya'>Managing Committee</Link></li>
            <li><Link to="/message" className='chutiya'>Message</Link></li>
            <li><Link to="/facilities" className='chutiya'>Facilities</Link></li>
            <li><Link to="/Teachers" className='chutiya'>Teachers</Link></li>
            <li><Link to="/admission" className='chutiya'>Admission</Link></li>
            <li><Link to="/album" className='chutiya'>Album</Link></li>
        {/* <li><a href="#campus">Campus</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact"><button className='btn'>Contact us</button></a></li>
      </ul>
      {/* <img src={menu_icon} className='menu-icon' onClick={toggleMenu} alt='Menu Icon' /> */}
    </nav>
  );
};

export default Navbar;
