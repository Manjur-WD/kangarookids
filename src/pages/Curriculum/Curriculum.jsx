import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import CurriculumVideos from "./sections/CurriculumVideos";

const Curriculum = () => {
  return (
    <>
      <Breadcrumb
        pageTitle="Curriculum"
        navLinkPrevName="Home"
        navLinkPrev="/kangarookids"
        navLinkCurrent="Curriculum"
      />
      <CurriculumVideos />
    </>
  );
};

export default Curriculum;
