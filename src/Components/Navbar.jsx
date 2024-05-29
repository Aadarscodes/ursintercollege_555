import React, { useEffect, useState } from 'react';
import './Navbar.css';
import '../App.css';



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${mobileMenu ? 'show-mobile-menu' : ''}`}>
      {/* Replace the logo and menu icon with your own */}
      {/* <img src={logo} alt='' className='logo' /> */}
      <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
        <li><a href="#"className='chutiya' >Home</a></li>
        <li><a href="#hero"className='chutiya'>About Us</a></li>
        <li><a href="#program"className='chutiya'>Managing Committee</a></li>
        <li><a href="#program"className='chutiya'>Message</a></li>
        <li><a href="#program"className='chutiya'>Facilities</a></li>
        <li><a href="#program"className='chutiya'>Faculty</a></li>
        <li><a href="#program"className='chutiya'>Admission</a></li>
        <li><a href="#about"className='chutiya'>Album</a></li>
        {/* <li><a href="#campus">Campus</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact"><button className='btn'>Contact us</button></a></li>
      </ul>
      {/* <img src={menu_icon} className='menu-icon' onClick={toggleMenu} alt='Menu Icon' /> */}
    </nav>
  );
};

export default Navbar;
