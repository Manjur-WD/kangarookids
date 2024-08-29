import React from "react";
import { GrSend } from "react-icons/gr";

const ContactForm = () => {
  return (
    <div className="contact-form-box">
      <h2 className="contact-title">Leave a Message</h2>
      <form action="#" method="POST" className="contact-form ajax-contact">
        <div className="row">
          <div className="form-group col-12">
            <label htmlFor="name" className="form-label">
              Your Name*
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="David Smith..."
              required=""
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="email" className="form-label">
              Your Email*
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="info@example.com"
              required=""
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="message" className="form-label">
              Your Message*
            </label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              placeholder="Describe Your Opinion"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="form-group col-12">
            <button type="submit" className="vs-btn wave-btn">
            <GrSend className="me-2"/>
              Send Now
            </button>
          </div>
        </div>
        <p className="form-messages mb-0 mt-3" />
      </form>
    </div>
  );
};

export default ContactForm;
