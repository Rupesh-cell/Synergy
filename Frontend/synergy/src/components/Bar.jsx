import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Login from "../assets/login.svg";
import "../scss/nav.scss";
import Logo from "../assets/logo-color.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Bar = () => {
  const expand = "sm";
  return (
    <>
      <div className="main  align-items-center">
        <Container className="contain">
          <Row className="cont d-flex align-items-center">
            <Col xs={12} sm={12} md={4} className="im">
              <img
                src={Logo}
                className="img d-flex align-items-center"
                alt="Logo"
              />
            </Col>
            <Col xs={12} sm={12} md={4} className="order-md-3 login d-flex">
              <img src={Login} alt="Login" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              className="order-md-2 d-flex align-items-center search-cont"
            >
              <Form inline className="search-container">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 search"
                />
                <Button className="btn search-btn" type="submit">
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="second-nav d-flex align-items-center">
        <Container>
          <Row className="d-flex align-items-center">
            <Col>
              <Navbar expand={expand} className="se">
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="nav2">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Services</Nav.Link>
                      <NavDropdown
                        title="Company Profile"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#action6">Products</Nav.Link>
                      <Nav.Link href="#action7">Certification</Nav.Link>
                      <Nav.Link href="#action9">About Us</Nav.Link>
                      <Nav.Link href="#action2">Contact Us</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Navbar>
            </Col>
            <Col className="d-flex align-items-center">
      
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Bar;
