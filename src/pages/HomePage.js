import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { useViewportScroll, useTransform } from 'framer-motion';
import './HomePage.css';
import backgroundVideo from '../videos/v7.mp4';
import webDesignVideo from '../videos/v16.mp4';
import developmentVideo from '../videos/v5.mp4';
import seoVideo from '../videos/v2.mp4';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1], [0, -1]);

  useEffect(() => {
    return scrollY.onChange(() => y.get());
  }, [scrollY, y]);

  return (
    <div>
     <Helmet>
  <meta charSet="utf-8" />
  <title>WebZites - Professional Web Solutions for Your Business</title>
  <link rel="canonical" href="https://www.mywebzites.com/home" />
  <meta name="description" content="WebZites offers comprehensive web solutions including website design, digital marketing, SEO optimization, and more. Enhance your online presence with our expert services." />
  <meta name="keywords" content="website design and branding, website design and digital marketing, mobile web design, website designing business, website developers for small business, web application development, website building business, mobile friendly website design, ecommerce app development company, custom web development services, wordpress website maintenance services, wordpress web design company, web design SEO, website and app development company" />
  <meta name="author" content="WebZites" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Meta tags for videos */}
  <meta property="og:video" content="https://www.mywebzites.com/videos/v7.mp4" />
  <meta property="og:video:secure_url" content="https://www.mywebzites.com/videos/v7.mp4" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="1920" />
  <meta property="og:video:height" content="1080" />

  <meta property="og:video" content="https://www.mywebzites.com/videos/v16.mp4" />
  <meta property="og:video:secure_url" content="https://www.mywebzites.com/videos/v16.mp4" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="1920" />
  <meta property="og:video:height" content="1080" />

  <meta property="og:video" content="https://www.mywebzites.com/videos/v5.mp4" />
  <meta property="og:video:secure_url" content="https://www.mywebzites.com/videos/v5.mp4" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="1920" />
  <meta property="og:video:height" content="1080" />

  <meta property="og:video" content="https://www.mywebzites.com/videos/v2.mp4" />
  <meta property="og:video:secure_url" content="https://www.mywebzites.com/videos/v2.mp4" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="1920" />
  <meta property="og:video:height" content="1080" />
</Helmet>

      <animated.div style={{ y }} ref={ref} className="text-center hero-section-wrapper">
        <Container fluid className="px-0 hero-section position-relative d-flex justify-content-center align-items-center">
          <video className="video-bg" autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <animated.div style={fadeIn} className="p-5 hero-content">
            <h1 className="text-white display-3 fw-bold mb-4">Website Design and Branding Solutions</h1>
            <p className="text-white lead mb-4">Create stunning websites that drive business success with our comprehensive services, including website design, branding, and digital marketing.</p>
            <div className="scroll-down mt-4">
              <i className="bi bi-arrow-down"></i>
            </div>
          </animated.div>
        </Container>
      </animated.div>

      <ScrollIndicator />

      <Container className="py-5 services-section">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {[
            { title: 'Web Design & Branding', description: "Modern and responsive web design tailored to your business needs. Our website design and branding services ensure your online presence is unique and impactful.", video: webDesignVideo },
            { title: 'Development & Maintenance', description: "Full-stack development services to build interactive and scalable applications. We also offer WordPress website maintenance services to keep your site running smoothly.", video: developmentVideo },
            { title: 'SEO Optimization', description: "Enhance your online presence and increase traffic with optimized SEO strategies. Our web design SEO services help you rank higher and attract more visitors.", video: seoVideo }
          ].map(({ title, description, video }, index) => (
            <Col md={4} key={title}>
              <animated.div style={{ ...fadeIn, delay: index * 200 }}>
                <Card className="mb-4 service-card border-0 shadow">
                  <div className="video-wrapper">
                    <video autoPlay muted loop>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="h5 text-primary">{title}</Card.Title>
                    <Card.Text className="text-muted">{description}</Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="py-5 additional-content-section">
        <Row className="mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <animated.h2 style={fadeIn} className="text-center mb-4 typography-effect">Why Choose Us?</animated.h2>
            <animated.p style={fadeIn} className="text-center lead scroll-animation">We are committed to delivering high-quality website solutions that align with your business goals. Our team of experts ensures that your online presence stands out from the competition.</animated.p>
          </Col>
        </Row>

        <Container fluid className="py-5 additional-content-section justify-content-center">
          <Row className="mb-5 px-md-5">
            <Col md={6} className="d-flex justify-content-center">
              <animated.div style={fadeIn} className="section-content bg-primary-gradient text-center rounded p-4">
                <h3 className="section-title mb-3 typography-effect">Our Approach</h3>
                <p className="section-text scroll-animation">We take a collaborative approach to every project, working closely with our clients to understand their unique needs and preferences. Our iterative process ensures that you are involved at every stage of development.</p>
              </animated.div>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <animated.div style={fadeIn} className="section-content bg-secondary-gradient text-center rounded p-4">
                <h3 className="section-title mb-3 typography-effect">Our Team</h3>
                <p className="section-text scroll-animation">Our team consists of experienced professionals in web design, development, and digital marketing. We are passionate about what we do and dedicated to delivering exceptional results for our clients.</p>
              </animated.div>
            </Col>
          </Row>
        </Container>

        <Container className="py-5 seo-section">
          <animated.h2 style={fadeIn} className="text-center mb-4 typography-effect">SEO Optimization Services</animated.h2>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <animated.p style={fadeIn} className="text-center lead scroll-animation">Our SEO optimization services are designed to help your website rank higher in search engine results, driving more organic traffic to your site. With a focus on keyword research, on-page optimization, and off-page strategies, we'll work to improve your website's visibility and attract more potential customers.</animated.p>
            </Col>
          </Row>
        </Container>

        <Container className="py-5 faq-section">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="faq">
                <h4>What services do you offer?</h4>
                <p>We offer a wide range of services including website design and branding, web application development, custom web development services, mobile-friendly website design, and SEO optimization.</p>
              </div>
              <div className="faq">
                <h4>Do you provide WordPress maintenance services?</h4>
                <p>Yes, we provide comprehensive WordPress website maintenance services to ensure your site is always up-to-date and running smoothly.</p>
              </div>
              <div className="faq">
                <h4>How can you help small businesses?</h4>
                <p>We specialize in helping small businesses with our tailored website developers for small business services. We understand the unique challenges faced by small businesses and offer solutions to help you grow online.</p>
              </div>
              <div className="faq">
                <h4>Do you offer mobile web design?</h4>
                <p>Yes, we offer mobile web design and mobile-friendly website design services to ensure your website looks great and functions well on all devices.</p>
              </div>
              <div className="faq">
                <h4>What is your approach to web design and development?</h4>
                <p>We take a collaborative approach to every project, working closely with our clients to understand their unique needs and preferences. Our iterative process ensures that you are involved at every stage of development.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <div className="indicator"></div>
    </div>
  );
};

export default HomePage;
