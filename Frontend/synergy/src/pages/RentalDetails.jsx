import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import { motion } from "framer-motion";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import rentals from "../data/rentals";
import "../scss/rentalDetails.scss";

const RentalDetails = () => {
  const { id } = useParams();
  const rental = rentals.find((r) => r.id === id);

  if (!rental) return <h2 className="text-center mt-5">Rental not found</h2>;

  return (
    <>
      <Bar />
      <section className="rental-details">
        <Container>
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/rentals" }}>
              Rentals
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{rental.title}</Breadcrumb.Item>
          </Breadcrumb>

          <Row className="align-items-center">
            <Col md={6}>
              <motion.img
                src={rental.image}
                alt={rental.title}
                className="rental-main-img"
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
                <h2>{rental.title}</h2>
                <p className="rental-desc">{rental.description}</p>

                <ul className="rental-features">
                  {rental.features.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>

                <div className="rental-actions">
                  <Button
                    href="https://wa.me/971551234567"
                    target="_blank"
                    className="whatsapp-btn"
                  >
                    📲 Request Rental Quote
                  </Button>

                  <Button variant="outline-primary" as={Link} to="/contact">
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

export default RentalDetails;
