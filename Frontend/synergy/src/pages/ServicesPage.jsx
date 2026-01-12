import React from "react";
import PageTransition from "../components/PageTransition";
import Bar from "../components/Bar";
import Services from "../components/Services";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <PageTransition>
      <Bar />
      <Services />
      <Footer />
    </PageTransition>
  );
};

export default ServicesPage;