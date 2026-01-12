import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Nav, Container, Offcanvas, Form } from "react-bootstrap";
import Logo from "../assets/logo-color.png";
import "../scss/nav.scss";

const Bar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`nav-wrapper ${scrolled ? "solid" : "transparent"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar expand="lg" sticky="top" className="main-nav">
        <Container>
          {/* LOGO */}
          <Navbar.Brand href="/home" className="brand-left">
            <span className="logo-text">SYNERGY</span>
          </Navbar.Brand>

          {/* TOGGLER */}
          <Navbar.Toggle aria-controls="main-offcanvas" />

          {/* OFFCANVAS */}
          <Navbar.Offcanvas id="main-offcanvas" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              {/* NAV LINKS */}
              <Nav className="mx-auto nav-links navbar-nav">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/certifications">Certifications</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>

              {/* SEARCH BOX */}
              <Form className="search-box mt-3 mt-lg-0">
                <div className="search-wrapper">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="search-input"
                  />
                </div>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Bar;
