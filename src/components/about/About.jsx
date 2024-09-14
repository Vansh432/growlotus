import React from "react";
import "./About.css";
import { about, about1, about2, about3 } from "../../assets/index.js";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About</h2>
            <p >
              Grow Lotus Fintech Private Limited (formerly known as S K
              Associate) is a leading financial advisory service specializing in
              loan and equity funds. With over 9 years of experience, we have
              consistently provided top-notch services to our satisfied clients.
              Our offerings include integrated financial planning, wealth
              management, tax consulting services, and insurance.
            </p>
            <p>
              We serve over 500+ clients, both corporate and individual, and are
              dedicated to delivering independent, high-quality, and customized
              services. Our primary goal is to understand and fulfill your
              unique financial requirements.
            </p>
          </div>

          <div className="about-sections">
            <div className="section mission">
              <img src={about1} alt="Mission icon" />
              <div>
              <h3>Our Mission</h3>
              <p style={{lineHeight:"22px"}}>
                We are committed to offering a wide range of products and
                services in the financial services segment, focusing on:
              </p>
           
              </div>
            </div>

            <div className="section vision">
              <img src={about2} alt="Vision icon" />
              <div>
                <h3>Our Vision</h3>
                <p style={{lineHeight:"22px"}}>
                  To establish Grow Lotus Fintech Private Limited as a trusted
                  brand in the financial services sector.
                </p>
              </div>
            </div>

            <div className="section value">
              <img src={about3} alt="Value icon" />
              <div>
              <h3>Our Value</h3>
              <p style={{lineHeight:"22px"}}>
                Our core values are centered around business ethics, consumer
                focus, and corporate responsibility towards society. We uphold
                these values through:
              </p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
