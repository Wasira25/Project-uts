import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 999,
      }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center fw-bold">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            height="40"
            className="me-2 rounded-circle"
          />
          PT Provis Garuda Services
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav-link-custom">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom CSS */}
      <style jsx="true">{`
        .nav-link-custom {
          font-weight: 500;
          margin-left: 10px;
          transition: color 0.3s ease;
        }
        .nav-link-custom:hover {
          color:rgb(18, 108, 243) !important;
        }
        .nav-link-custom.active {
          color:rgb(18, 74, 243) !important;
          border-bottom: 2px solidrgb(18, 55, 243);
        }
      `}</style>
    </Navbar>
  );
};

export default NavigationBar;
