import React from 'react';
import './Home.css';
import { FaInstagram } from "react-icons/fa";
import Carouselslide from "./Carousel.js" ;
import Contact from "./Contact.js";
import Bio from "./Bio.js";
import ParaHeader from "./Parallax.js";
import Quote from "./Quote.js"

class Home extends React.Component {
  render() {
    return (
        <div className="styles">          
          
          <div>
            <ParaHeader />
            <Quote />
            <Bio />
            <div className="work">
              <h1>My Work</h1>
            <Carouselslide />
              <a href="https://www.instagram.com/hair_by_aleesa/" target="blank"><FaInstagram size="10em" className="Instagram" /></a>
            </div>
            <Contact />
          </div>
        </div>
    )
  }
}

export default Home