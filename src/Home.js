import React from 'react';
import './Home.css';
import { Parallax } from "react-parallax";
import { FaInstagram } from "react-icons/fa";
import Carouselslide from "./Carousel.js" ;
//import Grid from "./Imggrid.js";

class Home extends React.Component {
  render() {
    return (
        <div className="styles">          
          <Parallax bgImage={"aleesaheader.jpg"} strength={400}>
            <div style={{ height: 900 }}>
              <div className="textbox">Hair By <span id="name">Aleesa</span></div>
            </div>
          </Parallax>
          
          <div className="quote">
            <h2>"Life is better when you have a good hairstylist"</h2>
            <div className="mainbody">
            <img src="/wifey5.jpg" alt="pic of me" className="mainimg"></img>
            <h1>About Me</h1><br></br>
            <p>Originally from Oregon, now residing in St John's Florida, I have worked as a professional in the beauty industry since graduating from Portland Beauty School in 2014.<br></br><br></br> My specialties include and are not limited to, hair color, balayage, and men’s cuts.<br></br><br></br>
            I'm continuing to further my education by taking as many classes as I can attend. I'm dedicated to keeping up with the latest styles and trends in the world of fashion and design. That way I can create any look my client desires.<br></br><br></br>
            I enjoy a personal and caring relationship with all my clients, my goal is for each of my guest to feel pampered and relaxed during their appointment.<br></br><br></br>
            To see more of my work, check out my <a href="https://www.instagram.com/hair_by_aleesa/" target="blank">Instagram</a>!
            </p>
          </div>
          </div>

          <div className="work">
          <Carouselslide />
            <a href="https://www.instagram.com/hair_by_aleesa/" target="blank"><FaInstagram size="10em" className="Instagram" /></a>
          </div>

          <div className="footer">
            <h1>Contact Me...</h1>
            <br/>
            <br/>
            <ul>
              <li>Email: <a href="mailto:aleesadenise@gmail.com">AleesaDenise@gmail.com</a></li>
              <br/>
              <li>Instagram: <a href="https://www.instagram.com/hair_by_aleesa/" target="blank">Hair_By_Aleesa</a></li>
            </ul>
            <br/>
            <br/>
          </div>
        </div>
    )
  }
}

export default Home