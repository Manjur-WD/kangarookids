import React from "react";

import dog from "../../../assets/img/icon/dog.png";
import curveLine from "../../../assets/img/icon/curve-line.png";
import star3 from "../../../assets/img/icon/star-3.png";
import triangle from "../../../assets/img/icon/triangle.png";


import ClassesSlider from "./ClassesSlider";

const ClassSection = () => {
  return (
    <>
      {/*======== Classes Section ========*/}
      <section className="classes-section space arrow-wrap shape-mockup-wrap">
        <div className="container">
          <div
            className="row text-center justify-content-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
              <div className="title-area">
                <span className="sub-title">On Going Classes</span>
                <h2 className="sec-title" style={{ color: "#66267b" }}>
                  Our Classrooms Programmes{" "}
                  <span style={{ color: "#FEC20B" }}>By Age</span>
                </h2>
              </div>
            </div>
          </div>
          <ClassesSlider />
        </div>
        <div
          className="shape-mockup shapePulse d-none d-xl-block"
          style={{ top: "15%", left: "7%" }}
        >
          <img src={dog} alt="shapes" />
        </div>
        <div
          className="shape-mockup rotate d-none d-hd-block"
          style={{ bottom: "17%", left: "7%" }}
        >
          <img src={curveLine} alt="shapes" />
        </div>
        <div
          className="shape-mockup rotate z-index-negative"
          style={{ top: "32%", right: "9%" }}
        >
          <img src={star3} alt="shapes" />
        </div>
        <div
          className="shape-mockup shapePulse d-none d-hd-block"
          data-bottom="16%"
          data-right="9%"
          style={{ bottom: "16%", right: "9%" }}
        >
          <img src={triangle} alt="shapes" />
        </div>
      </section>
      {/*======== / Classes Section ========*/}
    </>
  );
};

export default ClassSection;
