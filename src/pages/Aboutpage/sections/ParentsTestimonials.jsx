import React, { useRef } from "react";
import Slider from "react-slick";

import women1 from "../../../assets/img/icon/woman.png"
import women2 from "../../../assets/img/icon/woman2.png"
import women3 from "../../../assets/img/icon/woman3.png"

const ParentsTestimonials = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // Screen width less than 1200px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
          dots: false, // Disable dots on small screens if desired
        },
      },
    ],
  };

  return (
    <>
      {/*======== Testimonial Section ========*/}
      <section className="testimonial-section">
        <div className="container">
          <div className="row gy-30 align-items-center">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="text-center text-lg-start">
                <h2 className="sec-title" style={{ color: "#66267b" }}>
                  Parents <span style={{ color: "#FEC20B" }}>Testimonial</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider
                {...settings}
                ref={sliderRef}
                className="shape-slider vs-carousel"
              >
                {/* Single Class */}
                <div className="px-2 wow fadeInUp h-100" data-wow-delay="0.1s">
                  <div className="testi-box h-100">
                    <div className="testi-avater">
                      <img src={women1} alt="testimonial" />
                      <i className="fa-solid fa-quote-left" />
                    </div>
                    {/*<h4 class="testi-title">They Are Amazing</h4>*/}
                    <p className="testi-text">
                      Kangaroo Kids keeps the children engaged in various
                      activities, including playing games, artwork, and physical
                      activities. The teachers are also actively involved with
                      the children. Overall, it is a great experience for both
                      parents and the children.{" "}
                    </p>
                    <div className="testi-author">
                      <h5 className="name">Madhulika Chatterjee</h5>
                      <span className="desig">Guardian</span>
                    </div>
                  </div>
                </div>
                {/* Single Class */}
                <div
                  className="px-2 col-lg-4 col-md-6 wow fadeInUp h-100"
                  data-wow-delay="0.1s"
                >
                  <div className="testi-box h-100">
                    <div className="testi-avater">
                      <img
                        src={women2}
                        alt="testimonial"
                      />
                      <i className="fa-solid fa-quote-left" />
                    </div>
                    {/*<h4 class="testi-title">They Are Like Family</h4>*/}
                    <p className="testi-text">
                      My daughter, Saanvi Sural, is fond of Kangaroo Kids
                      School, where the teachers are pillars of support,
                      protecting your child with a motherly touch. Currently,
                      she is 3 years and 10 months old, attending Heritage
                      School. Nevertheless, I don't miss a single chance to
                      visit her foundation school at Kangaroo Kids. This year,
                      in 2023, she once again enjoyed her summer camp at
                      Kangaroo Kids. I want to extend my heartfelt gratitude to
                      the teachers, principal, and Didi's of Kangaroo Kids for
                      the warm welcome and excellent care they provide. Thank
                      you!
                    </p>
                    <div className="testi-author">
                      <h5 className="name">Sayonika Pratihar</h5>
                      <span className="desig">Guardian</span>
                    </div>
                  </div>
                </div>
                {/* Single Class */}
                <div
                  className="px-2 col-lg-4 col-md-6 wow fadeInUp h-100"
                  data-wow-delay="0.1s"
                >
                  <div className="testi-box h-100">
                    <div className="testi-avater">
                      <img
                        src={women3}
                        alt="testimonial"
                      />
                      <i className="fa-solid fa-quote-left" />
                    </div>
                    {/*<h4 class="testi-title">My Child Enjoyed</h4>*/}
                    <p className="testi-text">
                      My daughter, Alotriya Basu Roy Chowdhuri, along with her
                      two friends and other new friends, has enjoyed and learned
                      a lot in the past week. Even though she is not a regular
                      student at Kangaroo Kids Rashbehari, the teachers and
                      other non-teaching staff were amazing and caring. We would
                      love to experience it again. Thank you, KKR Rashbehari.
                    </p>
                    <div className="testi-author">
                      <h5 className="name">Poulami Chakroborty</h5>
                      <span className="desig">Guardian</span>
                    </div>
                  </div>
                </div>
               
              </Slider>
              
            </div>
          </div>
        </div>
      </section>
      {/*======== / Testimonial Section ========*/}
    </>
  );
};

export default ParentsTestimonials;
