import React from "react";
import PageTransition from "../components/PageTransition";
import Bar from "../components/Bar";
import Products from "../components/Products";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <PageTransition>
      <Bar />
      <Products />
      <Footer />
    </PageTransition>
  );
};

export default ProductsPage;