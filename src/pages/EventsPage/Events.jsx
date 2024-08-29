import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import EventsWrap from "./sections/EventsWrap";
import AnimatePage from "../../components/common/AnimatePage";

const Events = () => {
  return (
    <AnimatePage>
      <>
        <Breadcrumb
          pageTitle="Events"
          navLinkPrevName="Home"
          navLinkPrev="/kangarookids"
          navLinkCurrent="Events"
        />
        <EventsWrap />
      </>
    </AnimatePage>
  );
};

export default Events;
