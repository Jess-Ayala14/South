import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import './Blog.css'
import holder from '../Img/Barrel.jpg';
import holder1 from '../Img/Dowels1.jpg';
import holder2 from '../Img/mushroom.jpg';
import holder_ from '../Img/extrusions-1.jpg';
import holder_1 from '../Img/tubing-1.jpg';
import logo from '../Img/real-logo.png'

function Blog() {

  return (
    <div className='Blog'>
      <Container>
        <Row className='text-left'>
        <h1>Our Products</h1>
        </Row>
        <Row>
        <Col xs={0} lg={1} />
          <Col xs={4} lg={3}>
            <Image src={holder} rounded />
          </Col>
          <Col xs={4} lg={3}>
            <Image src={holder1} rounded/>
          </Col>
          <Col xs={4} lg={3}>
            <Image src={holder2} rounded />
          </Col>
          <Col xs={0} lg={1} />
        </Row>
        <Row className='text text-left'>
          <h3>
          Our specialty is high-quality wood products at the best price
          </h3>
        </Row>
        <img src={logo} className='logo' />
        <Row className='secondary text-left'>
        <h2>We also produce</h2>
        </Row>
        <Row>
          <Col xs={2} lg={3}/>
          <Col xs={4} lg={2} >
            <Image src={holder_} rounded />
          </Col>
          <Col xs={1}  />
          <Col xs={4} lg={2} >
            <Image src={holder_1} rounded />
          </Col>
          <Col xs={2} lg={3}  />
        </Row>
      </Container>
    </div>
  );
};

export default Blog;