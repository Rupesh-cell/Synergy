import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../scss/nav.scss";
import Logo from "../assets/logo-color.png";

const Bar = () => {
  return (
    <div className="main">
      <Container>
        <Row className="cont">
          <Col className="nav-container">
            <img src={Logo} alt="" />
          </Col>
          <Col>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
              </Row>
            </Form>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bar;
