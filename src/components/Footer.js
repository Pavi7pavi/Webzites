import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styling
import { FaDesktop, FaMobileAlt, FaShoppingCart, FaEnvelope, FaServer } from 'react-icons/fa'; // Import icons from react-icons library
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          
          <h3>Website Types</h3>
          <ul>
            <li><FaDesktop className="icon" /> <Link to="/portfolio">Portfolio Websites</Link></li>
            <li><FaMobileAlt className="icon" /> <Link to="/ecommerce">E-commerce Websites</Link></li>
            <li><FaShoppingCart className="icon" /> <Link to="/blog">Blog Websites</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><FaEnvelope className="icon" /> <Link to="/contact">Contact Form Integration</Link></li>
            <li><FaServer className="icon" /> <Link to="/hosting">Hosting Solutions</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="#" className="icon icon-facebook"><AiFillFacebook /></a></li>
            <li><a href="#" className="icon icon-twitter"><AiOutlineTwitter /></a></li>
            <li><a href="#" className="icon icon-instagram"><AiFillInstagram /></a></li>
            <li><a href="#" className="icon icon-linkedin"><AiFillLinkedin /></a></li>
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
