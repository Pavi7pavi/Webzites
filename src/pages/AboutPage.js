import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './AboutPage.css';
import backgroundVideo from '../videos/v15.mp4';
import image1 from '../images/img4.png';
import image2 from '../images/img19.jpg';
import image3 from '../images/img28.png';
import image4 from '../images/img27.png';
import image5 from '../images/img9.jpg';
import image6 from '../images/img30.jpg';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  };

  useEffect(() => {
    setIsVisible(true);

    ScrollReveal().reveal('.scroll-reveal', {
      delay: 300,
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
  }, []);

  return (
    <div>
<Helmet>
  <meta charSet="utf-8" />
  <title>About WebZites - Professional Web Development Services</title> {/* Updated title */}
  <link rel="canonical" href="https://www.mywebzites.com/about" />
  <meta name="description" content="Learn about WebZites' professional web development services, custom web design, and digital marketing solutions. Discover our mission, vision, and dedicated team. Contact us today!" /> {/* Updated meta description */}
  <meta name="keywords" content="professional web development services, custom web design, digital marketing solutions, mission, vision, dedicated team, contact us" /> {/* Updated keywords */}
  <meta name="author" content="WebZites" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Meta tags for videos */}
  <meta property="og:video" content="https://www.mywebzites.com/videos/v15.mp4" />
  <meta property="og:video:secure_url" content="https://www.mywebzites.com/videos/v15.mp4" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="1920" />
  <meta property="og:video:height" content="1080" />

  {/* Meta tags for images */}
  <meta property="og:image" content="https://www.mywebzites.com/images/img4.png" />
  <meta property="og:image:secure_url" content="https://www.mywebzites.com/images/img4.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="600" />

  <meta property="og:image" content="https://www.mywebzites.com/images/img19.jpg" />
  <meta property="og:image:secure_url" content="https://www.mywebzites.com/images/img19.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="600" />

  {/* Repeat the above pattern for all images */}
</Helmet>



      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center hero-section1-wrapper"
      >
        <Container fluid className="px-0 hero-section1 position-relative d-flex justify-content-center align-items-center">
          <video className="video-bg" autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="p-5 hero-content"
          >
           <h1 className="text-white display-3 fw-bold mb-4">Discover Professional Web Development Services</h1>
            <p className="text-white lead mb-4">Find out how WebZites provides professional web development services, custom web design, and digital marketing solutions. Learn about our mission, vision, and dedicated team. Contact us today!</p>
           
            <div className="scroll-down mt-4">
              <i className="bi bi-arrow-down"></i>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      <div className="about-content">
        {isVisible && (
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          ></motion.div>
        )}

        <section className="unique-section">
          <div className="unique-content">
            <h2 className="unique-title">What Makes Us Unique</h2>
            <ul className="unique-list">
              <motion.li
                className="unique-item"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: 1 }}
              >
                Personalized Approach
              </motion.li>
              <motion.li
                className="unique-item"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: 1.2 }}
              >
                Cutting-Edge Technology
              </motion.li>
              <motion.li
                className="unique-item"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: 1.4 }}
              >
                Exceptional Customer Service
              </motion.li>
              <motion.li
                className="unique-item"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ delay: 1.6 }}
              >
                Sustainability Initiatives
              </motion.li>
            </ul>
          </div>
        </section>

        <section className="additional-content">
          <h2>Our Mission</h2>
          <p>
            At WebZites, our mission is to empower businesses with cutting-edge web development services and digital marketing solutions that drive growth, foster innovation, and create lasting impact. We aim to be at the forefront of technological advancements and industry trends to provide our clients with the best possible services and solutions, including website design and branding, mobile web design, and web application development.
          </p>
          <div className="image-container image-container-2">
            <motion.img
              src={image1}
              alt="Web development project 1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Digital marketing project"
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
          </div>

          <h2>Our Vision</h2>
          <p>
            Our vision is to become a global leader in web development and digital marketing services, known for our unwavering commitment to excellence, integrity, and customer satisfaction. We aspire to transform businesses and industries through our innovative approach and strategic partnerships, focusing on custom web development services, mobile friendly website design, and ecommerce app development company solutions.
          </p>
          <div className="image-container image-container-1">
            <motion.img
              src={image3}
              alt="Custom web design project"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image4}
              alt="SEO services project"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
          </div>

          <h2>Core Values</h2>
          <ul className="core-values-list">
            <li>Excellence</li>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Customer-Centricity</li>
          </ul>
          <div className="image-container image-container-3">
            <motion.img
              src={image5}
              alt="Team collaboration"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image6}
              alt="Successful project"
              initial={{ opacity: 0, skewX: 30 }}
              animate={{ opacity: 1, skewX: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
          </div>

          <h2>Our Team</h2>
          <p>
            Behind every successful project is a dedicated team of professionals who are passionate about their work. Meet our talented team members who bring expertise, creativity, and enthusiasm to every project we undertake. Connect with us on our <a href="/contact">Contact</a> page for more details. Whether you're a small business seeking website developers for small business solutions or a large enterprise looking for comprehensive web design SEO strategies, we're here to help.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
