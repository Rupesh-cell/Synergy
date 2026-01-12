import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutStat from "./AboutStat"; // New component for stats/highlights
import "../scss/about.scss";

const stats = [
  { id: 1, number: "15+", label: "Years of Excellence", icon: "🏆" },
  { id: 2, number: "500+", label: "Dives Supported", icon: "🤿" },
  { id: 3, number: "100%", label: "Safety Certified", icon: "✔️" },
];

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          {/* IMAGE */}
          <Col md={6}>
            <motion.div
              className="about-img-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://th.bing.com/th/id/R.d2215000530f1369b4332d466f0504d5?rik=CbUiZ4v4ISwi3Q&pid=ImgRaw&r=0"
                alt="About Synergy"
                className="about-img"
              />
            </motion.div>
          </Col>

          {/* TEXT */}
          <Col md={6}>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>About Synergy</h2>
              <p>
                Synergy has been a leading provider of professional diving
                equipment and solutions since 2008. From commercial diving to
                offshore operations, we deliver safety, reliability, and
                innovation. Our state-of-the-art equipment ensures every dive
                is efficient, safe, and successful.
              </p>
              <p>
                Committed to quality and customer satisfaction, we support
                divers and organizations worldwide with best-in-class products
                and services.
              </p>

              {/* STATS COMPONENTS */}
              <Row className="about-stats mt-4">
                {stats.map((stat) => (
                  <Col key={stat.id} xs={4}>
                    <AboutStat number={stat.number} label={stat.label} icon={stat.icon} />
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
