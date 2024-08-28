import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import headerAfter from "../../../assets/img/shape/header-after.png";
import sliderAfter from "../../../assets/img/shape/hero-after.png"
import banner1 from "../../../assets/img/banner/web-banner-1.png";
import banner2 from "../../../assets/img/banner/web-banner-2.png";
import banner3 from "../../../assets/img/banner/web-banner-3.png";

import "animate.css"

// Sample response data
const response = {
  data: [
    banner1, // Directly use imported assets
    banner2,
    banner3,
  ],
};

const HeroSlider = () => {
  const [banners, setBanners] = useState([]);

  // Function to handle setting banners
  const handleBanners = () => {
    setBanners(response.data);
  };

  useEffect(() => {
    handleBanners();
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };

  return (
    <section className="vs-hero-wrapper position-relative animate__animated animate__fadeInUp animate__slow">
      <div className="section-before">
        <img src={headerAfter} alt="shape" />
      </div>
      <div className="section-after d-none d-md-block" >
        <img src={sliderAfter} alt="shape"/>
    </div>
      
      <div className="slider-container hero-slider1 vs-carousel">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div className="hero-slide" key={index}>
              <img src={banner} alt={`Banner ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
