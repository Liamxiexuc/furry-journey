import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Display.scss";
import DisplayView from "../../../assets/display1.png";
import DisplayLogo from "../../../assets/display2.png";
import DisplayTshirt from "../../../assets/display3.png";


export const Display = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={DisplayView} alt="View slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={DisplayLogo} alt="Logo slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={DisplayTshirt} alt="Tshirt slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
