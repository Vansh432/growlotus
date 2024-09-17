import React from "react";
import "./OurServices.css";
import {
  ourservice1,
  ourservice2,
  ourservice3,
  ourservice4,
  ourservice5,
  ourservice6,
} from "../../assets/index.js";

const OurServices = () => {
  const services = [
    {
      icon: ourservice1,
      title: "Secured Loans",
      description:
        "Business or personal loans with collateral requirements for enhanced security and favorable terms.",
    },
    {
      icon: ourservice2,
      title: "Project Finance",
      description:
        "Long-term financing solutions for infrastructure and industrial projects, based on projected cash flows.",
    },
    {
      icon: ourservice3,
      title: "Personal Loans",
      description:
        "Our personal loans offer financial support for weddings, education, travel, and more, all without requiring collateral.",
    },
    {
      icon: ourservice4,
      title: "Home Loans",
      description:
        "Our home loan services offer competitive interest rates and flexible repayment terms, making home ownership accessible and straightforward.",
    },
    {
      icon: ourservice5,
      title: "Emergency Funding",
      description:
        "Our emergency funding provides quick, helping you manage unexpected financial needs without requiring collateral.",
    },
    {
      icon: ourservice6,
      title: "Equity Funding",
      description:
        "Equity funding helps businesses grow by issuing new shares for cash investment, securing expansion funds without additional debt.",
    },
  ];
  return (
    <>
      <div className="our-services mt-[110px]" id="Services">
        <h2 className="text-[2rem] text-center text-[#000] font-bold  uppercase">Our Services</h2>
        <p className="description">
          At Grow Lotus Fintech Private Limited, we offer a comprehensive range
          of financial services designed to meet your unique needs. Our tailored
          solutions ensure that whether you're an individual or a corporate
          client, you receive the best possible financial support
        </p>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="icon-container">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
