import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './ImageSlider.css';


const ImageSlider = ({images}) => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <img src={images[0]} className="img"/>
          </div>
          <div className="each-slide">
            <img src={images[1]} className="img"/>
          </div>
          <div className="each-slide">
            <img src={images[2]} className="img"/>
          </div>
          <div className="each-slide">
            <img src={images[3]} className="img"/>
          </div>
          <div className="each-slide">
            <img src={images[4]} className="img"/>
          </div>
        </Slide>
      </div>
    )
};

export default ImageSlider;