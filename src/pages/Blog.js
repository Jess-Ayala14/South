import React from 'react';
import { Image, Row, Col, Container, Button, Card } from 'react-bootstrap';
import Carousell from './Carousell';
import './Blog.css';

import holder from '../Img/dowel_pic.jpg';
import holder1 from '../Img/dowel_pic1.jpg';
import holder2 from '../Img/dowel_pic2.jpg';
import banner from '../Img/real-logo.png'

function Blog() {

  const products = [
    {
      image: holder,
      title: 'Dowel Pins',
      text: 'High-quality dowel pins for strong and reliable joints.',
      details: 'Excellent resistance and precision for industrial assembly'
    },
    {
      image: holder1,
      title: 'Bulk Packaging',
      text: 'Secure and efficient packaging for industrial transportation.',
      details: 'Optimized for safe shipping and large-volume storage.'
    },
    {
      image: holder2,
      title: 'Wood Dowels',
      text: 'Precision-crafted dowels for multiple applications.',
      details: 'Manufactured with premium wood for superior durability.'
    }
  ];

  const BlogStyle = {
    backgroundImage: "url('products.jpg')",
    minHeight: '100vh',
    height: 'auto',
    marginTop: '0px',
    backgroundPosition: '55%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className='Blog' id="Blog" style={BlogStyle}>
      <Container>

        {/* TITLE */}
        <Row>
          <Col>
            <div className='blog-header'>
              <h1>Our Products</h1>
            </div>
          </Col>
        </Row>

        {/* PRODUCTS */}
        <Row className='product-row'>
          {products.map((product, index) => (
            <Col key={index} xs={12} md={4} lg={4} className='mb-4'>
              <Card className='product-card'>
                <div className='product-image-wrapper'>
                  <Image src={product.image} alt={product.title} fluid />
                </div>

                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.text}</Card.Text>
                  <div className='details-container'>
                    <Button className='primary-btn'>
                      View Details
                    </Button>
                    <div className='product-modal'>
                      <h5>Main Features</h5>
                      <p>{product.details}</p>
                      {product.details}
                    </div>
                  </div>

                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

        <Row className='banner'>
          <Col md={8} lg={6}>
            <h5>Our speciality is high-quality wood products at the best price</h5>
          </Col>
          <Col md={4} lg={6}>
            <Image src={banner} />
          </Col>
        </Row>

        {/* SECONDARY */}
        <Row>
          <Col>
            <div className='secondary-header'>
              <h2>We also produce</h2>
            </div>
          </Col>
        </Row>

        {/* CAROUSEL */}
        <Row>
          <Col>
            <div className='carousel-wrapper'>
              <Carousell />
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Blog;