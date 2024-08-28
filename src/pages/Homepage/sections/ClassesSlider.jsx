import React, { useRef } from "react";
import Slider from "react-slick";
import class1 from "../../../assets/img/class/class-1.jpg";
import class2 from "../../../assets/img/class/class-2.jpg";
import class3 from "../../../assets/img/class/class-3.jpg";
import class4 from "../../../assets/img/class/class-4.jpg";
import class5 from "../../../assets/img/class/class-5.jpg";
import class6 from "../../../assets/img/class/class-6.jpg";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const ClassesSlider = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200, // Screen width less than 1200px
        settings: {
          slidesToShow: 3, // Show 2 slides
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
          dots: false // Disable dots on small screens if desired
        }
      }
    ]
  };

  return (
    <div className="slider-container vs-carousel">
      {/* Custom navigation buttons */}
      {/* <button 
        type="button" 
        className="slick-prev slick-arrow" 
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft />
      </button>
      <button 
        type="button" 
        className="slick-next slick-arrow" 
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight />
      </button> */}
      <Slider {...settings} ref={sliderRef} className="shape-slider vs-carousel">
        {/* Single Class */}
        <div className="px-2 wow fadeInUp h-100" data-wow-delay="0.1s">
          <div className="class-card h-100">
            <div className="class-img">
              <a href="class-details.html"><img src={class1} alt="class" /></a>
              <span className="class-fee"><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Toddlers</a></h2>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>10 months - 1.5 years</span>
                </li>
              </ul>
              <a href="class-details.html" className="vs-btn style-1">Read More</a>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="px-2 col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.1s">
          <div className="class-card h-100">
            <div className="class-img">
              <a href="class-details.html"><img src={class2} alt="class" /></a>
              <span className="class-fee"><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Toddlers Transition</a></h2>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>1.5 years - 1.10 years</span>
                </li>
              </ul>
              <a href="class-details.html" className="vs-btn style-1">Read More</a>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="px-2 col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.1s">
          <div className="class-card h-100">
            <div className="class-img">
              <a href="class-details.html"><img src={class3} alt="class" /></a>
              <span className="class-fee"><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Pre-Nursery</a></h2>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>2 years - 3 years</span>
                </li>
              </ul>
              <a href="class-details.html" className="vs-btn style-1">Read More</a>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="px-2 col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.1s">
          <div className="class-card h-100">
            <div className="class-img">
              <a href="class-details.html"><img src={class4} alt="class" /></a>
              <span className="class-fee"><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Nursery</a></h2>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>3 years - 4 years</span>
                </li>
              </ul>
              <a href="class-details.html" className="vs-btn style-1">Read More</a>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="px-2 col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.1s">
          <div className="class-card h-100">
            <div className="class-img">
              <a href="class-details.html"><img src={class5} alt="class" /></a>
              <span className="class-fee"><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details.html">Junior Kindergarten</a></h2>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>4 years - 5 years</span>
                </li>
              </ul>
              <a href="class-details.html" className="vs-btn style-1">Read More</a>
            </div>
          </div>
        </div>
        {/* Single Class */}
        <div className="px-2 col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.1s">
          <div className="class-card h-100">
            <div className="class-img">
              <a href="class-details.html"><img src={class6} alt="class" /></a>
              <span className="class-fee"><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="class-content">
              <h2 className="class-title h4"><a href="class-details-2.html">Senior Kindergarten</a></h2>
              <ul className="class-info">
                <li>
                  <p>Age:</p>
                  <span>5 years - 6 years</span>
                </li>
              </ul>
              <a href="class-details.html" className="vs-btn style-1">Read More</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ClassesSlider;
