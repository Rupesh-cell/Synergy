import React from "react";
import PageTransition from "../components/PageTransition";
import Bar from "../components/Bar";
import About from "../components/About";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <PageTransition>
      <Bar />
      <About />
      <Footer />
    </PageTransition>
  );
};

export default ServicesPage;