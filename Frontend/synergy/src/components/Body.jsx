import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Pic from "../assets/1.png";
import "../scss/body.scss";

const Body = () => {
  return (
    <>
      <div className="bod">
        <Container>
          <Row>
            <Col sm={6} className="text-center">
              <h1 className="h1">SynergyUnilok:</h1>
              <h1>Connecting Innovation with Excellence!</h1>
              <p>
                Synergy, a diving equipment leader since 2008, offers
                innovative, top-quality products. From a small warehouse to a
                state-of-the-art facility, we ensure every dive is safe,
                efficient, and successful.
              </p>
              <Col className="but">
              <Button className="btn">Get Quotations</Button>
            </Col>
            </Col>
           
            <Col sm={6} className="text-center1">
            <img src={Pic} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Body;
