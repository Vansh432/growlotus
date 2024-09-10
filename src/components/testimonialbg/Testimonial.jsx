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
      name: "Tom",
      feedback: "It was a very good experience",
      photo: testimonial1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu",
    },
    {
      name: "Jane",
      feedback: "Great service and support.",
      photo: testimonial2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu",
    },
    {
      name: "Alex",
      feedback: "Highly recommend their services.",
      photo: testimonial3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu",
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
