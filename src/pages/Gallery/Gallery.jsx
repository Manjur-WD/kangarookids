import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import GalleryWrap from "./sections/GalleryWrap";
import AnimatePage from "../../components/common/AnimatePage";

const Gallery = () => {
  return (
    <AnimatePage>
      <>
        <Breadcrumb
          pageTitle="Gallery"
          navLinkPrevName="Home"
          navLinkPrev="/kangarookids"
          navLinkCurrent="Gallery"
        />
        <GalleryWrap />
      </>
    </AnimatePage>
  );
};

export default Gallery;
