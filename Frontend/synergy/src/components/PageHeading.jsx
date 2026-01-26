import { motion } from "framer-motion";
import "../scss/pageHeading.scss";

const PageHeading = ({ eyebrow, title, center = true }) => {
  return (
    <motion.div
      className={`page-heading ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {eyebrow && <span className="heading-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <div className="heading-divider" />
    </motion.div>
  );
};

export default PageHeading;
