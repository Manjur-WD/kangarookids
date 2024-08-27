import React from "react";

import capPlane from "../../../assets/img/icon/cap-plane.png"
import basketBall from "../../../assets/img/icon/busket-ball.png"
import star from "../../../assets/img/icon/star.png"
import WelcomeKKRslider from "./WelcomeKKRslider";

const WelcomeToKKR = () => {
  return (
    <>
      <section className="about-section bg-smoke space shape-mockup-wrap">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row align-items-center gy-30">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="text-center text-lg-start">
                <span className="sub-title">More About Us</span>
                <h2 className="sec-title big-title">
                  Welcome to Kangaroo Kids
                </h2>
                <p className="fs-md mb-30">
                  Operating since 2019, Kangaroo Kids Rashbehari has made a mark
                  in providing premium education, right values, healthy
                  environment and care and protection that a child needs at the
                  early stage of his life. Our preschool programs are focused on
                  the wellbeing of every child. We make sure that our children
                  get the right attention to grow up to be happy, healthy and
                  confident.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check text-warning" /> We have been
                    educating children for over fifteen years.
                  </li>
                  <li>
                    <i className="fas fa-check text-warning" /> We offer a safe,
                    nurturing and stimulating environment.
                  </li>
                  <li>
                    <i className="fas fa-check text-warning" /> We enable our
                    children to develop at their own speed.
                  </li>
                </ul>
                <a href="about.html" className="vs-btn wave-btn style-1">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-7">
                <WelcomeKKRslider />
              {/* <div className="shape-slider-area">
                <button
                  data-slick-prev="#sliderOne"
                  className="simple-arrow arrow-left"
                >
                  <i className="far fa-chevron-left" />
                </button>
                <button
                  data-slick-next="#sliderOne"
                  className="simple-arrow arrow-right"
                >
                  <i className="far fa-chevron-right" />
                </button>
                <div
                  className="shape-slider vs-carousel"
                  id="sliderOne"
                  data-slide-show={1}
                  data-md-slide-show={1}
                >
                  <div className="slide-item">
                    <img
                      className="line-1"
                      data-ani="slideinup"
                      data-ani-delay=".2s"
                      src="assets/img/shape/line-1.png"
                      alt="shape"
                    />
                    <img
                      className="line-2"
                      data-ani="slideinup"
                      data-ani-delay=".5s"
                      src="assets/img/shape/line-2.png"
                      alt="shape"
                    />
                    <img src="assets/img/shape/shape-slide-1.png" alt="shape" />
                  </div>
                  <div className="slide-item">
                    <img
                      className="line-1"
                      data-ani="slideinup"
                      data-ani-delay=".2s"
                      src="assets/img/shape/line-1.png"
                      alt="shape"
                    />
                    <img
                      className="line-2"
                      data-ani="slideinup"
                      data-ani-delay=".5s"
                      src="assets/img/shape/line-2.png"
                      alt="shape"
                    />
                    <img src="assets/img/shape/shape-slide-2.png" alt="shape" />
                  </div>
                  <div className="slide-item">
                    <img
                      className="line-1"
                      data-ani="slideinup"
                      data-ani-delay=".2s"
                      src="assets/img/shape/line-1.png"
                      alt="shape"
                    />
                    <img
                      className="line-2"
                      data-ani="slideinup"
                      data-ani-delay=".5s"
                      src="assets/img/shape/line-2.png"
                      alt="shape"
                    />
                    <img src="assets/img/shape/shape-slide-3.png" alt="shape" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="shape-mockup shapePulse d-none d-lg-block rotate"
          style={{bottom: "22%",right: "5%"}}
        >
          <img src={star} alt="shapes" />
        </div>
        <div
          className="shape-mockup shapePulse d-none d-hd-block"
          style={{top: "17%",left: "6%"}}
        >
          <img src={capPlane} alt="shapes" />
        </div>
        <div
          className="shape-mockup rotate d-none d-sm-block z-index-2"
          style={{bottom: "-7%",left: "6%"}}
        >
          <img src={basketBall} alt="shapes" />
        </div>
      </section>
    </>
  );
};

export default WelcomeToKKR;
