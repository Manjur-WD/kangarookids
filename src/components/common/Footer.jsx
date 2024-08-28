import React from "react";
import logo from "../../assets/img/kkr/kkr-logo.png";
import sun3 from "../../assets/img/icon/sun-3.png";
import butterfly from "../../assets/img/icon/butterfly.png";
import butterflySM from "../../assets/img/icon/butterfly-sm.png";
import footer3 from "../../assets/img/bg/footer-3.png";
import "../../assets/css/style.css";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1 background-image shape-mockup-wrap"
      style={{
        background: `url(${footer3}) no-repeat bottom/contain`,
        backgroundColor: "#dbeaf7",
      }}
    >
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            {/* About Widget */}
            <div
              className="col-xl-auto col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="widget footer-widget">
                <div className="vs-widget-about">
                  <div className="about-logo">
                    <a href="/">
                      <img src={logo} alt="KKR" />
                    </a>
                  </div>
                  <p className="about-text">
                    Operating since 2019, Kangaroo Kids Rashbehari has made a
                    mark in providing premium education, right values, healthy
                    environment, and the care and protection that a child needs
                    at the early stage of life.
                  </p>
                  <div className="multi-social">
                    <a
                      href="https://www.facebook.com/kkelrashbehari"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/kangarookidsrashbehari/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fab fa-instagram"
                        style={{ backgroundColor: "#E1306C" }}
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@KangarooKidsRashbehari-eb3df/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Widget - Details Info */}
            <div
              className="col-xl-auto col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="widget footer-widget widget_nav_menu">
                <h4 className="widget_title">Details Info</h4>
                <ul className="menu">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/curriculum">Curriculum</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Widget - Quick Links */}
            <div
              className="col-xl-auto col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="widget footer-widget widget_nav_menu">
                <h4 className="widget_title">Quick Links</h4>
                <ul className="menu">
                  <li>
                    <a href="/academics">Academics</a>
                  </li>
                  <li>
                    <a href="/teacher-speak">Teachers Speak</a>
                  </li>
                  <li>
                    <a href="/principle-speak">Principal's Speak</a>
                  </li>
                  <li>
                    <h4 className="widget_title mt-3">Sports Day</h4>
                    <ul>
                      <li>
                        <a href="/ttp">TTP</a>
                      </li>
                      <li>
                        <a href="/nurs">Nursery</a>
                      </li>
                      <li>
                        <a href="/prenurse">Pre Nursery</a>
                      </li>
                      <li>
                        <a href="/jkg">JR Kg</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Widget - Contact Us */}
            <div
              className="col-xl-auto col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact Us</h3>
                <div className="vs-widget-contact">
                  <p className="footer-info">
                    <i className="fas fa-map-marker-alt" />
                    Taki House, Police Station, 12 A, Rani Bhabani Rd, near
                    Tollygunge, Sahanagar, Kalighat, Kolkata, West Bengal 700026
                  </p>
                  <p className="footer-info">
                    <i className="fas fa-envelope" />
                    <a href="mailto:kolkata.rashbehari@kangarookids.co.in">
                      kolkata.rashbehari@kangarookids.co.in
                    </a>
                  </p>
                  <p className="footer-info">
                    <i className="fas fa-phone-alt" />
                    <a href="tel:09903074955">099030 74955</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Mockups */}
      <div
        className="shape-mockup movingX d-none d-hd-block"
        style={{ top: "7%", left: "5%" }}
      >
        <img src={sun3} alt="shape" />
      </div>
      <div
        className="shape-mockup movingX d-none d-hd-block"
        style={{ bottom: "56%", left: "33%" }}
      >
        <img src={butterfly} alt="shape" />
      </div>
      <div
        className="shape-mockup moving d-none d-hd-block"
        style={{ top: "49%", right: "36%" }}
      >
        <img src={butterflySM} alt="shape" />
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="container">
          <p className="copyright">
            © Copyright 2023 Abybaby Digital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
