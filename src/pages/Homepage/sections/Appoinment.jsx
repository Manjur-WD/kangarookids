import React from "react";

import rainbowStar from "../../../assets/img/shape/rainbow-star.png";
import note from "../../../assets/img/icon/note.png";
import bird from "../../../assets/img/icon/bird.png";

const Appoinment = () => {
  return (
    <>
      {/*======== Appointment Section ========*/}
      <section className="appointment-section space-bottom space-top-shape-plus">
        <div className="container">
          <div className="row gx-60 gy-30 flex-column-reverse flex-lg-row align-items-center">
            <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.1s">
              <form
                action="#"
                method="POST"
                className="appointment-form ajax-contact"
              >
                <div className="row gx-20">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="parent-name"
                      id="gurdian-name"
                      placeholder="Guardian Name"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Phone No"
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="child-name"
                      id="child-name"
                      placeholder="Child Name"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="number"
                      className="form-control"
                      name="child-age"
                      id="child-age"
                      placeholder="Age of Child"
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="vs-btn wave-btn">
                      Submit
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
              </form>
            </div>
            <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.1s">
              <div className="text-center text-lg-start">
                <h2
                  className="sec-title big-title"
                  style={{ color: "#66267b" }}
                >
                  Make <span style={{ color: "#FEC20B" }}>Appointment</span>
                </h2>
                <p className="fs-md mb-30">
                  Our heart-to-heart international pre-school is located at 12
                  A, Rani Bhabani Rd, near Tollygunge, Sahanagar, Kalighat,
                  Kolkata, West Bengal 700026 that caters to parents and
                  guardians.{" "}
                </p>
                <a href="about-2.html" className="vs-btn wave-btn style-1">
                  Learn More
                  <span className="btn-hover">
                    <span className="btn-hover-inner">
                      <span className="part part-1"></span>
                      <span className="part part-1"></span>
                      <span className="part part-1"></span>
                      <span className="part part-1"></span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup z-index-3 d-none d-hd-block"
          style={{ bottom: "-8%", right: "0%" }}
        >
          <img src={rainbowStar} alt="shapes" />
        </div>
        <div
          className="shape-mockup moving d-none d-hd-block"
          style={{ top: "22%", left: "7%" }}
        >
          <img src={note} alt="shapes" />
        </div>
        <div
          className="shape-mockup shapePulse d-none d-hd-block"
          style={{ bottom: "20%", left: "7%" }}
        >
          <img src={bird} alt="shapes" />
        </div>
      </section>
      {/*======== / Appointment Section ========*/}
    </>
  );
};

export default Appoinment;
