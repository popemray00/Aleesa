import React from 'react';
import './Home.css';
import { Parallax } from "react-parallax";
import { FaInstagram } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";

const image1 =
    "https://pixnio.com/free-images/2017/02/25/2017-02-25-06-48-04.jpg"

class Home extends React.Component {
  render() {
    return (
        <div className="styles">
          
          <Parallax bgImage={image1} strength={400}>
            <div style={{ height: 900 }}>
              <div className="textbox">Hair By <span id="name">Aleesa</span></div>
            </div>
          </Parallax>
          
          <div className="quote">
            <h1>"Life is better when you have a good hairstylist"</h1>
          </div>
          
          <Parallax className="para2" bgImage="wifey4.jpg" strength={400}>
            <div style={{ height: 800 }}>
              <div className="textbox2">
                <h1>My Commitment to you!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Nibh praesent tristique magna sit amet purus gravida. Dictum non consectetur a erat nam. Quis imperdiet massa tincidunt nunc pulvinar sapien. Sociis natoque penatibus et magnis dis parturient montes nascetur. Gravida quis blandit turpis cursus in hac habitasse platea. Risus nec feugiat in fermentum. Tristique risus nec feugiat in fermentum posuere urna nec. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Nulla pharetra diam sit amet nisl suscipit. A arcu cursus vitae congue. Hac habitasse platea dictumst quisque. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Ullamcorper eget nulla facilisi etiam. Etiam sit amet nisl purus in mollis. Fermentum dui faucibus in ornare quam viverra orci sagittis.
Quam elementum pulvinar etiam non quam.</p>
              </div>
            </div>
          </Parallax>

          <div className="social">
            <h1>Check out my work!</h1>
            <BsCaretDownFill size="4em" className="arrow"/>
              <br></br>
            <BsCaretDownFill size="4em" className="arrow"/>
              <br></br>
            <BsCaretDownFill size="4em"className="arrow"/>
              <br></br>
            <a href="https://www.instagram.com/hair_by_aleesa/" target="blank"><FaInstagram size="10em" className="Instagram" /></a>
          </div>

          <div className="footer">
            <h1>Contact Me...</h1>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
    )
  }
}

export default Home