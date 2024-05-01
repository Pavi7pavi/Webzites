import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './AboutPage.css'; // Import your CSS styles for further customization
import backgroundVideo from '../videos/v15.mp4'; // Import the background video
import image1 from '../images/img23.png'; // Import additional images
import image2 from '../images/img24.jpg';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Animate elements when the component mounts
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    });
    setIsVisible(true);
  }, []);

  return (
    <div className="about-page-container">
      <div className="hero-section">
        {/* Video Background */}
        <video className="video-bg" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="about-content">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          Welcome to Our Service Business
        </motion.h1>

        {isVisible && (
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ delay: 0.4 }}
            >
              We are dedicated to providing exceptional services to meet your
              needs and exceed your expectations. Our team is passionate about
              what we do and committed to delivering outstanding results.
            </motion.p>
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ delay: 0.6 }}
            >
              At Our Service Business, we believe in building strong relationships
              with our clients based on trust, integrity, and professionalism.
              Whether you're looking for web design, digital marketing, e-commerce
              solutions, or custom development, we're here to help you every step
              of the way.
            </motion.p>
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ delay: 0.8 }}
            >
              Contact us today to learn more about how we can assist you!
            </motion.p>
          </motion.div>
        )}

        <div className="unique-section">
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
        </div>

        <div className="additional-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses with cutting-edge solutions
            that drive growth, foster innovation, and create lasting impact.
            We aim to be at the forefront of technological advancements and
            industry trends to provide our clients with the best possible
            services and solutions.
          </p>
          {/* Image container 2 with custom shape */}
          <div className="image-container image-container-2">
            <motion.img
              src={image1}
              alt="Image 1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image1}
              alt="Image 1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
          </div>
          <h2>Our Vision</h2>
          <p>
            Our vision is to become a global leader in digital services, known
            for our unwavering commitment to excellence, integrity, and
            customer satisfaction. We aspire to transform businesses and
            industries through our innovative approach and strategic partnerships.
          </p>
          {/* Image container 1 with custom shape */}
          <div className="image-container image-container-1">
            <motion.img
              src={image1}
              alt="Image 1"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image1}
              alt="Image 1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
          </div>
          <h2>Core Values</h2>
          <ul>
            <li>Excellence</li>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Customer-Centricity</li>
          </ul>
          {/* Image container 3 with custom shape */}
          <div className="image-container image-container-3">
            <motion.img
              src={image1}
              alt="Image 1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image1}
              alt="Image 1"
              initial={{ opacity: 0, skewX: 30 }}
              animate={{ opacity: 1, skewX: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              initial={{ opacity: 0, skewY: -30 }}
              animate={{ opacity: 1, skewY: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
          </div>
          <h2>Our Team</h2>
          <p>
            Behind every successful project is a dedicated team of professionals.
            Our team consists of experts in various fields including design,
            development, marketing, and customer service. We work together
            seamlessly to deliver results that exceed expectations and drive
            success for our clients.
          </p>
          <div className="image-container">
            <motion.img
              src={image1}
              alt="Image 1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image1}
              alt="Image 1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 120 }}
            />
          </div>
        </div>
        {/* Add more sections and image containers with unique shapes as needed */}
      </div>
    </div>
  );
};

export default AboutPage;
