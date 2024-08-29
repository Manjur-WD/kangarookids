import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import ContactWrapper from "./sections/ContactWrapper";
import AnimatePage from "../../components/common/AnimatePage";

const Contact = () => {
  return (
    <AnimatePage>
      <>
        <Breadcrumb
          pageTitle="Contact Us"
          navLinkPrevName="Home"
          navLinkPrev="/kangarookids"
          navLinkCurrent="Contact Us"
        />
        <ContactWrapper />
      </>
    </AnimatePage>
  );
};

export default Contact;
