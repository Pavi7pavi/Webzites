import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styling
import { FaDesktop, FaMobileAlt, FaShoppingCart, FaEnvelope, FaServer } from 'react-icons/fa'; // Import icons from react-icons library
import { AiFillFacebook, AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai'; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Website Types</h3>
          <ul>
            <li><FaDesktop className="icon" /> Portfolio Websites</li>
            <li><FaMobileAlt className="icon" /> E-commerce Websites</li>
            <li><FaShoppingCart className="icon" /> Blog Websites</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><FaEnvelope className="icon" /> <Link to="/contact">Contact Form Integration</Link></li>
            <li><FaServer className="icon" /> Hosting Solutions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=61559612696337&mibextid=ZbWKwL" className="icon icon-facebook"><AiFillFacebook /></a></li>
            <li><a href="https://www.instagram.com/mywebzites?utm_source=qr&igsh=a3hmYXN0YWU2ajE1" className="icon icon-instagram"><AiFillInstagram /></a></li>
            <li><a href="https://wa.me/6379941128" className="icon icon-whatsapp"><AiOutlineWhatsApp /></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Details</h3>
          <ul>
            <li><FaEnvelope className="icon" /> <a href="mailto:services@mywebzites.com">services@mywebzites.com</a></li>
            <li><FaMobileAlt className="icon" /> <a href="tel:6379941128">6379941128</a></li>
            <li><FaMobileAlt className="icon" /> <a href="tel:6379941128">7010774264</a></li>
            <li><span className="icon">📍</span> Chennai</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
