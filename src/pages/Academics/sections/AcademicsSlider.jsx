import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import class1 from "../../../assets/img/class/class-1.jpg";
import class2 from "../../../assets/img/class/class-2.jpg";
import class3 from "../../../assets/img/class/class-3.jpg";
import class4 from "../../../assets/img/class/class-4.jpg";
import class5 from "../../../assets/img/class/class-5.jpg";
import class6 from "../../../assets/img/class/class-6.jpg";

function AcademicsSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container mb-5">
      <Slider
        arrows={false}
        fade={true}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        className="class-big-img"
      >
        <div className="col-12">
          <img src={class1} alt="class" />
        </div>
        <div className="col-12">
          <img src={class2} alt="class" />
        </div>
        <div className="col-12">
          <img src={class3} alt="class" />
        </div>
        <div className="col-12">
          <img src={class4} alt="class" />
        </div>
        <div className="col-12">
          <img src={class5} alt="class" />
        </div>
        <div className="col-12">
          <img src={class6} alt="class" />
        </div>
      </Slider>
      <Slider
        arrows={false}
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        className="class-thumb-img"
      >
        <div className="col-12 px-3">
          <img src={class1} alt="class" />
        </div>
        <div className="col-12 px-3">
          <img src={class2} alt="class" />
        </div>
        <div className="col-12 px-3">
          <img src={class3} alt="class" />
        </div>
        <div className="col-12 px-3">
          <img src={class4} alt="class" />
        </div>
        <div className="col-12 px-3">
          <img src={class5} alt="class" />
        </div>
        <div className="col-12 px-3">
          <img src={class6} alt="class" />
        </div>
      </Slider>
    </div>
  );
}

export default AcademicsSlider;
