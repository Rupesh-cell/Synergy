import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionWrapper from "./SectionWrapper";
import "../scss/services.scss";

const services = [
  {
    title: "Equipment Trading",
    desc: "High-quality commercial and industrial diving equipment sourced from globally trusted manufacturers.",
    img : "https://th.bing.com/th/id/OIP.f6CNAjNOkcYXE3yTWmiQHwHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    title: "Custom Solutions",
    desc: "Tailor-made diving systems and equipment packages engineered for offshore and subsea operations.",
    img: "https://tse2.mm.bing.net/th/id/OIP.Eu69TVU-2CbJmpmEQUbOQAHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Maintenance & Support",
    desc: "Certified inspection, maintenance, and technical support to ensure safety and long-term reliability.",
    img: "https://th.bing.com/th/id/R.79dbbd9388ef992f604ffb0686a27b68?rik=LpNpcZEYaIt6tA&pid=ImgRaw&r=0",
  },
];

const Services = () => {
  return (
    <SectionWrapper>
      <section className="services-section">
        <Container>
          {/* HEADER */}
          <motion.div
            className="services-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p>
              Professional diving services and equipment solutions designed for
              commercial, industrial, and offshore operations.
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <Row>
            {services.map((service, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div
                    className="service-image"
                    style={{ backgroundImage: `url(${service.img})` }}
                  ></div>

                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </SectionWrapper>
  );
};

export default Services;
