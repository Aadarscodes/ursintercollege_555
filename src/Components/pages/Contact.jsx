import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Jawahar Shiksha Niketan Inter College Jungle Babban Bhourabari Gorakhpur</h2>
                <p>Jungle Babban Bhourabari Gorakhpur</p>
                <h3>Support</h3>
                <p>Call : 9690491000</p>
                <h3>Our Email</h3>
                <p>ms.sandeepkumar84@gmail.com</p>
            </div>
            <div className="contact-form">
                <h2>CONTACT US</h2>
                <form>
                    <label>Purpose:</label>
                    <select>
                        <option>Admissions</option>
                        <option>General Inquiry</option>
                        <option>Support</option>
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
    );
};

export default Contact;
