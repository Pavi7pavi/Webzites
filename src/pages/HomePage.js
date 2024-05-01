import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'; 
import './HomePage.css';  
import backgroundVideo from '../videos/v7.mp4'; 

// Import your videos
import webDesignVideo from '../videos/v16.mp4';
import developmentVideo from '../videos/v5.mp4';
import seoVideo from '../videos/v2.mp4';
import project1Image from '../images/img22.png';
import project2Image from '../images/img18.jpg';
import project3Image from '../images/img12.jpg';

const HomePage = () => {
  // Define animations
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  const cardAnimation = useSpring({
    from: { transform: 'scale(0.9)' },
    to: { transform: 'scale(1)' },
    config: { tension: 170, friction: 14 },
    delay: 500,
  });

  return (
    <div>
      {/* Hero Section */}
      <Container fluid className="px-0 hero-section position-relative">
        <video className="video-bg" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <animated.div style={fadeIn} className="text-center p-5 hero-content position-absolute top-50 start-50 translate-middle">
          <h1 className="text-white display-4 fw-bold">Welcome to Your Web Solutions</h1>
          <p className="text-white lead">Create stunning websites that drive business success.</p>
          <Button variant="outline-light" className="btn-lg mt-4">Get Started</Button>
        </animated.div>
      </Container>

      {/* Services Section */}
      <Container className="py-5 services-section">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {[
            { title: 'Web Design', description: "Modern and responsive web design tailored to your business needs.", video: webDesignVideo },
            { title: 'Development', description: "Full-stack development services to build interactive and scalable applications.", video: developmentVideo },
            { title: 'SEO Optimization', description: "Enhance your online presence and increase traffic with optimized SEO strategies.", video: seoVideo }
          ].map(({ title, description, video }, index) => (
            <Col md={4} key={title}>
              <animated.div style={cardAnimation}>
                <Card className="mb-4 service-card border-0 shadow-sm rounded">
                  <div className="video-wrapper">
                    <video autoPlay muted loop>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="h5">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* SEO Optimization Section */}
      <Container className="py-5 seo-section bg-light">
        <h2 className="text-center mb-4">SEO Optimization Services</h2>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <p className="text-center lead">Our SEO optimization services are designed to help your website rank higher in search engine results, driving more organic traffic to your site. With a focus on keyword research, on-page optimization, and off-page strategies, we'll work to improve your website's visibility and attract more potential customers.</p>
            <Button variant="outline-primary" className="d-block mx-auto">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Portfolio Section */}
      <Container className="py-5 portfolio-section">
        <h2 className="text-center mb-4">Our Portfolio</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4 border-0 shadow-sm rounded">
              <Card.Img variant="top" src={project1Image} />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                  A brief description of the project and the services provided.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 border-0 shadow-sm rounded">
              <Card.Img variant="top" src={project2Image} />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                  A brief description of the project and the services provided.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 border-0 shadow-sm rounded">
              <Card.Img variant="top" src={project3Image} />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                  A brief description of the project and the services provided.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    
    </div>
  );
};

export default HomePage;
