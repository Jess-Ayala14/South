import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './Welcome.css';
import logo from "../Img/real-logo.png";
import pic from "../Img/dowels.jpg";
import pic1 from "../Img/extrusions.jpg";
import pic2 from "../Img/tubing.jpg";

class Welcome extends Component {
  render() {

    const welcomeStyle = {
      backgroundImage:
        "url('Dowels1.jpg')",
      height: '95vh',
      marginTop: '0px',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }


    return (

      <div className="Welcome" style={welcomeStyle}>
        <Container>
          <img src={logo} />
          <Carousel>
            <Carousel.Item>
              <img src={pic} />
              <Carousel.Caption>
                <h4>Dowels</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pic1} />
              <Carousel.Caption>
                <h4>Extrusions</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="pic_2">
              <img src={pic2} />
              <Carousel.Caption>
                <h4>"Polimar" Tubing</h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

      </div>

    )
  };
}


export default Welcome;