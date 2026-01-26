import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import brands from "../data/brands";
import PageHeading from "./PageHeading";
import "../scss/brands.scss";

const Brands = () => {
  return (
    <section className="brands-section">
      <Container>
        <PageHeading eyebrow="Trusted Partners" title="Our Global Brands" />

        <Row className="g-4 mt-3">
          {brands.map((brand, index) => (
            <Col lg={3} md={4} sm={6} key={brand.id}>
              <motion.div
                className="brand-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="brand-logo-wrap">
                  <img src={brand.logo} alt={brand.name} />
                </div>
                <h5>{brand.name}</h5>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
