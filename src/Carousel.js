import React from "react";
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

const Carouselslide = () => {
    return (    
    <Carousel fade>
         <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide1.jpg"
              alt="First slide"
            />
         </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide2.jpg"
              alt="Sixth slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide3.jpg"
              alt="Seventh slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide4.jpg"
              alt="Eight slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide5.jpg"
              alt="5th slide"
            />
        </Carousel.Item>
        </Carousel>
    )
}

export default Carouselslide