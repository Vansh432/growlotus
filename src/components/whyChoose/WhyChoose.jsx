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
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: card.current, 
        start: "top 90%",
        end:"bottom top"
      },
    });
  }

  useGSAP(() => {
    changeAnimation(card1, 700);
    changeAnimation(card2, -700);
    changeAnimation(card3, 700);
    changeAnimation(card4, -700);
  }, []);

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="timeline">
        <div className="timeline-item flex justify-between items-center w-[100%]" style={{ paddingLeft: "0px" }}>
          <div className="content w-[48%]" ref={card1}>
            <h3>
              <span className="number">01</span>
            </h3>
            <h1>Personalized Approach</h1>
            <p>
              We take the time to understand your financial needs and provide
              customized solutions that align with your goals.
            </p>
          </div>
          <div className="w-[48%] h-[279px] ">
            <img src={personalize} className="w-[100%] h-[100%] object-cover rounded-[10px]"  alt="Personalized Approach"/>
          </div>
        </div>
        <div className="timeline-item flex justify-between items-center w-[100%]" style={{ paddingRight: "0px" }}>
        <div className="w-[48%] h-[279px] ">
            <img src={experts} className="w-[100%] h-[100%] object-cover rounded-[10px]"  alt="Personalized Approach"/>
          </div>
          <div className="content w-[48%]" ref={card2}>
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
          <div className="content w-[48%]" ref={card3}>
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
          <div className="w-[48%] h-[279px] ">
            <img src={compressive} className="w-[100%] h-[100%] object-cover rounded-[10px]"  alt="Personalized Approach"/>
          </div>
        </div>
        <div className="timeline-item  flex justify-between items-center w-[100%]" style={{ paddingRight: "0px" }}>
        <div className="w-[48%] h-[279px] ">
            <img src={"https://t4.ftcdn.net/jpg/07/62/27/19/240_F_762271900_yEKw7TGpOKgqKzPKFysARfzGdKkBohpL.jpg"} className="w-[100%] h-[100%] object-cover rounded-[10px]"  alt="Personalized Approach"/>
          </div>
          <div className="content  w-[48%]" ref={card4}>
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
