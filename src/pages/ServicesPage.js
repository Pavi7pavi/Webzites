import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css'; // Import your custom CSS for styling
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'; 
import { Helmet } from 'react-helmet';
import webDesignIcon from '../images/web design.jpg';
import digitalMarketingIcon from '../images/digital.jpg';
import ecommerceIcon from '../images/ecommerce.jpg';
import customDevelopmentIcon from '../images/img12.jpg';
import backgroundVideo from '../videos/v8.mp4';
import businessWebsiteImage from '../images/img13.jpg';
import ecommerceWebsiteImage from '../images/img14.jpg';
import portfolioWebsiteImage from '../images/img15.jpg';
import blogWebsiteImage from '../images/img16.jpg';
import nonprofitWebsiteImage from '../images/img17.jpg';
import educationalWebsiteImage from '../images/img18.jpg';
import youtube from '../images/youtube.png';
import admin from '../images/admin.png';
import apple from '../images/apple.png';

const ServicePage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  const cardAnimation = useSpring({
    from: { transform: 'scale(0.9)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { tension: 170, friction: 14 },
    delay: 500,
  });

  return (
    <div className="service-page">
      <Helmet>
  <meta charSet="utf-8" />
  <title>Services Offered by WebZites - Web Development & Digital Marketing</title> {/* Updated title */}
  <link rel="canonical" href="https://www.mywebzites.com/services" />
  <meta name="description" content="Explore WebZites' comprehensive web development services, including website design and branding, digital marketing, e-commerce solutions, and custom development. Contact us to elevate your online presence!" /> {/* Updated meta description */}
  <meta name="keywords" content="web development services, website design and branding, digital marketing, e-commerce solutions, custom development, contact us" /> {/* Updated keywords */}
  <meta name="author" content="WebZites" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Meta tags for videos */}
  <meta property="og:video" content="https://www.mywebzites.com/videos/v8.mp4" />
  <meta property="og:video:secure_url" content="https://www.mywebzites.com/videos/v8.mp4" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="1920" />
  <meta property="og:video:height" content="1080" />

  {/* Meta tags for images */}
  <meta property="og:image" content="https://www.mywebzites.com/images/web design.jpg" />
  <meta property="og:image:secure_url" content="https://www.mywebzites.com/images/web design.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="600" />

  {/* Repeat the above pattern for all images */}
</Helmet>


      <div className="hero">
        {/* Video Background */}
        <video className="video-bg" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
        <h1>Empower Your Online Presence with Web Development & Digital Marketing</h1>
          <p>Discover how WebZites empowers your online presence through comprehensive web development services, including visually stunning website design, effective digital marketing strategies, seamless e-commerce solutions, and tailored custom development. Elevate your business now!</p>
        </div>
      </div>

      <div className="service-section">
        {/* Service Item: Web Design */}
        <div className="service-item design">
          <div className="service-icon">
            <img src={webDesignIcon} alt="Web Design Icon" />
          </div>
          <h2>Website Design and Branding</h2>
          <p>Create visually stunning websites that engage and captivate your audience with our expert website design and branding services.</p>
        </div>
        {/* Service Item: Digital Marketing */}
        <div className="service-item marketing">
          <div className="service-icon">
            <img src={digitalMarketingIcon} alt="Digital Marketing Icon" />
          </div>
          <h2>Website Design and Digital Marketing</h2>
          <p>Reach your target audience and boost your online presence with effective website design and digital marketing strategies.</p>
        </div>
        {/* Service Item: E-commerce Solutions */}
        <div className="service-item ecommerce">
          <div className="service-icon">
            <img src={ecommerceIcon} alt="E-commerce Icon" />
          </div>
          <h2>E-commerce App Development Company</h2>
          <p>Launch and manage your online store with ease, providing seamless shopping experiences for your customers.</p>
        </div>
        {/* Service Item: Custom Development */}
        <div className="service-item development">
          <div className="service-icon">
            <img src={customDevelopmentIcon} alt="Custom Development Icon" />
          </div>
          <h2>Custom Web Development Services</h2>
          <p>Get tailored software solutions designed to meet the unique needs of your business and streamline your operations.</p>
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

      {/* Portfolio Section */}
      <Container className="py-5 portfolio-section">
        <animated.h2 style={fadeIn} className="text-center mb-4 typography-effect">Our Portfolio</animated.h2> {/* Added typography effect */}
        <Row>
          {[
            { image: youtube, title: 'YouTube Project', link: 'https://youtube-recreate.netlify.app/' },
            { image: admin, title: 'Admin Project', link: 'https://admin-recreate.netlify.app/' },
            { image: apple, title: 'Apple Project', link: 'https://jolly-torte-fece85.netlify.app/' }
          ].map((item, index) => (
            <Col md={4} key={index}>
              <animated.div style={{ ...cardAnimation, delay: index * 200 }}>
                <Card className="mb-4 border-0 shadow-sm rounded card-hover"> {/* Added hover effect */}
                  <Card.Img variant="top" src={item.image} className="card-img-top" />
                  <Card.Body>
                    <Card.Title className="card-title">{item.title}</Card.Title>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a> {/* Use anchor tag for external links */}
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="contact-us">
        <h2>Ready to get started?</h2>
        <p>Contact us now to discuss how we can help your business thrive.</p>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </div>
    </div>
  );
};

export default ServicePage;
