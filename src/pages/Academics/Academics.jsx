import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import AcademicsDetails from "./sections/AcademicsDetails";
import AnimatePage from "../../components/common/AnimatePage";

const Academics = () => {
  return (
    <AnimatePage>
      <>
        <Breadcrumb
          pageTitle="Academics"
          navLinkPrev="/kangarookids"
          navLinkCurrent="Academics"
          navLinkPrevName="Home"
        />
        <AcademicsDetails />
      </>
    </AnimatePage>
  );
};

export default Academics;
