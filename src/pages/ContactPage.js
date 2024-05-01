import React, { useState } from 'react';
import './ContactPage.css'; // Importing the CSS file for styles
import backgroundVideo from '../videos/v10.mp4'; // Importing the background video
import contactImage from '../images/img6.jpg'; // Importing the contact image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page-container">
      <div className="hero">
        {/* Video Background */}
        <video className="video-bg" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Welcome to Contact Us Page</h1>
          <p>Get in touch with us to explore our services and offerings.</p>
        </div>
      </div>
      <div className="decorative-elements">
        <div className="triangle"></div>
      </div>
      <div className="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr />
          </div>
          <input type="hidden" name="access_key" value="dd211481-2e0f-4809-b3fd-199d240eea6e" />
          <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
          <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required />
          <textarea name="message" placeholder="Your Message" className="contact-inputs contact-left-textarea" required></textarea>
          <button type="submit">Submit <img src="#" alt="" /></button>
        </form>
        <div className="contact-right">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;