import React from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';
import MainLayout from '../../Layout/MainLayout';
import addmission2 from '../pic/admission.webp'

const Contact = () => {
    const location = useLocation();

    let footerClass = 'footer-common';
    if (location.pathname === '/') {
      footerClass += ' footer-home';
    } else if (location.pathname === '/contact') {
      footerClass += ' footer-contact';
    }
  
    return (
        <MainLayout>
             <div className="headeraddmission">
                <img src={addmission2} alt="urs inter college" />
            </div>
        <div className="contact-container">
            <div className="contact-info">
                <h2>Uma Ram Shankar Singh Inter College </h2>
                <p>Mogalahan Kunwar Campierganj Gorakhpur</p>
                <h3>Support</h3>
                <p>Call : +91 91403 35773</p>
                <h3>Our Email</h3>
                <p>ravindrasingh945308@gmail.com</p>
                <div style={{ width: '100%', height: '450px', border: '0' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.485343869785!2d83.39752795!3d26.80906195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991456adf31df79%3A0x55ef554ab56bc307!2sMugalaha%2C%20Mughala%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273013!5e0!3m2!1sen!2sin!4v1718693809738!5m2!1sen!2sin"
        width="525"
        height="450"
        style={{ border: '2px solid black' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
            </div>
            <div className="contact-form">
                <h2>CONTACT US</h2>
                <form>
                    <label>Purpose:</label>
                    <select>
                        <option>Admissions</option>
                        <option>Jobs</option>
                        <option>Other</option>
                    </select>
                    <label>Name:</label>
                    <input type="text" placeholder="Your name" />
                    <label>Enter E-Mail Id:</label>
                    <input type="email" placeholder="Your email" />
                    <label>Enter Phone No:</label>
                    <input type="tel" placeholder="Your ph no" />
                    <label>Your Message:</label>
                    <textarea placeholder="Please write your message here..."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </MainLayout>
    );
};

export default Contact;