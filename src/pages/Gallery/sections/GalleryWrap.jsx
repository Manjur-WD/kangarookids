import React from "react";
import GalleryCategorySIdebar from "./GalleryCategorySIdebar";
import GalleryImageContainer from "./GalleryImageContainer";

const GalleryWrap = () => {
  return (
    <>
      <section className="gallery-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <GalleryCategorySIdebar />
            </div>
            <div className="col-md-9">
              <GalleryImageContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryWrap;
