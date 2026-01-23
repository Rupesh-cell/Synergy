import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../data/products";
import "../scss/products.scss";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(start, start + itemsPerPage);

  return (
    <>
      <section className="products-page">
        <Container>
          <div className="products-header">
            <h2>Our Products</h2>
            <p>
              Precision-engineered diving equipment and subsea solutions built
              for extreme underwater environments.
            </p>
          </div>

          <Row>
            {paginatedProducts.map((item) => (
              <Col md={3} key={item.id} className="mb-4">
                <Card className="product-card h-100">
                  <Card.Img variant="top" src={item.images[0]} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description.slice(0, 80)}...</Card.Text>

                    <Card.Text>
                      <small className="sku">SKU: {item.sku}</small>
                    </Card.Text>
                    <Button
                      as={Link}
                      to={`/products/${item.id}`}
                      className="w-100"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* PAGINATION */}
          <div className="pagination-wrapper">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;
