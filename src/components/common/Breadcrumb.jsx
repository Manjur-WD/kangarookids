import React from "react";
import breadcrumbBG from "../../assets/img/bg/about_us_banner.png";
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageTitle, navLinkPrev, navLinkCurrent }) => {
  return (
    <>
      <>
        {/*======== Breadcrumb Section ========*/}
        <div
          className="breadcumb-wrapper background-image1"
          style={{ backgroundImage: `url(${breadcrumbBG})` }}
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{pageTitle}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to={navLinkPrev}>Home</Link>
                </li>
                <li className="active">{navLinkCurrent}</li>
              </ul>
            </div>
          </div>
        </div>
        {/*======== / Breadcrumb Section ========*/}
      </>
    </>
  );
};

export default Breadcrumb;
