import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
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
            <Col className="but">
            <Button className="btn">Contact us</Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1>Trusted by 150+ enterprises, scale-ups and startups.</h1>
          <p>
          At Leapfrog, we have had the privilege of partnering with some of the most 
          innovative and forward-thinking companies in the tech industry. From big companies
           to startups that hope to be big one day, they trust us with the expertise and 
           support they need to bring their ideas to life.</p></Col>
        </Row>
    </Container>
  </div>
  </>;
};

export default Body;
