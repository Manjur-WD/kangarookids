import React from "react";


import location from "../../../assets/img/icon/location.png"
import phone from "../../../assets/img/icon/phone.png"
import email from "../../../assets/img/icon/email.png"

const ContactDetails = () => {
  return (
    <div className="contact-info-box">
      <h2 className="contact-title">Our Information</h2>
      <div className="info-media">
        <div className="media-icon">
          <img src={location} alt="icon" />
        </div>
        <div className="media-body">
          <h4 className="info-title">Office Address:</h4>
          <p className="info-text">
            Taki House, Police Station, 12 A, Rani Bhabani Rd, near Tollygunge,
            Sahanagar, Kalighat, Kolkata, West Bengal 700026
          </p>
        </div>
      </div>
      <div className="info-media">
        <div className="media-icon">
          <i
            className="fa-light fa-alarm-clock"
            style={{ color: "#a844bc", fontSize: 25 }}
          />
        </div>
        <div className="media-body">
          <h4 className="info-title">Office Timimgs:</h4>
          <p className="info-text">Monday to Friday : 10am to 4pm</p>
          <p className="info-text">Saturday : 10am to 2pm</p>
        </div>
      </div>
      <div className="info-media">
        <div className="media-icon">
          <img src={phone} alt="icon" />
        </div>
        <div className="media-body">
          <h4 className="info-title">Call Us For Help:</h4>
          <p className="info-text">
            <a href="tel:09903074955">099030 74955</a>
          </p>
          <p className="info-text">
            <a href="tel:09836376605">098363 76655</a>
          </p>
        </div>
      </div>
      <div className="info-media">
        <div className="media-icon">
          <img src={email} alt="icon" />
        </div>
        <div className="media-body">
          <h4 className="info-title">Mail info:</h4>
          <p className="info-text">
            <a href="mailto:example@quera.com">
              kolkata.rashbehari@kangarookids.co.in
            </a>
          </p>
        </div>
      </div>
      <div className="contact-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7499356361473!2d88.3423940759978!3d22.513563535130224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027115248d351d%3A0x488f3795dff6a3!2sKangaroo%20Kids%20Rashbehari!5e0!3m2!1sen!2sin!4v1724924622287!5m2!1sen!2sin"
          width="100%"
          height={600}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactDetails;
