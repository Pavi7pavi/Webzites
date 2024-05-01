import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css'; // Import your custom CSS for styling
import webDesignIcon from '../images/img29.png';
import digitalMarketingIcon from '../images/img28.png';
import ecommerceIcon from '../images/img9.jpg';
import customDevelopmentIcon from '../images/img26.jpg';
import backgroundVideo from '../videos/v11.mp4';
import project1Image from '../images/img20.jpg';
import project2Image from '../images/img21.png';
import project3Image from '../images/img22.png';

const ServicePage = () => {
  return (
    <div>
      <div className="hero">
        {/* Video Background */}
        <video className="video-bg" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Welcome to Our Services</h1>
          <p>Explore our comprehensive range of services tailored to meet your business needs.</p>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="service-section">
        {/* Service Item: Web Design */}
        <div className="service-item design">
          <div className="service-icon">
            <img src={webDesignIcon} alt="Web Design Icon" />
          </div>
          <h2>Web Design</h2>
          <p>Create visually stunning websites that engage and captivate your audience.</p>
          <Link to="/web-design" className="service-link">Learn More</Link>
        </div>
        {/* Service Item: Digital Marketing */}
        <div className="service-item marketing">
          <div className="service-icon">
            <img src={digitalMarketingIcon} alt="Digital Marketing Icon" />
          </div>
          <h2>Digital Marketing</h2>
          <p>Reach your target audience and boost your online presence with effective digital marketing strategies.</p>
          <Link to="/digital-marketing" className="service-link">Learn More</Link>
        </div>
        {/* Service Item: E-commerce Solutions */}
        <div className="service-item ecommerce">
          <div className="service-icon">
            <img src={ecommerceIcon} alt="E-commerce Icon" />
          </div>
          <h2>E-commerce Solutions</h2>
          <p>Launch and manage your online store with ease, providing seamless shopping experiences for your customers.</p>
          <Link to="/e-commerce" className="service-link">Learn More</Link>
        </div>
        {/* Service Item: Custom Development */}
        <div className="service-item development">
          <div className="service-icon">
            <img src={customDevelopmentIcon} alt="Custom Development Icon" />
          </div>
          <h2>Custom Development</h2>
          <p>Get tailored software solutions designed to meet the unique needs of your business and streamline your operations.</p>
          <Link to="/custom-development" className="service-link">Learn More</Link>
        </div>
        {/* Add more service items as needed */}
      </div>
      {/* Portfolio Section */}
      <div className="portfolio-section">
        <h2>Our Projects</h2>
        {/* Project Item 1 */}
        <div className="project-item">
          <img src={project1Image} alt="Project 1" />
          <h3>Project Title 1</h3>
          <p>A brief description of Project 1 and the services provided.</p>
          <Link to="/project-1" className="project-link">View Project</Link>
        </div>
        {/* Project Item 2 */}
        <div className="project-item">
          <img src={project2Image} alt="Project 2" />
          <h3>Project Title 2</h3>
          <p>A brief description of Project 2 and the services provided.</p>
          <Link to="/project-2" className="project-link">View Project</Link>
        </div>
        {/* Project Item 3 */}
        <div className="project-item">
          <img src={project3Image} alt="Project 3" />
          <h3>Project Title 3</h3>
          <p>A brief description of Project 3 and the services provided.</p>
          <Link to="/project-3" className="project-link">View Project</Link>
        </div>
        {/* Add more project items as needed */}
      </div>
      <div className="contact-us">
        <h2>Ready to get started?</h2>
        <p>Contact us now to discuss how we can help your business thrive.</p>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </div>
    </div>
  );
};

export default ServicePage;
