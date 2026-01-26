import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../scss/aboutPage.scss";
import Bar from "../components/Bar";

const leadership = [
  {
    id: 1,
    name: "Eng. Michael Turner",
    role: "Founder & Managing Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    desc: "20+ years in commercial diving systems, offshore operations, and subsea engineering.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Operations Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    desc: "Expert in logistics, safety compliance, and large-scale offshore project execution.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Technical Director",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    desc: "Leads equipment innovation, testing, and certification programs.",
  },
];

const team = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "Senior Diving Technician",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 2,
    name: "Maria Lopez",
    role: "Subsea Engineer",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 3,
    name: "John Carter",
    role: "Field Supervisor",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Fatima Noor",
    role: "Quality & Safety Officer",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    id: 5,
    name: "Ryan Brooks",
    role: "Equipment Specialist",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: 6,
    name: "Elena Petrova",
    role: "Project Coordinator",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

const certifications = [
  "/certs/iso9001.png",
  "/certs/iso14001.png",
  "/certs/iso45001.png",
  "/certs/imca.png",
  "/certs/adci.png",
  "/certs/dnv.png",
];

const AboutPage = () => {
  return (
    <>
      <Bar />

      {/* HERO */}
      <section className="about-hero">
        <div className="overlay" />
        <Container>
          <motion.div
            className="hero-content text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1>About Synergy</h1>
            <p>
              Engineering excellence beneath the surface — delivering safety,
              reliability, and innovation to the global diving industry since
              2008.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* STORY */}
      <section className="about-story">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <motion.img
                src="https://images.unsplash.com/photo-1529473814998-077b4fec6770?auto=format&fit=crop&w=1200&q=80"
                alt="Synergy Operations"
                className="story-img"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </Col>

            <Col md={6}>
              <motion.div
                className="story-content"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>Our Story</h2>
                <p>
                  Founded in 2008, Synergy began as a specialized provider of
                  commercial diving equipment and subsea solutions for offshore
                  energy projects. Today, we serve clients across marine
                  construction, oil & gas, ports, defense, and underwater
                  inspection sectors.
                </p>
                <p>
                  Our reputation is built on technical excellence, certified
                  safety standards, and long-term partnerships with global
                  contractors.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* OWNERSHIP */}
      <section className="about-ownership">
        <Container>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ownership & Governance
          </motion.h2>

          <Row className="justify-content-center mt-4">
            <Col md={10}>
              <motion.div
                className="ownership-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <p>
                  Synergy is a privately owned engineering and manufacturing
                  company, led by industry professionals with decades of
                  experience in commercial diving systems and subsea
                  technologies.
                </p>
                <p>
                  Our leadership maintains direct involvement in operations,
                  product development, and quality assurance — ensuring every
                  project meets international safety and performance standards.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* LEADERSHIP */}
      <section className="about-leadership">
        <Container>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Leadership Team
          </motion.h2>

          <Row className="g-4 mt-3">
            {leadership.map((person, i) => (
              <Col md={4} key={person.id}>
                <motion.div
                  className="leader-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={person.image} alt={person.name} />
                  <h5>{person.name}</h5>
                  <span>{person.role}</span>
                  <p>{person.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <Container>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>

          <Row className="g-4 mt-3">
            {team.map((member, i) => (
              <Col md={4} sm={6} key={member.id}>
                <motion.div
                  className="team-card photo"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img src={member.image} alt={member.name} />
                  <h6>{member.name}</h6>
                  <span>{member.role}</span>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CERTIFICATIONS SLIDER */}
      <section className="about-certifications">
        <Container>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Certifications & Compliance
          </motion.h2>

          <div className="cert-slider">
            <div className="cert-track">
              {[...certifications, ...certifications].map((logo, i) => (
                <div className="cert-item" key={i}>
                  <img src={logo} alt="Certification" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
