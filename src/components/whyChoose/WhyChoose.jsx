import React, { useRef, useEffect } from "react";
import "./WhyChoose.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import  {experts,personalize,compressive} from '../../assets/index'

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3=useRef(null);
  const card4=useRef(null);

  
  function changeAnimation(card, val) {
    gsap.from(card.current, {
      x: -val,
      opacity: 0,
      duration: 0.8, // Shorter duration for quicker transitions
      ease: "power2.out", // Use a more performant easing function
      scrollTrigger: {
        trigger: card.current,
        start: "top 90%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });
  }
  

  useGSAP(() => {
    changeAnimation(card1, 200);
    changeAnimation(card2, -200);
    changeAnimation(card3, 200);
    changeAnimation(card4, -200);
  }, []);

  return (
    <div className="why-choose-us" style={{willChange: "transform, opacity",marginTop:"110px"}}>
      <h2 className="text-[2rem] text-center text-[#000] font-bold  uppercase">Why Choose Us</h2>
      <div className="timeline">
        <div className="timeline-item flex justify-between items-center w-[100%] mb-[35px]" style={{ paddingLeft: "0px" }}>
          <div className="content w-[48%] max-sm:w-[100%]" ref={card1}>
            <h3>
              <span className="number">01</span>
            </h3>
            <h1>Personalized Approach</h1>
            <p>
              We take the time to understand your financial needs and provide
              customized solutions that align with your goals.
            </p>
          </div>
          <div className="w-[48%] h-[279px]  max-sm:hidden">
            <img src={experts}  loading="lazy" className="w-[100%] h-[100%]  object-cover rounded-[10px] max-sm:hidden"  alt="Personalized Approach"/>
          </div>
        </div>
        <div className="timeline-item flex justify-between items-center w-[100%]" style={{ paddingRight: "0px" }}>
        <div className="w-[48%] h-[279px] max-sm:hidden"> 
            <img src={personalize}  loading="lazy" className="w-[100%] h-[100%] object-cover rounded-[10px] max-sm:hidden"  alt="Expertise You Can Trust"/>
          </div>
          <div className="content w-[48%] max-sm:w-[100%]" ref={card2}>
            <h3>
              <span className="number">02</span>
            </h3>
            <h1>Expertise You Can Trust</h1>
            <p>
              With over 9 years of industry experience, our team brings
              extensive knowledge and professionalism to every interaction.
            </p>
          </div>
        </div>
        <div className="timeline-item flex justify-between items-center w-[100%]" style={{ paddingLeft: "0px" }}>
          <div className="content w-[48%] max-sm:w-[100%]" ref={card3}>
            <h3>
              <span className="number">03</span>
            </h3>
            <h1>Comprehensive Services</h1>
            <p>
              From loans and equity funding to tax consulting and insurance,
              we offer a wide range of services to cover all your financial
              needs.
            </p>
          </div>
          <div className="w-[48%] h-[279px]  max-sm:hidden">
            <img src={compressive}  loading="lazy" className="w-[100%] h-[100%] object-cover rounded-[10px]  max-sm:hidden"  alt="Comprehensive Services"/>
          </div>
        </div>
        <div className="timeline-item  flex justify-between items-center w-[100%]" style={{ paddingRight: "0px" }}>
        <div className="w-[48%] h-[279px]  max-sm:hidden">
            <img src={experts}   loading="lazy" className="w-[100%] h-[100%] object-cover rounded-[10px]  max-sm:hidden"  alt="Client-Centric Focus"/>
          </div>
          <div className="content  w-[48%] max-sm:w-[100%]" ref={card4}>
            <h3>
              <span className="number" >04</span>
            </h3>
            <h1>Client-Centric Focus</h1>
            <p>
              Our mission is to make your financial journey smooth and
              stress-free with a commitment to exceptional service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
