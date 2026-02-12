import React from "react";
import PageTransition from "../components/PageTransition";
import Bar from "../components/Bar";
import Body from "../components/Body";
import FeaturedItems from "../components/FeaturedItems"; // <--- updated
import Services from "../components/Services";
import About from "../components/About";
import Rentals from "../pages/Rentals";
import Contact from "../components/Contact";
import BrandsSection from "../components/BrandsSection";
import Footer from "../components/Footer";
import AIChatWidget from "../components/AIChatWidget";
const Home = () => {
  return (
    <PageTransition>
      <Bar />
      <Body />
      <FeaturedItems />
      <Services />
      <BrandsSection/>
      <About />
      <Contact />
      <AIChatWidget/>
      <Footer />
    </PageTransition>
  );
};

export default Home;
