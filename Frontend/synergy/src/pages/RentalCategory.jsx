import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Badge, Breadcrumb, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import rentals from "../data/rentals";
import "../scss/rentalCategory.scss";

const brandLogos = {
  Broco: "https://www.smp-ltd.com/media/wysiwyg/home/broco_web.webp",
  Stanley: "https://logos-world.net/wp-content/uploads/2024/07/Stanley-Logo.jpg",
  Cressi: "https://tse2.mm.bing.net/th/id/OIP.LOdDYzja-lpMM4jTelNwzwHaHa?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
};

const RentalCategory = () => {
  const { categoryId } = useParams();
  const category = rentals.find((r) => r.id === categoryId);

  const [activeBrand, setActiveBrand] = useState("All");
  const [search, setSearch] = useState("");

  if (!category) return <h2 className="text-center mt-5">Category not found</h2>;

  const filtered = category.products.filter((p) => {
    const brandMatch = activeBrand === "All" || p.brand === activeBrand;
    const textMatch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase());
    return brandMatch && textMatch;
  });

  return (
    <>
      <Bar />
      <section className="rental-category">
        <Container>
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/rentals" }}>
              Rentals
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{category.title}</Breadcrumb.Item>
          </Breadcrumb>

          <h2 className="category-title mb-3">{category.title}</h2>

          {/* SEARCH */}
          <Form.Control
            className="category-search mb-4"
            placeholder="Search product name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* BRAND LOGOS */}
          <div className="brand-filter mb-4">
            <div
              className={`brand-pill ${activeBrand === "All" ? "active" : ""}`}
              onClick={() => setActiveBrand("All")}
            >
              All
            </div>

            {category.brands.map((brand) => (
              <div
                key={brand}
                className={`brand-pill ${activeBrand === brand ? "active" : ""}`}
                onClick={() => setActiveBrand(brand)}
              >
                <img src={brandLogos[brand]} alt={brand} />
              </div>
            ))}
          </div>

          {/* PRODUCTS */}
          <Row className="g-4">
            {filtered.map((product) => (
              <Col md={4} key={product.id}>
                <motion.div
                  className="rental-product-card"
                  whileHover={{ y: -6 }}
                  onClick={() =>
                    window.location.assign(
                      `/rentals/${categoryId}/${product.id}`
                    )
                  }
                >
                  <img src={product.image} alt={product.name} />
                  <div className="card-body">
                    <h5>{product.name}</h5>
                    <small>SKU: {product.sku}</small>

                    <p>{product.short}</p>

                    <Badge
                      bg={
                        product.availability === "In Stock"
                          ? "success"
                          : product.availability === "Limited Stock"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {product.availability}
                    </Badge>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          {filtered.length === 0 && (
            <p className="text-center mt-5 text-muted">
              No products matched your search.
            </p>
          )}
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default RentalCategory;
