import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SectionWrapper from "./SectionWrapper";
import ContactInfoCard from "./ContactInfoCard"; // New reusable component
import "../scss/contact.scss";

const contactInfo = [
  { icon: "📍", title: "Location", desc: "Dubai, UAE" },
  { icon: "📞", title: "Phone", desc: "+971 55 123 4567" },
  { icon: "📧", title: "Email", desc: "info@synergydiving.com" },
];

const Contact = () => {
  return (
    <SectionWrapper>
      <section className="contact-section">
        <Container>
          {/* HEADER */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Contact Us</h2>
            <p>Reach out for inquiries, quotes, or support. We’re here to help!</p>
          </motion.div>

          <Row className="contact-body mt-4">
            {/* FORM */}
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="contact-form-wrapper"
              >
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message..." />
                  </Form.Group>

                  <Button className="btn submit-btn mt-2">Send Message</Button>
                </Form>
              </motion.div>
            </Col>

            {/* CONTACT INFO */}
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="contact-info-wrapper"
              >
                <Row>
                  {contactInfo.map((info, index) => (
                    <Col md={12} key={index} className="mb-3">
                      <ContactInfoCard
                        icon={info.icon}
                        title={info.title}
                        desc={info.desc}
                      />
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>

          {/* OPTIONAL: Embedded Google Map */}
          <Row className="mt-5">
            <Col>
              <div className="map-wrapper">
                <iframe
                  title="Synergy Diving Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.123456!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4345f4b7d3cd%3A0xabcdef123456!2sDubai!5e0!3m2!1sen!2sae!4v1699999999999"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "16px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </SectionWrapper>
  );
};

export default Contact;
