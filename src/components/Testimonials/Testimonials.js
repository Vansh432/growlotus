import React, { useState, useEffect } from 'react';
import {team1,team5} from '../../assets/index'
import './testimonial.css'

const testimonials = [
  {
    id: 1,
    text: "What stood out the most was their commitment to customer satisfaction. They truly care about their clients and go above and beyond to ensure a positive experience. I would highly recommend Grow lotus to anyone in need of a loan. It's a reliable company you can trust.",
    img:team1,
    author: "Shakti Singh",
    position: "Team Leader",

  },
  {
    id: 2,
    text: "What stood out the most was their commitment to customer satisfaction. They truly care about their clients and go above and beyond to ensure a positive experience. I would highly recommend Grow lotus to anyone in need of a loan. It's a reliable company you can trust.",
    img:team5,
    author: "Tannu",
    position: "Service Executive ",
  
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Autoplay every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-carousel mt-[110px]">
      <h2 className="text-[2rem] text-center text-[#000] font-bold  uppercase">What Employees say's</h2>
      <div className="carousel-container">
        <div className="carousel-content">
        <div className="testimonial-img">
          <img src={`${testimonials[currentIndex].img}`} alt="Testimonial" width={"100%"} height={"100%"} style={{width:"100%",height:"100%"}}/>
          </div>
          <div className="testimonial-text">
            <p>"{testimonials[currentIndex].text}"</p>
            <div>
            <h3>{testimonials[currentIndex].author}</h3>
            <p className='text-[.9rem]'>{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </div>
        <button className="prev" >
        <ion-icon name="chevron-back-outline" onClick={prevSlide} className="text-[1.2rem] text-[#fff]" style={{color:"#fff"}}></ion-icon></button>
        <button className="next" ><ion-icon onClick={nextSlide}name="chevron-forward-outline"  style={{color:"#fff"}}></ion-icon></button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
