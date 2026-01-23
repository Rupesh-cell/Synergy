import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import products from "../data/products";
import "../scss/nav.scss";

const Bar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();
  const inputRef = useRef();
  const containerRef = useRef();

  // Load recent searches
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecent(stored);
  }, []);

  const saveRecent = (term) => {
    const updated = [term, ...recent.filter((r) => r !== term)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const deleteRecent = (term) => {
    const updated = recent.filter((r) => r !== term);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const highlight = (text) => {
    if (!query || !text) return text || "";
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  const handleSearch = (value) => {
    setQuery(value);
    setOpen(true);
    setLoading(true);
    setActiveIndex(-1);

    if (!value.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const filtered = products.filter((p) =>
        [p.name, p.sku, p.description]
          .join(" ")
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      setResults(filtered.slice(0, 6));
      setLoading(false);
    }, 200);
  };

  const handleSelect = (product) => {
    saveRecent(product.name);
    setQuery("");
    setResults([]);
    setOpen(false);
    setExpanded(false);
    navigate(`/products/${product.id}`);
  };

  const handleKeyDown = (e) => {
    if (!results.length && !recent.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % (results.length || recent.length));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) =>
        prev <= 0 ? (results.length || recent.length) - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        if (query && results.length) handleSelect(results[activeIndex]);
        else if (!query && recent.length) setQuery(recent[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Click outside close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="main-navbar"
      expanded={expanded}
      collapseOnSelect
    >
      <Container ref={containerRef}>
        <Navbar.Brand onClick={() => { navigate("/"); setExpanded(false); }}>
          SYNERGY
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link onClick={() => { navigate("/"); setExpanded(false); }}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("/products"); setExpanded(false); }}>
              Products
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("/services"); setExpanded(false); }}>
              Services
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("/rentals"); setExpanded(false); }}>
              Rentals
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("/about"); setExpanded(false); }}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => { navigate("/contact"); setExpanded(false); }}>
              Contact
            </Nav.Link>
          </Nav>

          {/* SEARCH */}
          <div className={`search-box ${open ? "open" : ""}`}>
            <InputGroup>
              <Form.Control
                ref={inputRef}
                type="text"
                placeholder="Search name or SKU..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setOpen(true)}
                onKeyDown={handleKeyDown}
              />
              <InputGroup.Text>
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  <i className="bi bi-search"></i>
                )}
              </InputGroup.Text>
            </InputGroup>

            {/* DROPDOWN */}
            {open && (
              <div className="search-dropdown">
                {!query && recent.length > 0 && (
                  <>
                    <p className="dropdown-title">Recent Searches</p>
                    {recent.map((term, i) => (
                      <div key={i} className="search-item recent-item">
                        <span onClick={() => setQuery(term)}>{term}</span>
                        <i
                          className="bi bi-x"
                          onClick={() => deleteRecent(term)}
                          style={{ marginLeft: "auto", cursor: "pointer" }}
                        ></i>
                      </div>
                    ))}
                  </>
                )}

                {query && !loading && results.length === 0 && (
                  <div className="search-item empty">No items found</div>
                )}

                {query &&
                  results.map((item, index) => (
                    <div
                      key={item.id}
                      className={`search-item ${index === activeIndex ? "active" : ""}`}
                      onClick={() => handleSelect(item)}
                      dangerouslySetInnerHTML={{
                        __html: `
                          <img src="${item.images[0]}" />
                          <div>
                            <h6>${highlight(item.name)}</h6>
                            <small>SKU: ${highlight(item.sku)}</small>
                            <p>${highlight(item.description.slice(0, 40))}...</p>
                          </div>
                        `,
                      }}
                    />
                  ))}
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Bar;
