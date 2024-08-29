import React from "react";
import AboutKKR from "./sections/AboutKKR";
import Breadcrumb from "../../components/common/Breadcrumb";
import MissionVision from "./sections/MissionVision";
import WorkProcess from "./sections/WorkProcess";
import ParentsTestimonials from "./sections/ParentsTestimonials";
import AnimatePage from "../../components/common/AnimatePage";

const About = () => {
  return (
    <AnimatePage>
      <>
        <Breadcrumb
          pageTitle="About Us"
          navLinkPrevName="Home"
          navLinkPrev="/kangarookids"
          navLinkCurrent="About Us"
        />
        <AboutKKR />
        <MissionVision />
        <WorkProcess />
        <ParentsTestimonials />
      </>
    </AnimatePage>
  );
};

export default About;
