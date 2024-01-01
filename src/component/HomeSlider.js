import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../assiste/homeslider.css"

function HomeSlider() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img src={require("../images/High-Quality.jpg")} className='imageSlide' />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../images/is1.jpg")} className='imageSlide'  />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../images/nxpg100-nexx-plug-2.webp")} className='imageSlide' />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;