import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import PageHeading from "./PageHeading";
import "../scss/featuredItems.scss";

const FeaturedItems = () => {
  const navigate = useNavigate();

  // Filter featured products and take max 8
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="featured-items-section">
      <Container>
        <PageHeading eyebrow="Explore Featured" title="Featured Products" />

        <Row>
          {featuredProducts.map((product) => (
            <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
              <Card className="featured-item h-100">
                {product.featured && <div className="ribbon">Featured</div>}
                <Card.Img
                  variant="top"
                  src={product.images?.[0] || ""}
                  alt={product.name}
                  className="featured-img"
                />
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description?.slice(0, 70)}...
                  </Card.Text>
                  <h5 className="price">{product.price}</h5>
                  <Button
                    className="btn-view"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedItems;
