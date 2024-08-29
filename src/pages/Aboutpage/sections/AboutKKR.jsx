import React from "react";
import aboutImg from "../../../assets/img/normal/square-1.jpg";
import dog from "../../../assets/img/icon/dog.png";
import star from "../../../assets/img/icon/star.png";

const AboutKKR = () => {
  return (
    <section className="about-section space shape-mockup-wrap">
      <div className="container">
        <div className="row align-items-center gy-30">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="img-box-2">
              <img
                src={aboutImg}
                alt="photo"
                className="big-img"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  height: "90%",
                  width: "100%",
                }}
              />
              {/*<img src="assets/img/normal/square-2.jpeg" alt="photo" class="small-img" style="object-fit:cover; object-position: center;">*/}
            </div>
          </div>
          <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.1s">
            <div className="text-center text-lg-start">
              <h2 className="sec-title big-title" style={{ color: "#624099" }}>
                About <span style={{ color: "#ffd530" }}>Kangaroo Kids</span>{" "}
                Rashbehari
              </h2>
              <p className="fs-md mb-30">
                Operating since 2019, Kangaroo Kids Rashbehari has made a mark
                in providing premium education, right values, healthy
                environment and care and protection that a child needs at the
                early stage of his life. Our preschool programs are focused on
                the wellbeing of every child. We make sure that our children get
                the right attention to grow up to be happy, healthy and
                confident.
              </p>
              <div className="call-media">
                <div className="media-icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="media-body">
                  <p className="media-info">
                    <a href="tel:099030 74955" className="text-inherit">
                      099030 74955
                    </a>
                  </p>
                </div>
              </div>
              <a href="contact-2.html" className="vs-btn wave-btn style-1">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup shapePulse d-none d-hd-block"
        style={{bottom: "40%", left: "6%"}}
      >
        <img src={dog} alt="shapes" />
      </div>
      <div
        className="shape-mockup rotate d-none d-md-block"
        style={{bottom: "40%", right: "6%"}}
      >
        <img src={star} alt="shapes" />
      </div>
    </section>
  );
};

export default AboutKKR;
