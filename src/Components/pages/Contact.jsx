import React from 'react';
import './Contact.css';
import MainLayout from '../../Layout/MainLayout';
import addmission2 from '../pic/addmission2.jpg'

const Contact = () => {
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
