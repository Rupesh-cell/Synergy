import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../scss/products.scss";

const Products = () => {
  const items = [
    {
      id: 1,
      name: "Professional Diving Mask",
      img: "https://www.tradeinn.com/f/14093/140933627/cressi-zs2-medium-diving-mask.webp",
      price: "$45",
    },
    {
      id: 2,
      name: "High-Pressure Oxygen Tank",
      img: "https://tse3.mm.bing.net/th/id/OIP.RA2y5OFMi0qNPk5p9i4AiwHaHa",
      price: "$320",
    },
    {
      id: 3,
      name: "Carbon Fiber Diving Fins",
      img: "https://tse1.mm.bing.net/th/id/OIP.4I0c5dpmW_nr72MwAh7wcAHaHm",
      price: "$60",
    },
    {
      id: 4,
      name: "Industrial Wetsuit – 3mm",
      img: "https://www.tradeinn.com/f/13883/138836503/cressi-tokugawa-back-zip-diving-wetsuit-3-mm.webp",
      price: "$150",
    },
  ];

  return (
    <section className="products-section">
      <Container>
        {/* PAGE HEADING */}
        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Our Products</h2>
          <p>
            Engineered diving equipment designed for safety, durability, and
            professional underwater operations.
          </p>
        </motion.div>

        {/* PRODUCTS GRID */}
        <Row>
          {items.map((item, index) => (
            <Col sm={6} md={4} lg={3} key={item.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="product-card">
                  <div className="image-wrapper">
                    <Card.Img src={item.img} alt={item.name} />
                  </div>

                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="price">{item.price}</Card.Text>
                    <Button className="product-btn">
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
