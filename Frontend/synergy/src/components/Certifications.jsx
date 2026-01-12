import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionWrapper from "./SectionWrapper";
import "../scss/certifications.scss";

const certifications = [
  {
    title: "ISO 9001",
    desc: "Quality Management Certification",
    img: "https://png.pngtree.com/png-clipart/20250514/original/pngtree-iso-9001-certified-company-logo-badge-vector-png-image_20971536.png",
  },
  {
    title: "CE Approved",
    desc: "European Standard Compliance",
    img: "https://th.bing.com/th?q=European+Standards+of+Safety+Icon&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-XA&cc=AE&setlang=en&adlt=strict&t=1&mw=247",
  },
  {
    title: "Safety Tested",
    desc: "Meets international diving safety standards",
    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  },
];

const Certifications = () => {
  return (
    <SectionWrapper>
      <section className="cert-section">
        <Container>
          <motion.div
            className="cert-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Certifications</h2>
            <p>Our products and processes comply with global quality and safety standards.</p>
          </motion.div>

          <Row className="justify-content-center">
            {certifications.map((cert, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div
                  className="cert-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className="cert-icon"
                    style={{ backgroundImage: `url(${cert.img})` }}
                  ></div>
                  <h5>{cert.title}</h5>
                  <p>{cert.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </SectionWrapper>
  );
};

export default Certifications;
