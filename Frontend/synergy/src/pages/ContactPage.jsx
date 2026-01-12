import React from "react";
import PageTransition from "../components/PageTransition";
import Bar from "../components/Bar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <PageTransition>
      <Bar />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default ContactPage;