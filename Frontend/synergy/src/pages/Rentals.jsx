import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import rentals from "../data/rentals";
import "../scss/rentals.scss";
import Bar from "../components/Bar";

const Rentals = () => {
  const navigate = useNavigate();

  return (
    <>
    <Bar/>
    <section className="rentals-section">
      <Container>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Rentals
        </motion.h2>

        <Row className="g-4 mt-2">
          {rentals.map((item, index) => (
            <Col lg={4} md={6} key={item.id}>
              <motion.div
                className="rental-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate(`/rentals/${item.id}`)}
              >
                <div
                  className="rental-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="rental-overlay" />
                <div className="rental-content">
                  <h4>{item.title}</h4>
                  <p>{item.short}</p>
                  <span className="rental-link">Explore →</span>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Rentals;
