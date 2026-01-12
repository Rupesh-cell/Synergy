import React from "react";
import { motion } from "framer-motion";
import "../scss/about.scss";

const AboutStat = ({ number, label, icon }) => {
  return (
    <motion.div
      className="about-stat"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="stat-icon">{icon}</div>
      <h4 className="stat-number">{number}</h4>
      <p className="stat-label">{label}</p>
    </motion.div>
  );
};

export default AboutStat;
