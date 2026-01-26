import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  Badge,
  Tabs,
  Tab,
  Modal,
} from "react-bootstrap";
import { motion } from "framer-motion";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import rentals from "../data/rentals";
import "../scss/rentalProductDetails.scss";

const RentalProductDetails = () => {
  const { categoryId, productId } = useParams();
  const [activeTab, setActiveTab] = useState("specs");
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handlePdfOpen = (url) => {
    setPdfUrl(url);
    setShowPdfModal(true);
  };

  const handlePdfClose = () => {
    setPdfUrl("");
    setShowPdfModal(false);
  };

  const category = rentals.find((r) => r.id === categoryId);
  const product = category?.products.find((p) => p.id === productId);

  if (!product) return <h2 className="text-center mt-5">Product not found</h2>;

  return (
    <>
      <Bar />

      <section className="rental-product-details">
        <Container>
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4 custom-breadcrumb">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/rentals" }}>
              Rentals
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: `/rentals/${categoryId}` }}
            >
              {category.title}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>

          {/* HERO */}
          <Row className="align-items-center g-5 product-hero">
            <Col lg={6}>
              <motion.div
                className="image-panel"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rental-product-img"
                />

                <div className="availability-badge">
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

            <Col lg={6}>
              <motion.div
                className="product-info"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1>{product.name}</h1>
                <p className="short-desc">{product.short}</p>

                <ul className="meta">
                  <li>
                    <strong>Brand:</strong> {product.brand}
                  </li>
                  <li>
                    <strong>SKU:</strong> {product.sku}
                  </li>
                </ul>

                <div className="cta-row">
                  <Button
                    href={`https://wa.me/971551234567?text=I'm interested in renting ${product.name}`}
                    target="_blank"
                    className="whatsapp-btn"
                  >
                    📲 Request Rental Quote
                  </Button>

                  {product.datasheet && (
                    <Button
                      variant="outline-primary"
                      onClick={() => handlePdfOpen(product.datasheet)}
                    >
                      📄 Datasheet
                    </Button>
                  )}
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* DETAILS: Tabbed Section */}
          <Row className="mt-5 g-4 product-details-section">
            <Col lg={12}>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-3"
              >
                {/* SPECIFICATIONS */}
                <Tab eventKey="specs" title="Specifications">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <table className="specs-table">
                      <tbody>
                        {Object.entries(product.specs || {}).map(
                          ([key, value], i) => (
                            <tr key={i}>
                              <th>{key}</th>
                              <td>{value}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </motion.div>
                </Tab>

                {/* CERTIFICATIONS */}
                <Tab eventKey="certifications" title="Certifications">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.certifications?.length ? (
                      <ul>
                        {product.certifications.map((cert, i) => (
                          <li key={i}>
                            <Button
                              variant="link"
                              onClick={() => handlePdfOpen(cert.url)}
                            >
                              📄 {cert.name}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No certifications available.</p>
                    )}
                  </motion.div>
                </Tab>

                {/* ACCESSORIES */}
                <Tab eventKey="accessories" title="Accessories">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.accessories?.length ? (
                      <ul>
                        {product.accessories.map((acc, i) => (
                          <li key={i}>
                            {acc.name}{" "}
                            {acc.pdf && (
                              <Button
                                variant="link"
                                onClick={() => handlePdfOpen(acc.pdf)}
                              >
                                📄 View PDF
                              </Button>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No accessories available.</p>
                    )}
                  </motion.div>
                </Tab>
              </Tabs>
            </Col>
          </Row>

          {/* FOOTER ACTION */}
          <div className="bottom-actions">
            <Button
              variant="outline-secondary"
              as={Link}
              to={`/rentals/${categoryId}`}
            >
              ← Back to {category.title}
            </Button>
          </div>
        </Container>
      </section>

      {/* PDF Viewer Modal */}
      <Modal show={showPdfModal} onHide={handlePdfClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Document Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "80vh" }}>
          {pdfUrl && (
            <iframe
              src={pdfUrl}
              title="PDF Viewer"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          )}
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
};

export default RentalProductDetails;
