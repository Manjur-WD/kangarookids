import React from "react";
import { useGSAP } from "@gsap/react";

import serviceLine from "../../../assets/img/shape/service-line.png"
import lolypop from "../../../assets/img/icon/lolypop.png"
import starSm from "../../../assets/img/icon/star-sm.png"
import star from "../../../assets/img/icon/star.png"

const ServiceSection = () => {
  return (
    <>
      <section className="service-section py-md-5 py-0 mt-5 shape-mockup-wrap">
        <div className="container">
          <div
            className="row text-center justify-content-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
              <div className="title-area">
                <span className="sub-title">Service We Provide</span>
                <h2 className="sec-title">
                  We ensure your child gets all round development
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-30">
            {/* Single item */}
            <div
              className="col-lg-4 col-md-6 service-card wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-card-inner h-100">
                <div className="sr-icon">
                  <i className="fas fa-football text-warning fa-3x" />
                </div>
                <h2 className="sr-title h4">
                  <a href="#">Learn through play</a>
                </h2>
                <p className="sr-text">
                  We teach kids valuable lessons through creative and exciting
                  games and activities in a fun way that grabs their attention.
                </p>
              </div>
            </div>
            {/* Single item */}
            <div
              className="col-lg-4 col-md-6 service-card wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-card-inner h-100">
                <div className="sr-icon">
                  <i className="fas fa-teddy-bear text-warning fa-3x" />
                </div>
                <h2 className="sr-title h4">
                  <a href="#">Toys and Games</a>
                </h2>
                <p className="sr-text">
                  Our school is filled with the best toys and games that also
                  serve the purpose of educating and developing children, in
                  addition to being fun to play with.
                </p>
              </div>
            </div>
            {/* Single item */}
            <div
              className="col-lg-4 col-md-6 service-card wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-card-inner h-100">
                <div className="sr-icon">
                  <i className="fas fa-hand-holding-heart text-warning fa-3x" />
                </div>
                <h2 className="sr-title h4">
                  <a href="#">Love and Care</a>
                </h2>
                <p className="sr-text">
                  We are dedicated to nurturing children with love and care to
                  ensure their emotional and mental well-being is taken care of
                  during their time with us.
                </p>
              </div>
            </div>
            {/* Single item */}
            <div
              className="col-lg-4 col-md-6 service-card wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-card-inner h-100">
                <div className="sr-icon">
                  <i className="fas fa-diploma text-warning fa-3x" />
                </div>
                <h2 className="sr-title h4">
                  <a href="#">Education Services</a>
                </h2>
                <p className="sr-text">
                  We prioritize quality education and strive to stimulate our
                  students’ bright developing brains through creative
                  activities, fun lessons, and informative games.
                </p>
              </div>
            </div>
            {/* Single item */}
            <div
              className="col-lg-4 col-md-6 service-card wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-card-inner h-100">
                <div className="sr-icon">
                  <i className="fas fa-family text-warning fa-3x" />
                </div>
                <h2 className="sr-title h4">
                  <a href="#">Child Care</a>
                </h2>
                <p className="sr-text">
                  You can rest assured that your child’s education and safety
                  will be in the most capable hands, as we are responsible and
                  committed to taking care of all children enrolled at our
                  school.
                </p>
              </div>
            </div>
            {/* Single item */}
            <div
              className="col-lg-4 col-md-6 service-card wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-card-inner h-100">
                <div className="sr-icon">
                  <i className="fas fa-chart-network text-warning fa-3x" />
                </div>
                <h2 className="sr-title h4">
                  <a href="#">Physical Activity</a>
                </h2>
                <p className="sr-text">
                  To foster an exciting and nurturing atmosphere we always
                  encourage children with fun physical activities and events
                  that contribute in the all-round development of kids.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup z-index-3 d-none d-xl-block"
          style={{top: "-7%",left: "2%"}}
        >
          <img src={serviceLine} alt="shapes" />
        </div>
        <div
          className="shape-mockup shapePulse z-index-negative d-none d-xl-block"
          style={{top: "27%",left: "9%"}}
        >
          <img src={lolypop} alt="shapes" />
        </div>
        <div
          className="shape-mockup shapePulse rotate z-index-negative"
          style={{top: "19%",right: "21%"}}
        >
          <img src={starSm} alt="shapes" />
        </div>
        <div
          className="shape-mockup shapePulse rotate z-index-negative"
          style={{bottom: "20%",right: "10%"}}
        >
          <img src={star} alt="shapes" />
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
