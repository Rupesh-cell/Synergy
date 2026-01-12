import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../scss/body.scss";

const Body = () => {
  return (
    <section className="bod">
      <div className="overlay"></div>

      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col md={9} lg={8}>
            <motion.h1
              className="headline"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              DIVE DEEPER WITH
            </motion.h1>

            <motion.h1
              className="brand"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2 }}
            >
              SYNERGY
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              Since 2008, Synergy has delivered world-class diving equipment and
              subsea solutions — engineered for safety, precision, and
              performance in the harshest underwater environments.
            </motion.p>

            <motion.div
              className="cta"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.6 }}
            >
              <Button className="primary-btn">Get Quotation</Button>
              <Button variant="outline-light" className="secondary-btn">
                Our Products
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Body;
