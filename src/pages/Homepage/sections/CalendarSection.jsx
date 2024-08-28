import React, { useEffect } from "react";
import $ from "jquery";
import "evo-calendar/evo-calendar/css/evo-calendar.css";
import "evo-calendar/evo-calendar/js/evo-calendar";


import car2 from "../../../assets/img/icon/car-2.png";
import sun from "../../../assets/img/icon/sun.png";
import math1 from "../../../assets/img/icon/math-1.png";

const CalendarSection = () => {

    useEffect(()=>{
        $("#evoCalendar").evoCalendar({
            calendarEvents: [
              {
                id: 'event1', // Event's ID (required)
                name: "Event - Nature Conservation Day", // Event name (required)
                date: "July/27/2024", // Event date (required)
                everyYear: true ,// Same event every year (optional)
                 description: `Event - Nature Conservation Day`, // Event description (optional)
                type: "event",
                color: "#66267b" // Event custom color (optional)
              },
              {
                id: 'event2', // Event's ID (required)
                name: "Independence Day", // Event name (required)
                date: "August/15/2024", // Event date (required)
                everyYear: true ,// Same event every year (optional)
                 description: `Independence Day`, // Event description (optional)
                type: "event",
                color: "#66267b" // Event custom color (optional)
              },
              {
                id: 'event2', // Event's ID (required)
                name: "Raksha Bandhan", // Event name (required)
                date: "August/19/2024", // Event date (required)
                everyYear: true ,// Same event every year (optional)
                 description: `Raksha Bandhan`, // Event description (optional)
                type: "event",
                color: "#66267b" // Event custom color (optional)
              },
            //   {
            //   id: 'event3', // Event's ID (required)
            //   name: " Raksha Bandhan", // Event name (required)
            //   date: ["August/19/2024", "May/18/2024"], // Start and end dates of the event (required)
            //   description: " Raksha Bandhan", // Event description (optional)
            //   type: "event",
            //   color: "#ff0000" // Event custom color (optional)
            // }
              
            ]
          });

          return () => {
            $('#calendar').evoCalendar('destroy'); // Cleanup the calendar on component unmount
          };
    })
  return (
    <>
      {/*======== / Calendar Section ========*/}
      <section className="team-section bg-smoke space-top space-extra-bottom shape-mockup-wrap">
        <div className="container">
          <div
            className="row text-center justify-content-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
              <div className="title-area">
                <h2 className="sec-title" style={{ color: "#66267b" }}>
                  Upcoming<span style={{ color: "#FEC20B" }}> Events</span>
                </h2>
              </div>
            </div>
            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.1s">
              <div id="evoCalendar" />
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-center d-none">
            <button className="vs-btn wave-btn style-1 evnt">
              Event Details
              <span className="btn-hover">
                <span className="btn-hover-inner">
                  <span className="part part-1" />
                  <span className="part part-1" />
                  <span className="part part-1" />
                  <span className="part part-1" />
                </span>
              </span>
            </button>
          </div>
          <div className="event-details d-none">
            <div className="row justify-content-center pt-5 ">
              <div className="col-md-12">
                <div className="close">
                  <i className="fa-solid fa-circle-xmark" /> close
                </div>
                <div className="title-area text-center">
                  <span className="sub-title">
                    <i
                      className="fa-solid fa-calendar-days"
                      style={{ color: "#FEC20B" }}
                    />{" "}
                    29th July , 2023
                  </span>
                  <h2 className="sec-title">
                    Health and Child Development Session
                  </h2>
                </div>
                <div className="d-flex justify-content-center">
                  <img src="assets/img/event/ev1.jpg" alt="blog" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup movingX d-none d-sm-block"
          data-top="18%"
          data-left="12%"
          style={{top: "18%", left: "12%"}}
        >
          <img src={car2} alt="shapes" />
        </div>
        <div
          className="shape-mockup shapePulse d-none d-hd-block"
          data-bottom="20%"
          data-left="5%"
          style={{bottom: "20%", left: "5%"}}
        >
          <img src={sun} alt="shapes" />
        </div>
        <div
          className="shape-mockup moving d-none d-hd-block"
          data-bottom="10%"
          data-right="4%"
          style={{bottom: "10%", right: "4%"}}
        >
          <img src={math1} alt="shapes" />
        </div>
      </section>
      {/*======== / Calendar Section ========*/}
    </>
  );
};

export default CalendarSection;
