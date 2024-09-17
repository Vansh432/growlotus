import React from "react";
import "./Banner.css";
import { BannerImage } from "../../assets/index.js";
import gsap from 'gsap';
import SplitType from 'split-type';
import {useRef,useEffect} from 'react';
import { useGSAP } from '@gsap/react';

// ..


const Banner = () => {
  const heading=useRef();
  useGSAP(()=>{
    const split = new SplitType(heading.current, { types: 'chars' });
    gsap.from(split.chars,{
      y: 50,
      duration: 0.6,
      stagger: 0.05,
      opacity: 0,
      ease: 'power2.out',
    })
  })

  return (
    <>
  
      <div className="banner">
        <div className="banner-text">
          <h1 className="text-[#003c07]">
            Empowering <span className="highlight" ref={heading}>Your <br/> Financial Future</span>{" "}
            with Tailored Solutions
          </h1>
          <p data-aos="fade-up">
            At Grow Lotus Fintech, we provide personalized financial advice and
            innovative solutions to help you achieve your goals. With over 9
            years of experience, our expert team is dedicated to delivering
            seamless and effective financial services designed just for you.
          </p>
          <button className="explore-btn" data-aos="fade-up">Explore</button>
        </div>
        <div className="banner-image " data-aos="fade-left">
          <img src={BannerImage} alt="Financial Solutions" />
        </div>
      </div>
    </>
  );
};

export default Banner;
