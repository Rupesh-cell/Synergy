import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import services from "../data/services";
import "../scss/services.scss";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <Container>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <Row className="g-4 mt-2">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={service.id}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate(`/services/${service.id}`)}
              >
                {/* Replace background div with an actual image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                />

                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.short}</p>
                  <span className="service-link">Explore →</span>
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