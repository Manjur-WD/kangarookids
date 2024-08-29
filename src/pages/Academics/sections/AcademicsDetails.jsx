import React from "react";
import AcademicsSlider from "./AcademicsSlider";
import AcademicRegisterForm from "./AcademicRegisterForm";

const AcademicsDetails = () => {
  return (
    <>
      {/*======== Class Section ========*/}
      <section className="class-section bg-smoke space-page">
        <div className="container">
          <div className="row gx-60">
            <div className="col-xl-8 col-lg-7">
              <div className="class-details">
                
                <AcademicsSlider />
                {/* TODDLERS */}
                <h2
                  className="single-title"
                  id="td"
                  style={{ scrollMarginTop: 10 }}
                >
                  Toddlers (10 months -1.5 years)
                </h2>
                <div className="service-content">
                  <p>
                    KKR teachers establish secure and positive relationships
                    welcoming you and your infant into a warm, safe and clean
                    environment. Our low teacher- to- child ratios allow time to
                    create a trusting relationship time to create a trusting
                    relationship between parents, their children and our caring
                    educators. Curriculum components:
                  </p>
                  <div className="check-list style-4">
                    <ul>
                      <li>Music Movement</li>
                      <li>Social Skill</li>
                      <li>Hello Time</li>
                      <li>Self Help Skills</li>
                      <li>Focused Learning</li>
                      <li>Communication</li>
                      <li>Singing Songs</li>
                      <li>Outdoor Activities</li>
                      <li>Task Practice</li>
                    </ul>
                  </div>
                </div>
                <hr />
                {/* TODDLERS TRANSISTION */}
                <h2
                  className="single-title"
                  id="tdtr"
                  style={{ scrollMarginTop: 10 }}
                >
                  Toddlers Transition (1.5 years- 2 years)
                </h2>
                <div className="service-content">
                  <p>
                    Toddlers are transitioning from infancy to the mobile,
                    independent world of pre-schoolers. Language development
                    accelerates during this period our teachers focus and
                    enhance verbalization and skill development. Curriculum
                    components:
                  </p>
                  <div className="check-list style-4">
                    <ul>
                      <li>Music Movement</li>
                      <li>Social Skill</li>
                      <li>Hello Time</li>
                      <li>Self Help Skills</li>
                      <li>Focused Learning</li>
                      <li>Communication</li>
                      <li>Singing Songs</li>
                      <li>Outdoor Activities</li>
                      <li>Task Practice</li>
                    </ul>
                  </div>
                </div>
                <hr />
                {/* PRE NURSERY */}
                <h2
                  className="single-title"
                  id="pn"
                  style={{ scrollMarginTop: 10 }}
                >
                  Pre-Nursery (2 years-3 years)
                </h2>
                <div className="service-content">
                  <p>
                    Pre-schoolers are eager learners! The increased fine and
                    gross motor control and growing communication skills enable
                    them to participate in more independent activities as they
                    pursue their natural curiosity to explore and integrate and
                    discover their world. At KKR, monthly, theme-based learning
                    plans meet individualized needs through research-based
                    activities.
                  </p>
                  <div className="check-list style-4">
                    <ul>
                      <li>Music Movement</li>
                      <li>Social Skill</li>
                      <li>Hello Time</li>
                      <li>Self Help Skills</li>
                      <li>Focused Learning</li>
                      <li>Communication</li>
                      <li>Singing Songs</li>
                      <li>Outdoor Activities</li>
                      <li>Task Practice</li>
                    </ul>
                  </div>
                </div>
                <hr />
                {/* NURSERY */}
                <h2
                  className="single-title"
                  id="nu"
                  style={{ scrollMarginTop: 10 }}
                >
                  Nursery (3 years- 4 years)
                </h2>
                <div className="service-content">
                  <p>
                    At KKR, children are engaged in pre- reading, cognition and
                    social and emotional development. Children are +rapidly
                    advancing in skills necessary for kindergarten readiness.
                    Curriculum components:
                  </p>
                  <div className="check-list style-4">
                    <ul>
                      <li>Music Movement</li>
                      <li>Social Skill</li>
                      <li>Hello Time</li>
                      <li>Self Help Skills</li>
                      <li>Focused Learning</li>
                      <li>Communication</li>
                      <li>Singing Songs</li>
                      <li>Outdoor Activities</li>
                      <li>Task Practice</li>
                    </ul>
                  </div>
                </div>
                <hr />
                {/* JUNIOR KINDERGARTEN */}
                <h2
                  className="single-title"
                  id="jk"
                  style={{ scrollMarginTop: 10 }}
                >
                  Junior Kindergarten (4 years- 5 years)
                </h2>
                <div className="service-content">
                  <p>
                    At KKR, our junior kindergarten students discover their
                    potential, eagerly explore new concepts and are inspired to
                    be adventurous learners! Curriculum components:
                  </p>
                  <div className="check-list style-4">
                    <ul>
                      <li>Music Movement</li>
                      <li>Social Skill</li>
                      <li>Hello Time</li>
                      <li>Self Help Skills</li>
                      <li>Focused Learning</li>
                      <li>Communication</li>
                      <li>Singing Songs</li>
                      <li>Outdoor Activities</li>
                      <li>Task Practice</li>
                    </ul>
                  </div>
                </div>
                <hr />
                {/* SENIOR KINDERGARTEN */}
                <h2
                  className="single-title"
                  id="sk"
                  style={{ scrollMarginTop: 10 }}
                >
                  Senior Kindergarten (5 years-6 years)
                </h2>
                <div className="service-content">
                  <p>
                    At KKR, our senior kindergarten students discover their
                    potential, eagerly explore new concepts and are inspired to
                    be adventurous learners! Curriculum components:
                  </p>
                  <div className="check-list style-4">
                    <ul>
                      <li>Music Movement</li>
                      <li>Social Skill</li>
                      <li>Hello Time</li>
                      <li>Self Help Skills</li>
                      <li>Focused Learning</li>
                      <li>Communication</li>
                      <li>Singing Songs</li>
                      <li>Outdoor Activities</li>
                      <li>Task Practice</li>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>{" "}
              {/* / class details */}
            </div>{" "}
            {/* / col-8 end */}
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-5">
              <AcademicRegisterForm />
            </div>
          </div>
        </div>
      </section>
      {/*======== / Class Section ========*/}
    </>
  );
};

export default AcademicsDetails;
