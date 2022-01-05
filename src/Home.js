import React from 'react';
import './Home.css';
import { FaInstagram } from "react-icons/fa";
import Carouselslide from "./Carousel.js" ;
import Contact from "./Contact.js";
import Bio from "./Bio.js";
import ParaHeader from "./Parallax.js";

class Home extends React.Component {
  render() {
    return (
        <div className="styles">          
          <div>
            <ParaHeader />
          </div>
          
          <div className="quote">
            <h2>"Life is better when you have a good hairstylist"</h2>
          </div>

          <div>
            <Bio />
          </div>



          <div className="work">
            <h1>My Work</h1>
              <Carouselslide />
              <a href="https://www.instagram.com/hair_by_aleesa/" target="blank"><FaInstagram size="10em" className="Instagram" /></a>
          </div>

          <div>
            <Contact />
          </div>
        </div>
    )
  }
}

export default Home