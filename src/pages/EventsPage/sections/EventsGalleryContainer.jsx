import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaImage } from "react-icons/fa";

const EventsGalleryContainer = () => {
  // Create an array with 6 elements for the gallery items
  const items = new Array(8).fill(null);
  return (
    <>
      <div className="events-gallery-container">
      <div className="row">
        {items.map((_, index) => (
          <div className="col-md-3 col-6 mb-4" key={index}>
            <div className="project-card">
              <div className="project-img position-relative">
                <FaImage
                  className="text-white fs-1 position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "99"
                  }}
                />
                <Skeleton style={{ height: "300px" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default EventsGalleryContainer;
