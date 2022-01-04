import React from 'react';
import './Home.css';
import { Parallax } from "react-parallax";
import { FaInstagram } from "react-icons/fa";
import Carouselslide from "./Carousel.js" 

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
            <h1>"Life is better when you have a good hairstylist"</h1>
          </div>
          
          <div className="mainbody">
            <img src="/wifey5.jpg" alt="pic of me" className="mainimg"></img>
            <h1>My Commitment to you!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Nibh praesent tristique magna sit amet purus gravida. Dictum non consectetur a erat nam. Quis imperdiet massa tincidunt nunc pulvinar sapien. Sociis natoque penatibus et magnis dis parturient montes nascetur. Gravida quis blandit turpis cursus in hac habitasse platea. Risus nec feugiat in fermentum. Tristique risus nec feugiat in fermentum posuere urna nec. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Nulla pharetra diam sit amet nisl suscipit. A arcu cursus vitae congue. Hac habitasse platea dictumst quisque. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Ullamcorper eget nulla facilisi etiam. Etiam sit amet nisl purus in mollis. Fermentum dui faucibus in ornare quam viverra orci sagittis.
               Quam elementum pulvinar etiam non quam. Ultrices eros in cursus turpis massa tincidunt dui. Tincidunt augue interdum velit euismod in. Suspendisse potenti nullam ac tortor vitae purus. Duis tristique sollicitudin nibh sit amet commodo nulla. Dolor sit amet consectetur adipiscing. Risus nullam eget felis eget nunc. Viverra tellus in hac habitasse. Integer eget aliquet nibh praesent tristique magna sit amet. Ultrices dui sapien eget mi. Arcu felis bibendum ut tristique et egestas. Malesuada pellentesque elit eget gravida cum sociis natoque. Sem integer vitae justo eget. Placerat vestibulum lectus mauris ultrices. Elit pellentesque habitant morbi tristique.</p>
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
              <li>Email: <a href="mailto:hairbya@gmail.com">hairbya@gmail.com</a></li>
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