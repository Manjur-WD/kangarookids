import React, { useEffect, useState } from "react";
import logo from "../../assets/img/kkr/kkr-logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const handleNavMenu = () => {
    setMobileNavMenu(true);
  };
  const closeMenu = () => {
    setMobileNavMenu(false);
  };

  const handleSidebar = () => {
    setSideBarMenu(true);
  };

  const closeSideBar = () => {
    setSideBarMenu(false);
  };

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [mobileNavMenu, setMobileNavMenu] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setScrollValue(window.scrollY);
    };
  }, [scrollValue]);

  return (
    <>
      {/* Side menu start */}
      <div
        className={sideBarMenu ? "sidemenu-wrapper show" : "sidemenu-wrapper"}
      >
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls" onClick={closeSideBar}>
            <i className="far fa-times" />
          </button>
          <div className="widget footer-widget">
            <div className="vs-widget-about">
              <div className="about-logo">
                <a href="index.html">
                  <img src={logo} alt="KKR" />
                </a>
              </div>
              <div className="multi-social">
                <a
                  href="https://www.facebook.com/kkelrashbehari"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://www.instagram.com/kangarookidsrashbehari/"
                  target="_blank"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ backgroundColor: "#E1306C" }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@KangarooKidsRashbehari-eb3df/featured"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
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
                <a href="mailto:info@Knirpseteam.com">
                  kolkata.rashbehari@kangarookids.co.in
                </a>
              </p>
              <p className="footer-info">
                <i className="fas fa-phone-alt" />
                <a href="tel:099030 74955">099030 74955</a>
              </p>
            </div>
          </div>
          {/* <div className="widget footer-widget">
            <h4 className="widget_title">News Feed</h4>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/blog-thumb-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-alt" /> 25th March, 2023
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="blog-details.html">
                      User’s Pepare Using Story Guide Yes
                    </a>
                  </h4>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/blog-thumb-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-alt" /> 25th March, 2023
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="blog-details.html">
                      How to prepare child for examination
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Side menu end */}
      {/*vs-mobile-menu start*/}
      <div
        className={
          mobileNavMenu ? "vs-menu-wrapper vs-body-visible" : "vs-menu-wrapper"
        }
      >
        <div className="vs-menu-area">
          <button className="vs-menu-toggle" onClick={closeMenu}>
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="vs-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
              <NavLink to="/kangarookids" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="menu-item-has-children">
                <a href="class-details1.html">Academics</a>
              </li>
              <li className="menu-item-has-children">
                <a href="service-details.html">Curriculum</a>
              </li>
              <li className="menu-item-has-children">
                <a href="gallery.html">Gallery</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Events</a>
                <ul className="sub-menu">
                  <li className="text-warning d-block fs-5 border-warning p-2 border-bottom text-center">
                    Sports Day
                  </li>
                  <li>
                    <a className="dropdown-item" href="jkg.html">
                      JR KG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="nurs.html">
                      Nursery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="prenurse.html">
                      Pre Nursery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="ttp.html">
                      TTP
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="misc.html">
                      Miscellaneous
                    </a>
                  </li>
                </ul>
                <ul className="sub-menu">
                  <li className="text-warning d-block fs-5 border-warning p-2 border-bottom text-center">
                    Annual Concert 2024
                  </li>
                  <li>
                    <a className="dropdown-item" href="jkg.html">
                      JR KG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="nurs.html">
                      Nursery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="prenurse.html">
                      Pre Nursery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="ttp.html">
                      TTP
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="misc.html">
                      Miscellaneous
                    </a>
                  </li>
                </ul>
                <ul className="sub-menu">
                  <li className="text-warning d-block fs-5 border-warning p-2 border-bottom text-center">
                    Summer Camp 2024
                  </li>
                  <li>
                    <a className="dropdown-item" href="summer-camp-day-1.html">
                      Day-1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="summer-camp-day-2.html">
                      Day-2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="summer-camp-day-3.html">
                      Day-3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="summer-camp-day-4.html">
                      Day-4
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="summer-camp-day-5.html">
                      Day-5
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="summer-camp-day-6.html">
                      Day-6
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="principle-speak.html">Principal's Speak</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* Menu Will Append With Javascript */}
        </div>
      </div>
      {/*vs-mobile-menu end*/}
      {/*======== Header ========*/}
      <header className="vs-header">
        {/*header-top-wrapper start*/}
        <div className="header-top-area d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fal fa-phone" />
                      <a href="tel:099030 74955">099030 74955</a>
                    </li>
                    <li>
                      <i className="fal fa-map-marker-alt" />
                      12 A, Rani Bhabani Rd, near Tollygunge, Sahanagar,
                      Kalighat, Kolkata, West Bengal 700026
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/kkelrashbehari"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/kangarookidsrashbehari/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@KangarooKidsRashbehari-eb3df/featured"
                        target="_blank"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*header-top-wrapper end*/}
        {/*vs-main-menu-wrapper start*/}
        <div
          className={
            scrollValue > 200 ? "sticky-wrapper will-sticky" : "sticky-wrapper"
          }
        >
          <div
            className={
              scrollValue > 200 ? "sticky-active active" : "sticky-active"
            }
          >
            <div className="header-menu-area">
              <div className="container-fluid w-75 position-relative">
                <div className="row gx-20 align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <a href="index.html">
                        <img
                          src={logo}
                          alt="logo"
                          style={{ paddingBottom: 10 }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <nav className="main-menu menu-style1 d-none d-lg-inline-block">
                      <ul>
                        <li className="menu-item-has-children">
                          <NavLink to="/kangarookids" className="menu-link" >Home</NavLink>
                        </li>
                        <li className="menu-item-has-children">
                          <NavLink to="/about" className="menu-link">About</NavLink>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="class-details1.html">Academics</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="service-details.html">Curriculum</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Events</a>
                          <ul className="sub-menu d-flex gap-4">
                            <ul>
                              <li className="text-warning d-block fs-5 border-warning p-2 border-bottom text-center">
                                Sports Day
                              </li>
                              <li>
                                <a className="dropdown-item" href="jkg.html">
                                  JR KG
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="nurs.html">
                                  Nursery
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="prenurse.html"
                                >
                                  Pre Nursery
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="ttp.html">
                                  TTP
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="misc.html">
                                  Miscellaneous
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li className="text-warning d-block fs-5 border-warning p-2 border-bottom text-center">
                                Annual Concert 2024
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="anc_jkg.html"
                                >
                                  JR KG
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="anc_nur_a.html"
                                >
                                  Nursery A
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="anc_nur_b.html"
                                >
                                  Nursery B
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="anc_pn_a.html"
                                >
                                  Pre Nursery A
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="anc_pn_b.html"
                                >
                                  Pre Nursery B
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="anc_ttp_a.html"
                                >
                                  TTP A
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  TTP B
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li className="text-warning d-block fs-5 border-warning p-2 border-bottom text-center">
                                Summer Camp 2024
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="summer-camp-day-1.html"
                                >
                                  Day-1
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="summer-camp-day-2.html"
                                >
                                  Day-2
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="summer-camp-day-3.html"
                                >
                                  Day-3
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="summer-camp-day-4.html"
                                >
                                  Day-4
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="summer-camp-day-5.html"
                                >
                                  Day-5
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="summer-camp-day-6.html"
                                >
                                  Day-6
                                </a>
                              </li>
                            </ul>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="principle-speak.html">Principal's Speak</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                    <button
                      type="button"
                      className="vs-menu-toggle d-block d-lg-none"
                      onClick={handleNavMenu}
                    >
                      <i className="far fa-bars" /> Menu
                    </button>
                  </div>
                  <div className="col-auto d-none d-xl-block">
                    <div className="header-button">
                      <a href="contact.html" className="vs-btn wave-btn">
                        Book a visit
                      </a>

                      <button
                        type="button"
                        className="sideMenuToggler icon-btn"
                        onClick={handleSidebar}
                      >
                        <i className="fal fa-bars" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*vs-main-menu-wrapper end*/}
      </header>
      {/*======== / Header ========*/}
      {/* <!-- Scroll To Top --> */}
      <button
        type="button"
        onClick={scrolltoTop}
        className={
          scrollValue > 400
            ? "border-0 bg-transparent scrollToTop scroll-btn show"
            : "border-0 bg-transparent scrollToTop scroll-btn"
        }
      >
        <i class="far fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Header;
