import React from 'react';
import "./Parallax.css"
import { Parallax } from "react-parallax";



const ParaHeader = () => {
    return (
        <Parallax bgImage={"aleesaheader.jpg"} strength={400}>
            <div style={{ height: 900 }}>
              <div className="textbox">Hair By <span id="name">Aleesa</span></div>
            </div>
          </Parallax>
    )
}

export default ParaHeader;
