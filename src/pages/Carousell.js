import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

import pic from "../Img/carousel/clamshell-1.png";
import pic1 from "../Img/carousel/extrusions-1.png";
import pic2 from "../Img/carousel/mushroom-1.png";
import pic3 from "../Img/carousel/tubing-1.png";
import pic4 from "../Img/carousel/tubingB-1.png";
import pic5 from "../Img/carousel/tubingG-1.png";
import pic6 from "../Img/carousel/wood-1.png";
import pic7 from "../Img/carousel/TubingV-1.png";

const Carousell = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>

        <div className="carousel-fixed">

          <Carousel interval={3000} controls={true} indicators={true}>

            <Carousel.Item>
              <div className="carousel-frame">
                <img src={pic} alt="Clam Shell" />
              </div>
              <Carousel.Caption>
                <h5>Clam Shell</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-frame">
                <img src={pic1} alt="Extrusions" />
              </div>
              <Carousel.Caption>
                <h6>Rubber Extrusions</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-frame">
                <img src={pic2} alt="Wood Plugs" />
              </div>
              <Carousel.Caption>
                <h5>Wood Plugs</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-frame">
                <img src={pic3} alt="Tubing" />
              </div>
              <Carousel.Caption>
                <h6>Polymer Tubing</h6>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-frame">
                <img src={pic4} alt="Blue Tubing" />
              </div>
              <Carousel.Caption>
                <h5>Blue Tubing</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-frame">
                <img src={pic5} alt="Green Tubing" />
              </div>
              <Carousel.Caption>
                <h5>Green Tubing</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-frame">
                <img src={pic6} alt="Dowel Pins" />
              </div>
              <Carousel.Caption>
                <h5>Dowel Pins</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-frame">
                <img src={pic7} alt="Variety" />
              </div>
              <Carousel.Caption>
                <h6>Variety</h6>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>

        </div>

      </Col>
    </Row>
  );
};

export default Carousell;