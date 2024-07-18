import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pic from "../assets/1.jpg";
import "../scss/body.scss";

const Body = () => {
  return <>
  <div className="bod">
    <Container>
        <Row>
            <Col sm={6} className="text-center">
            <h1>DIVE DEEPER WITH</h1>
            <h1>SYNERGY</h1>
            <h5>"Innovation Meets Excellence"</h5>
            <p>Synergy, a diving equipment leader since 2008, offers innovative, top-quality products. From a small warehouse to a state-of-the-art facility, we ensure every dive is safe, efficient, and 
                successful. Dive deeper with Synergy.</p>
            </Col>
            <Col sm={6} className="text-center1"><img src={Pic} alt="" /></Col>
        </Row>
    </Container>
  </div>
  </>;
};

export default Body;
