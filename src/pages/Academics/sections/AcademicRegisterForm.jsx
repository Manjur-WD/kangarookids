import React from "react";

const AcademicRegisterForm = () => {
  return (
    <>
      {/* Register Form */}
      <div className="vs-register-form">
        <div className="form-title">
          <h3 className="blog-inner-title">Register For Your Child</h3>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input
              type="text"
              placeholder="Your Name"
              className="form-control style2"
            />
            <i className="fal fa-user" />
          </div>
          <div className="col-md-12 form-group">
            <input
              type="text"
              placeholder="Your Email"
              className="form-control style2"
            />
            <i className="fal fa-envelope" />
          </div>
          <div className="form-group col-12">
            <select
              name="classes"
              id="classselect"
              className="form-select style2"
            >
              <option value="" disabled="" selected="" hidden="">
                Select Class
              </option>
              <option value="languageclass">
                Toddlers (10 months -1.5 years)
              </option>
              <option value="mathematicsclass">
                Toddlers Transition (1.5 years- 2 years)
              </option>
              <option value="kidsonlineclass">
                Pre-Nursery (2 years-3 years)
              </option>
              <option value="practicalclasses">
                Nursery (3 years- 4 years)
              </option>
              <option value="kidsonlineclass">
                Junior Kindergarten (4 years- 5 years)
              </option>
              <option value="practicalclasses">
                Senior Kindergarten (5 years-6 years)
              </option>
            </select>
          </div>
          <div className="col-12 form-group">
            <textarea
              placeholder="Write a Comment"
              id="commentForm"
              className="form-control style2"
              defaultValue={""}
            />
            <i className="far fa-pencil-alt" />
          </div>
          <div className="col-12 form-group">
            <button className="vs-btn">
              <i className="fal fa-paper-plane" /> Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicRegisterForm;
