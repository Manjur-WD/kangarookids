import React, { useState } from "react";

const AcademicRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedClass: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <aside className="sidebar-area class-sidebar">
      <div className="vs-register-form">
        <div className="form-title">
          <h3 className="blog-inner-title">Register For Your Child</h3>
        </div>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-12 form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="form-control style2"
              value={formData.name}
              onChange={handleChange}
            />
            <i className="fal fa-user" />
          </div>

          <div className="col-md-12 form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="form-control style2"
              value={formData.email}
              onChange={handleChange}
            />
            <i className="fal fa-envelope" />
          </div>

          <div className="form-group col-12">
            <label htmlFor="classselect">Select Class</label>
            <select
              id="classselect"
              name="selectedClass"
              className="form-select style2"
              value={formData.selectedClass}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Select Class</option>
              <option value="languageclass">Toddlers (10 months - 1.5 years)</option>
              <option value="mathematicsclass">Toddlers Transition (1.5 years - 2 years)</option>
              <option value="kidsonlineclass">Pre-Nursery (2 years - 3 years)</option>
              <option value="practicalclasses">Nursery (3 years - 4 years)</option>
              <option value="kidsonlineclass">Junior Kindergarten (4 years - 5 years)</option>
              <option value="practicalclasses">Senior Kindergarten (5 years - 6 years)</option>
            </select>
          </div>

          <div className="col-12 form-group">
            <label htmlFor="commentForm">Write a Comment</label>
            <textarea
              id="commentForm"
              name="comment"
              placeholder="Write a Comment"
              className="form-control style2"
              value={formData.comment}
              onChange={handleChange}
            />
            <i className="far fa-pencil-alt" />
          </div>

          <div className="col-12 form-group">
            <button type="submit" className="vs-btn">
              <i className="fal fa-paper-plane" /> Register Now
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default AcademicRegisterForm;
