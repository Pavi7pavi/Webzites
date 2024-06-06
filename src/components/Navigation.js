import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Color logo - no background.png';
import './Navigation.css'; // Import your custom CSS for styling

const Navigation = () => {

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll behavior
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-navbar sticky-top">
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/" onClick={scrollToTop}>
            <img
              src={logo}
              width="150"
              height="40"
              className="d-inline-block align-top logo"
              alt="WebZites logo"
            />
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/" onClick={scrollToTop}>
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" onClick={scrollToTop}>
              <Nav.Link className="nav-link">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services" onClick={scrollToTop}>
              <Nav.Link className="nav-link">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" onClick={scrollToTop}>
              <Nav.Link className="nav-link">Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
