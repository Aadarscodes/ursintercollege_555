import React from 'react';
import './Footer.css';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className='footer'>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section contact-info">
            <h3>Contact Us</h3>
            <p>123 School St, Education City</p>
            <p>Email: info@schoolname.edu</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              {/* <li><a href="#">About Us</a></li> */}
              <li><a href="#">Admissions</a></li>
              {/* <li><a href="#">Programs</a></li> */}
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            {/* Uncomment and add appropriate src paths for social media icons */}
            
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
           
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 School Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;