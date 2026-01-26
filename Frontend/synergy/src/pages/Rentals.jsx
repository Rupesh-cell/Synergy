import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import rentalCategories from "../data/rentalCategories";
import PageHeading from "../components/PageHeading";
import "../scss/rentals.scss";

const Rentals = () => {
  const navigate = useNavigate();

  return (
    <>
      <Bar />

      <section className="rentals-section">
        <Container>
          <PageHeading eyebrow="Subsea Fleet" title="Rental Equipment" />

          <Row className="g-4 mt-3">
            {rentalCategories.map((cat, index) => (
              <Col lg={4} md={6} key={cat.id}>
                <motion.div
                  className="rental-category-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => navigate(`/rentals/${cat.id}`)}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="rental-category-img"
                  />

                  <div className="rental-category-overlay" />

                  <div className="rental-category-content">
                    <h4>{cat.title}</h4>
                    <p>{cat.short}</p>
                    <span>Explore →</span>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Rentals;
