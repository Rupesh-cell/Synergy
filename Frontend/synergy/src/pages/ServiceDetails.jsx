import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import { motion } from "framer-motion";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import services from "../data/services";
import "../scss/serviceDetails.scss";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) return <h2 className="text-center mt-5">Service not found</h2>;

  return (
    <>
      <Bar />
      <section className="service-details">
        <Container>
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/services" }}>
              Services
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{service.title}</Breadcrumb.Item>
          </Breadcrumb>

          <Row className="align-items-center">
            <Col md={6}>
              <motion.img
                src={service.image}
                alt={service.title}
                className="service-main-img"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </Col>

            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2>{service.title}</h2>
                <p className="service-desc">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>

                <div className="service-actions">
                  <Button
                    href="https://wa.me/971551234567"
                    target="_blank"
                    className="whatsapp-btn"
                  >
                    📲 Request Quote
                  </Button>

                  <Button
                    variant="outline-primary"
                    as={Link}
                    to="/contact"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetails;
