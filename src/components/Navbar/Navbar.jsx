import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import navLogo from '../../assets/frugal-trail (3).svg';

import '../../styles/animations.css';
import './Navbar.css';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (item, e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection(item.toLowerCase());
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('hero');
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          onClick={handleLogoClick}
          className="d-flex align-items-center"
        >
          <div className="navbar-logo-wrapper">
            <img 
              src={navLogo} 
              alt="FrugalTrail Logo" 
              className="navbar-logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
              <Nav.Link 
                key={item}
                as={Link} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="nav-link-custom"
                onClick={(e) => handleNavClick(item === 'Home' ? 'hero' : item, e)}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;