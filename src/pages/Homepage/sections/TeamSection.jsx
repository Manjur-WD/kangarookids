import React from "react";
import teamGroup from "../../../assets/img/group.jpg";
import rainbowStar from "../../../assets/img/shape/rainbow-star.png";
import note from "../../../assets/img/icon/note.png";
import bird from "../../../assets/img/icon/bird.png";


const TeamSection = () => {
  return (
    <>
      {/*======== Teacher Group Section Section ========*/}
      <section className="appointment-section shape-mockup-wrap">
        <div className="container">
          <div className="row gx-60 gy-30 flex-column-reverse flex-lg-row align-items-center">
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
              <div className="text-center text-lg-start">
                <h2
                  className="sec-title big-title"
                  style={{ color: "#66267b" }}
                >
                  Our <span style={{ color: "#FEC20B" }}>Team</span>
                </h2>
                <p className="fs-md mb-30">
                  Welcome to Kangaroo Kids Rashbehari, an exceptional
                  International Preschool, where we take immense pride in our
                  outstanding team of teachers. Our educators are not only
                  highly qualified but also extensively trained through
                  methodical workshops and assessments. This equips them to
                  handle any situation with utmost efficiency while providing
                  the necessary acumen and resources for your child's growth.
                  Our unique teaching approach is designed to foster a love for
                  learning in children while keeping them actively engaged and
                  having fun. Learning becomes an enjoyable journey as we
                  encourage children to grasp concepts in a playful and
                  interactive manner. At Kangaroo Kids, we believe in nurturing
                  well-rounded individuals, which is why we focus on inculcating
                  a sense of ownership and leadership in our students. Our
                  curriculum is carefully structured to give children a strong
                  foundation, helping them develop their vocabulary, social
                  skills, behavior, and hygiene.{" "}
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInLeft appointment-form"
              data-wow-delay="0.1s"
            >
              <img
                src={teamGroup}
                alt="team"
                className="educators"
              />
            </div>
          </div>
        </div>
        <div
          className="shape-mockup z-index-3 d-none d-hd-block"
          style={{bottom:"-8%", right: "0%" }}
        >
          <img src={rainbowStar} alt="shapes" />
        </div>
        <div
          className="shape-mockup moving d-none d-hd-block"
          style={{top:"22%", left: "7%" }}
        >
          <img src={note} alt="shapes" />
        </div>
        <div
          className="shape-mockup shapePulse d-none d-hd-block"
          style={{bottom:"20%", left: "7%" }}
        >
          <img src={bird} alt="shapes" />
        </div>
      </section>
      {/*======== / Teacher Group Section ========*/}
    </>
  );
};

export default TeamSection;
