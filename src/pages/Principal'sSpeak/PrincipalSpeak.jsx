import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import TeachersSpeakSection from "./sections/TeachersSpeakSection";
import AnimatePage from "../../components/common/AnimatePage";

const PrincipalSpeak = () => {
  return (
    <AnimatePage>
      <>
        <Breadcrumb
          pageTitle="Principal's Speak"
          navLinkPrevName="Home"
          navLinkPrev="/kangarookids"
          navLinkCurrent="Principal's Speak"
        />
        <TeachersSpeakSection />
      </>
    </AnimatePage>
  );
};

export default PrincipalSpeak;
