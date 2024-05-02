import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css'; // Import your custom CSS for styling
import webDesignIcon from '../images/img1.jpg';
import digitalMarketingIcon from '../images/img10.jpg';
import ecommerceIcon from '../images/img11.jpg';
import customDevelopmentIcon from '../images/img12.jpg';
import backgroundVideo from '../videos/v15.mp4';
import businessWebsiteImage from '../images/img13.jpg';
import ecommerceWebsiteImage from '../images/img14.jpg';
import portfolioWebsiteImage from '../images/img15.jpg';
import blogWebsiteImage from '../images/img16.jpg';
import nonprofitWebsiteImage from '../images/img17.jpg';
import educationalWebsiteImage from '../images/img18.jpg';
import project1Image from '../images/img19.jpg';
import project2Image from '../images/img20.jpg';
import project3Image from '../images/img21.png';


const ServicePage = () => {
  return (
    <div className="service-page">
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
      </div>

      <div className="types-of-websites">
        <h2>Types of Websites</h2>
        <div className="website-grid">
          {/* Business Website */}
          <div className="website-item">
            <img src={businessWebsiteImage} alt="Business Website" />
            <h3>Business Websites</h3>
            <p>A website for promoting your business and showcasing your products or services.</p>
          </div>
          {/* E-commerce Website */}
          <div className="website-item">
            <img src={ecommerceWebsiteImage} alt="E-commerce Website" />
            <h3>E-commerce Websites</h3>
            <p>An online store for selling products or services directly to customers over the internet.</p>
          </div>
          {/* Portfolio Website */}
          <div className="website-item">
            <img src={portfolioWebsiteImage} alt="Portfolio Website" />
            <h3>Portfolio Websites</h3>
            <p>A website for showcasing your work, projects, or creative portfolio.</p>
          </div>
          {/* Blog or Personal Website */}
          <div className="website-item">
            <img src={blogWebsiteImage} alt="Blog or Personal Website" />
            <h3>Blog or Personal Websites</h3>
            <p>A personal website or blog for sharing thoughts, ideas, or experiences.</p>
          </div>
          {/* Nonprofit or Government Website */}
          <div className="website-item">
            <img src={nonprofitWebsiteImage} alt="Nonprofit or Government Website" />
            <h3>Nonprofit or Government Websites</h3>
            <p>A website for nonprofit organizations or government agencies to inform the public and promote initiatives.</p>
          </div>
          {/* Educational Website */}
          <div className="website-item">
            <img src={educationalWebsiteImage} alt="Educational Website" />
            <h3>Educational Websites</h3>
            <p>A website for educational institutions, courses, or online learning platforms.</p>
          </div>
        </div>
      </div>

      <div className="website-benefits">
        <h2>Benefits of Having a Website</h2>
        <ul>
          <li>Increased Visibility: Reach a wider audience and improve brand awareness.</li>
          <li>24/7 Accessibility: Your website is accessible to customers anytime, anywhere.</li>
          <li>Marketing Opportunities: Promote your products or services and run marketing campaigns.</li>
          <li>Credibility: Establish trust with potential customers and build credibility for your brand.</li>
          <li>Customer Support: Provide information and support to customers through your website.</li>
          <li>Data Collection: Gather valuable data about your audience and their preferences.</li>
        </ul>
      </div>

      <div className="portfolio-section">
        <h2>Our Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <img src={project1Image} alt="Project 1" />
            <h3>Project Title 1</h3>
            <p>A brief description of Project 1 and the services provided.</p>
            <Link to="/project-1" className="project-link">View Project</Link>
          </div>
          <div className="project-item">
            <img src={project2Image} alt="Project 2" />
            <h3>Project Title 2</h3>
            <p>A brief description of Project 2 and the services provided.</p>
            <Link to="/project-2" className="project-link">View Project</Link>
          </div>
          <div className="project-item">
            <img src={project3Image} alt="Project 3" />
            <h3>Project Title 3</h3>
            <p>A brief description of Project 3 and the services provided.</p>
            <Link to="/project-3" className="project-link">View Project</Link>
          </div>
        </div>
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
