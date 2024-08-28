import React from "react";
import "animate.css"

import unscreenGif from "../../assets/img/kkr/14V9-unscreen.gif";
import logo from "../../assets/img/kkr/kkr-logo.png";

const Preloader = () => {
  return (
    <>
      {/*========== Preloader =========*/}
      <div className="preloader">
        <div className="preloader-content">
          <img src={unscreenGif} alt="" className="img1" />
          <img
            src={logo}
            alt="logo"
            className="img2 animate__animated animate__swing animate__slow animate__infinite"
          />
        </div>
      </div>
    </>
  );
};

export default Preloader;
