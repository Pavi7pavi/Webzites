import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Color logo - no background.png';
import './Navigation.css'; // Import your custom CSS for styling

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-navbar sticky-top"> {/* Add sticky-top class */}
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="150"
              height="40"
              className="d-inline-block align-top logo"
              alt="WebZites logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/" className="nav-link-container">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" className="nav-link-container">
              <Nav.Link className="nav-link">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services" className="nav-link-container">
              <Nav.Link className="nav-link">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" className="nav-link-container">
              <Nav.Link className="nav-link">Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
