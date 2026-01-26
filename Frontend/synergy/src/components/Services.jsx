import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import services from "../data/services";
import PageHeading from "./PageHeading";
import "../scss/services.scss";

const Services = () => {
  return (
    <section className="services-page">
      <Container>
        <PageHeading eyebrow="What We Do" title="Our Services" />

        <p className="services-subtitle text-center">
          End-to-end subsea solutions engineered for safety, performance, and
          reliability.
        </p>

        <Row className="g-4 mt-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={service.id}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* IMAGE */}
                <div className="service-img-wrap">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay" />
                  <Badge className="service-badge"></Badge>
                </div>

                {/* CONTENT */}
                <div className="service-body">
                  <h4>{service.title}</h4>
                  <p className="service-desc">{service.short}</p>

                  <ul className="service-features">
                    {service.features?.slice(0, 3).map((item, i) => (
                      <li key={i}>✔ {item}</li>
                    ))}
                  </ul>

                  <div className="service-footer">
                    <span className="service-status">Available Worldwide</span>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
