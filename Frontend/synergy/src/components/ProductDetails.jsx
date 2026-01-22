import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import products from "../data/products";

import "../scss/productDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (product) setActiveImage(product.images[0]);
  }, [product]);

  if (!product) {
    return (
      <>
        <Bar />
        <Container className="py-5 text-center">
          <h2>Product not found</h2>
          <Button onClick={() => navigate("/products")} className="mt-3">
            Back to Products
          </Button>
        </Container>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const whatsappLink = `https://wa.me/971551234567?text=Hello, I am interested in ${product.name}. Please send quotation.`;

  return (
    <>
      <Bar />

      <section className="product-details">
        <Container>
          {/* ---------- BREADCRUMB ---------- */}
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/products" }}>
              Products
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>

          {/* ---------- PRODUCT TOP ---------- */}
          <Row className="gy-4 align-items-start">
            {/* IMAGES */}
            <Col lg={6}>
              <div className="image-gallery">
                <Zoom>
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="main-img"
                  />
                </Zoom>

                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  breakpoints={{
                    576: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                  }}
                  className="thumb-slider"
                >
                  {product.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt="thumbnail"
                        className={`thumb-img ${
                          activeImage === img ? "active" : ""
                        }`}
                        onClick={() => setActiveImage(img)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>

            {/* INFO */}
            <Col lg={6}>
              <div className="product-info">
                <span className="brand-badge">{product.brand}</span>
                <h2>{product.name}</h2>
                <small className="sku">SKU: {product.sku}</small>
                <h4 className="price">{product.price}</h4>
                <p className="description">{product.description}</p>
                

                <div className="action-buttons">
                  <Button
                    href={whatsappLink}
                    target="_blank"
                    className="whatsapp-btn"
                  >
                    📲 Request Quote on WhatsApp
                  </Button>

                  <Button
                    variant="outline-primary"
                    href={product.datasheet}
                    download
                  >
                    📄 Download Datasheet
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* ---------- TECH SPECS ---------- */}
          <div className="specs-section">
            <h3>Technical Specifications</h3>
            <Table bordered responsive className="specs-table">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* ---------- RELATED PRODUCTS ---------- */}
          <div className="related-products">
            <h3>Related Products</h3>
            <Row>
              {relatedProducts.map((item) => (
                <Col md={3} sm={6} key={item.id} className="mb-4">
                  <div
                    className="related-card"
                    onClick={() => navigate(`/products/${item.id}`)}
                  >
                    <img src={item.images[0]} alt={item.name} />
                    <h6>{item.name}</h6>
                    <p>{item.price}</p>
                    <small className="sku">SKU: {item.sku}</small>
                    
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetails;
