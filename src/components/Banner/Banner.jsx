import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from '../../assets/banner.png'
const Banner = () => {
     var settings = {
       dots: true,
       speed: 500,
       autoplay:true,
       slidesToShow: 1,
       slidesToScroll: 1,
     };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={banner} alt="banner-img" />
        </div>
        <div>
          <img src={banner} alt="banner-img" />
        </div>
        <div>
          <img src={banner} alt="banner-img" />
        </div>
        
      </Slider>
    </>
  );
}

export default Banner