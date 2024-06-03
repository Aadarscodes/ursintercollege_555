// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// import '../App.css';
// import menu_icon from './../assets/menu-icon.png'



// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const toggleMenu = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   return (
//     <nav className={`containerx ${mobileMenu ? 'show-mobile-menu' : ''}`}>
//       {/* Replace the logo and menu icon with your own */}
//       {/* <img src={logo} alt='' className='logo' /> */}
//       <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
//         <li><a href="#"className='chutiya' >Home</a></li>
//         <li><a href="#hero"className='chutiya'>About Us</a></li>
//         <li><a href="#program"className='chutiya'>Managing Committee</a></li>
//         <li><a href="#program"className='chutiya'>Message</a></li>
//         <li><a href="#program"className='chutiya'>Facilities</a></li>
//         <li><a href="#program"className='chutiya'>Faculty</a></li>
//         <li><a href="#program"className='chutiya'>Admission</a></li>
//         <li><a href="#about"className='chutiya'>Album</a></li>
//         {/* <li><a href="#campus">Campus</a></li> */}
//         {/* <li><a href="#testimonials">Testimonials</a></li> */}
//         <li><a href="#contact"><button className='btn chutiya'>Contact us</button></a></li>
//       </ul>
//       <img src={menu_icon} className='menu-icon' onClick={toggleMenu} alt='Menu Icon' />
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../App.css';
import menu_icon from './../assets/menu-icon.png';
import Carousel from './Carousel.jsx';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenu]);

  return (
    <>
      <nav className={`containerx ${mobileMenu ? 'show-mobile-menu' : ''}`}>
        <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
          <li><a href="#" className='chutiya'>Home</a></li>
          <li><a href="#hero" className='chutiya'>About Us</a></li>
          <li><a href="#program" className='chutiya'>Managing Committee</a></li>
          <li><a href="#program" className='chutiya'>Message</a></li>
          <li><a href="#program" className='chutiya'>Facilities</a></li>
          <li><a href="#program" className='chutiya'>Faculty</a></li>
          <li><a href="#program" className='chutiya'>Admission</a></li>
          <li><a href="#about" className='chutiya'>Album</a></li>
          <li><a href="#contact"><button className='btn chutiya'>Contact us</button></a></li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={toggleMenu} alt='Menu Icon' />
      </nav>
      <div className={`content ${mobileMenu ? 'content-shift' : ''}`}>
        {/* Your main content goes here */}
        {/* <Carousel></Carousel> */}
        <div className='contentshift'></div>
      </div>
    </>
  );
};

export default Navbar;
