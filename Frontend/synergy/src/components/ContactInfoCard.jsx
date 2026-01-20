import React from "react";
import { motion } from "framer-motion";
import "../scss/contact.scss";

const ContactInfoCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      className="contact-info-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      
      <div className="contact-icon">{icon}</div>
      <div className="contact-text">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;
