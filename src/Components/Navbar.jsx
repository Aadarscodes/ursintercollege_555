import React, { useEffect, useState } from 'react';
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
        <li><a href="#hero">Home</a></li>
        <li><a href="#hero">About Us</a></li>
        <li><a href="#program">Managing Committee</a></li>
        <li><a href="#program">Message</a></li>
        <li><a href="#program">Facilities</a></li>
        <li><a href="#program">Faculty</a></li>
        <li><a href="#program">Admission</a></li>
        <li><a href="#about">Album</a></li>
        {/* <li><a href="#campus">Campus</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact"><button className='btn'>Contact us</button></a></li>
      </ul>
      {/* <img src={menu_icon} className='menu-icon' onClick={toggleMenu} alt='Menu Icon' /> */}
    </nav>
  );
};

export default Navbar;
