import React from "react";
import process2 from "../../../assets/img/icon/process2-2.png"
import process3 from "../../../assets/img/icon/process2-3.png"
import process4 from "../../../assets/img/icon/process2-4.png"
import dashedline from "../../../assets/img/shape/dashed-line-1.png"

const WorkProcess = () => {
  return (
    <>
      {/*======== Process Section ========*/}
      <section className="process-section space-top space-bottom-shape2-plus">
        <div className="container">
          <div
            className="row mb-20 text-center justify-content-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
              <div className="title-area">
                <span className="sub-title">Work Process</span>
                <h2 className="sec-title">How We Manage Our Kids Education</h2>
              </div>
            </div>
          </div>
          <div className="process-area">
            <div className="row gy-60 justify-content-between">
              {/* Single Item */}
              <div
                className="col-auto process-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="process-box-body">
                  <span className="process-number">01</span>
                  <div className="process-content">
                    <div className="process-icon">
                      <i className="fa-light fa-graduation-cap fa-3x" />
                    </div>
                    <h5 className="process-name">
                      <a href="service-details.html">Curriculum</a>
                    </h5>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              <div
                className="col-auto process-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="process-box-body">
                  <span className="process-number">02</span>
                  <div className="process-content">
                    <div className="process-icon">
                      <img src={process2} alt="icon" />
                    </div>
                    <h5 className="process-name">
                      <a href="learning-activities.html">
                        Teaching Methodology
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              <div
                className="col-auto process-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="process-box-body">
                  <span className="process-number">03</span>
                  <div className="process-content">
                    <div className="process-icon">
                      <img src={process3} alt="icon" />
                    </div>
                    <h5 className="process-name">
                      <a href="class-details1.html">Environment</a>
                    </h5>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              <div
                className="col-auto process-box wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="process-box-body">
                  <span className="process-number">04</span>
                  <div className="process-content">
                    <div className="process-icon">
                      <img src={process4} alt="icon" />
                    </div>
                    <h5 className="process-name">
                      <a href="environment.html">Activities</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-line">
              <img src={dashedline} alt="shape" />
            </div>
          </div>
        </div>
      </section>
      {/*======== / Process Section ========*/}
    </>
  );
};

export default WorkProcess;
