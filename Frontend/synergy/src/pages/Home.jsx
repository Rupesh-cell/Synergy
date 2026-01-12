import React from "react";
import PageTransition from "../components/PageTransition";
import Bar from "../components/Bar";
import Body from "../components/Body";
import Products from "../components/Products";
import Services from "../components/Services";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <PageTransition>
      <Bar />
      <Body />
      <Products />
      <Services />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default Home;