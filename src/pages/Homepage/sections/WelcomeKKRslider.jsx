import React, { useRef } from "react";
import Slider from "react-slick";
import shapeSlide1 from "../../../assets/img/shape/shape-slide-1.png";
import shapeSlide2 from "../../../assets/img/shape/shape-slide-2.png";
import shapeSlide3 from "../../../assets/img/shape/shape-slide-3.png";
import line1 from "../../../assets/img/shape/line-1.png";
import line2 from "../../../assets/img/shape/line-2.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const WelcomeKKRslider = () => {
  const sliderRef = useRef(null); // Move useRef inside the component

  const settings = {
    dots: false,
    fade: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false
  };

  return (
    <div className="shape-slider-area" id="sliderOne">
      <Slider {...settings} ref={sliderRef} className="shape-slider vs-carousel">
        <div className="slide-item">
          <img
            className="line-1"
            data-ani="slideinup"
            data-ani-delay=".2s"
            src={line1}
            alt="shape"
          />
          <img
            className="line-2"
            data-ani="slideinup"
            data-ani-delay=".5s"
            src={line2}
            alt="shape"
          />
          <img src={shapeSlide1} alt="shape" />
        </div>
        <div className="slide-item">
          <img
            className="line-1"
            data-ani="slideinup"
            data-ani-delay=".2s"
            src={line1}
            alt="shape"
          />
          <img
            className="line-2"
            data-ani="slideinup"
            data-ani-delay=".5s"
            src={line2}
            alt="shape"
          />
          <img src={shapeSlide2} alt="shape" />
        </div>
        <div className="slide-item">
          <img
            className="line-1"
            data-ani="slideinup"
            data-ani-delay=".2s"
            src={line1}
            alt="shape"
          />
          <img
            className="line-2"
            data-ani="slideinup"
            data-ani-delay=".5s"
            src={line2}
            alt="shape"
          />
          <img src={shapeSlide3} alt="shape" />
        </div>
      </Slider>
      {/* Custom navigation buttons */}
      <button 
        className="simple-arrow arrow-left" 
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaChevronLeft />
      </button>
      <button 
        className="simple-arrow arrow-right" 
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default WelcomeKKRslider;
