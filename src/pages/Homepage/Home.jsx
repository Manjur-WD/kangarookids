import React from "react";
import HeroSlider from "./sections/HeroSlider";
import ServiceSection from "./sections/ServiceSection";
import WelcomeToKKR from "./sections/WelcomeToKKR";
import ClassSection from "./sections/ClassSection";
import TeamSection from "./sections/TeamSection";
import Appoinment from "./sections/Appoinment";
import CalendarSection from "./sections/CalendarSection";
import PageWithLoader from "../../components/common/PageWithLoader";

const Home = () => {
  return (
    <PageWithLoader>
      <>
        <HeroSlider />
        <ServiceSection />
        <WelcomeToKKR />
        <ClassSection />
        <TeamSection />
        <Appoinment />
        <CalendarSection />
      </>
    </PageWithLoader>
  );
};

export default Home;
