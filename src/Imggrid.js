import React from "react";
import './Imggrid.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Grid = () => {
 return (   
<Container>
  <Row>
    <Col xs={6} md={4}>
    <img
        className="grid"
        src="slide1.jpg"
        alt="First slide"
    />
    </Col>
    <Col xs={6} md={4}>
    <img
        className="grid"
        src="slide2.jpg"
        alt="Second slide"
    />
    </Col>
    <Col xs={6} md={4}>
    <img
        className="grid"
        src="slide3.jpg"
        alt="Third slide"
    />
    </Col>
    <Col xs={6} md={4}>
    <img
        className="grid"
        src="slide4.jpg"
        alt="Fourth slide"
    />
    </Col>
    <Col xs={6} md={4}>
    <img
        className="grid"
        src="slide5.jpg"
        alt="Fifth slide"
    />
    </Col>
  </Row>
</Container>
 )
}

export default Grid