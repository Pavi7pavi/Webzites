import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './ContactPage.css'; // Importing the CSS file for styles
import backgroundVideo from '../videos/v10.mp4'; // Importing the background video
import contactImage from '../images/img6.jpg'; // Importing the contact image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData); // Log form data for testing
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page-container">
      {/* Helmet for SEO meta tags */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact WebZites | Website Design, Development, and Digital Marketing</title>
        <link rel="canonical" href="https://www.mywebzites.com/contact" />
        <meta name="description" content="Get in touch with WebZites for expert website design, digital marketing, mobile web design, and custom web development services. Contact us today to discuss your project." />
        <meta name="keywords" content="website design, digital marketing, mobile web design, website designing business, website developers for small business, web application development, website building business, mobile friendly website design, ecommerce app development company, custom web development services, wordpress website maintenance services, wordpress web design company, web design SEO, website and app development company" />
        <meta name="author" content="WebZites" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta tags for videos */}
        <meta property="og:video" content="https://www.mywebzites.com/videos/v10.mp4" />
        <meta property="og:video:secure_url" content="https://www.mywebzites.com/videos/v10.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1920" />
        <meta property="og:video:height" content="1080" />
        {/* Meta tags for images */}
        <meta property="og:image" content="https://www.mywebzites.com/images/img6.jpg" />
        <meta property="og:image:secure_url" content="https://www.mywebzites.com/images/img6.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Helmet>

      {/* Hero section with background video */}
      <div className="hero">
        <video className="video-bg" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Contact WebZites</h1>
          <p>Reach out to us for top-notch website design, development, and digital marketing services.</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="decorative-elements">
        <div className="triangle"></div>
      </div>

      {/* Contact form section */}
      <div className="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr />
          </div>
          <input type="hidden" name="access_key" value="d2f1125d-3769-47cd-9e1a-9a156fe694bc"/>
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