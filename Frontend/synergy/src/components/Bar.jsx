import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo-color.png";
import products from "../data/products";
import "../scss/nav.scss";

const Bar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = products
      .filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 6);

    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      className={`nav-wrapper ${scrolled ? "solid" : "transparent"}`}
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar expand="lg" className="main-nav">
        <Container>
          {/* LOGO */}
          <Navbar.Brand href="/" className="brand-left">
            <h3 className="brand-logo">Synergy</h3>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <Nav className="mx-auto nav-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/certifications">Certifications</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>

              {/* SEARCH */}
              <div className="search-box" ref={searchRef}>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="search-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                {results.length > 0 && (
                  <div className="search-dropdown">
                    {results.map((item) => (
                      <div
                        key={item.id}
                        className="search-item"
                        onClick={() => {
                          navigate(`/products/${item.id}`);
                          setQuery("");
                          setResults([]);
                        }}
                      >
                        <img src={item.images[0]} alt={item.name} />
                        <div>
                          <h6>{item.name}</h6>
                          <p>{item.shortDesc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Bar;
