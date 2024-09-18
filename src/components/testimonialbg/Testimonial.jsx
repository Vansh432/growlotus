import React, { useState } from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonialside,
  ornament
} from "../../assets/index.js";

const Testimonial = () => {
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-prev`}
        onClick={onClick}
      >
        <svg
          width="95"
          height="95"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.8062 23.5225L35.2837 47.0449L58.8062 70.5674"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-next`}
        onClick={onClick}
      >
        <svg
          width="95"
          height="95"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.2837 70.5674L58.8062 47.0449L35.2837 23.5225"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const testimonials = [

    {
      name: "Jane",
      feedback: "Great service and support.",
      photo: testimonial2,
      content:"I had an excellent experience with Grow Lotus Fintech Pvt Ltd. Their team is incredibly knowledgeable and provided me with clear and concise advice on financial planning and investment strategies. The entire process was smooth, and they were always available to answer my queries promptly. I appreciate their customer-centric approach, ensuring that my needs were met with professionalism and care. I highly recommend Grow Lotus Fintech to anyone looking for reliable and expert financial services",
    },
    {
      name: "Alex",
      feedback: "Highly recommend their services.",
      photo: testimonial3,
      content:
       "I had an excellent experience with Grow Lotus Fintech Pvt Ltd. Their team is incredibly knowledgeable and provided me with clear and concise advice on financial planning and investment strategies. The entire process was smooth, and they were always available to answer my queries promptly. I appreciate their customer-centric approach, ensuring that my needs were met with professionalism and care. I highly recommend Grow Lotus Fintech to anyone looking for reliable and expert financial services",
    },
  ];

  return (
    <>
      <div className="testimonials-section">
        <h2>Here is what our Clients are saying About us</h2>
        <div>
        <img className="ornament1" src={ornament} alt="" srcset="" />
        <img className="pointImage1" src={testimonialside} alt="" srcset="" />
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-content">
                <p className="feetbackmain">
                  <strong>{testimonial.feedback}</strong>
                </p>
                <p style={{textAlign:"justify"}}>{testimonial.content}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div>
        <img className="ornament2" src={ornament} alt="" srcset="" />
        <img className="pointImage2" src={testimonialside} alt="" srcset="" />
        </div>
       
      </div>
    </>
  );
};

export default Testimonial;
