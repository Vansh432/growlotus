import React from "react";
import "./Service.css";
import { service1 , service2 } from "../../assets/index.js";

const Service = () => {
  return (
    <>
      <div className="mainServiceStart">
        <div className="service">
          <div className="service-content services2">
            <h2 className="service-title ">Finance Advice</h2>
            <p>
            Grow Lotus Fintech offers expert, tailored financial advice to help you grow wealth, secure funding, and manage expenses.
              </p>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="service-image">
            <img src={service1} alt="Finance Advice" />
          </div>
        </div>
        <div className="service2">
          <div className="service-content">
            <div className="services2">
              <h2 className="service-title">Cibil Score</h2>
              <p>
                Understand Your Credit Health and Take Control of Your Financial
                Future
              </p>
            </div>
            <button className="get-started-btn2">Check Now</button>
          </div>
          <div className="service-image">
            <img src={service2} alt="Finance Advice" />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Service;
