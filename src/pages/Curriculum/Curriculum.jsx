import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import CurriculumVideos from "./sections/CurriculumVideos";
import AnimatePage from "../../components/common/AnimatePage";

const Curriculum = () => {
  return (
    <AnimatePage>
      <>
        <Breadcrumb
          pageTitle="Curriculum"
          navLinkPrevName="Home"
          navLinkPrev="/kangarookids"
          navLinkCurrent="Curriculum"
        />
        <CurriculumVideos />
      </>
    </AnimatePage>
  );
};

export default Curriculum;
