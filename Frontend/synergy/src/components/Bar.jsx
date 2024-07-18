import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../scss/nav.scss";
import Logo from "../assets/logo-color.png";

const Bar = () => {
  return (
    <div className="main">
      <Container className="contain">
        <Row className="cont">
          <Col className="nav-container">
            <img src={Logo} alt="" />
          </Col>
          <Col className="search-cont">
            <Form inline className="search-container">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 search"
                />
              </Col>
            </Form>
          </Col>

          <Col className="but">
            <Button className="btn">Contact us</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bar;
