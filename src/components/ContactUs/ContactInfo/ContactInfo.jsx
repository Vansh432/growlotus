import React from "react";
import "./ContactInfo.css";
import { callContact, email, office } from "../../../assets/index.js";

const ContactInfo = () => {
  return (
    <>
      <h3 className="contactContent">Contact Information</h3>
      <div className="contact-info-container text-center">
        <div className="contact-info-item">
          <img src={email} alt="Email Support" className="m-auto" />
          <h3>Email Support</h3>
          <p>Our team responds in real time</p>
          <a href="mailto:Info@growlotusfintech.com
">Info@growlotusfintech.com
</a>
        </div>
        <div className="contact-info-item">
          <img src={callContact} alt="Call Us" />
          <h3>Call Us</h3>
          <p>Available office time</p>
          <a href="tel:0214-422-5516">1800 180 1800
</a>
        </div>
        <div className="contact-info-item">
          <img src={office} alt="Office Address" />
          <h3>Office Address</h3>
          <p>Visit our location in real life</p>
          <a >302, 3rd Floor, <br/> Global Foyer Mall
Golf Course Road, Gurugram
Haryana, <br/>India 122009</a>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
