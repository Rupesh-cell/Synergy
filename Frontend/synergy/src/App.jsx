import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RentalProductDetails from "./pages/RentalProductDetails";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./components/ProductDetails";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import Rentals from "./pages/Rentals";
import ContactPage from "./pages/ContactPage";
import RentalCategory from "./pages/RentalCategory";

const App = () => {
  const location = useLocation(); // now safe

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/rentals/:categoryId/:productId"
          element={<RentalProductDetails />}
        />
        <Route path="/rentals/:categoryId" element={<RentalCategory />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
