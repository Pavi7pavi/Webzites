import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer'; // Import Footer with a unique name
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WebZites - Your Trusted Partner in Website Services</title>
        <meta name="description" content="WebZites offers expert website design, development, e-commerce solutions, SEO, and maintenance services. Contact us today!" />
        <meta name="keywords" content="website design, website development, e-commerce solutions, SEO, website maintenance, WebZites" />
        <link rel="canonical" href="https://www.mywebzites.com/" />
      </Helmet>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
