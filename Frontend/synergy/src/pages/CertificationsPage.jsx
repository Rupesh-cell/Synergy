import React from "react";
import PageTransition from "../components/PageTransition";
import Bar from "../components/Bar";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

const CertificationsPage = () => {
  return (
    <PageTransition>
      <Bar />
      <Certifications />
      <Footer />
    </PageTransition>
  );
};

export default CertificationsPage;