import React,{useState} from "react";
import "./Service.css";
import { service1 , service2 } from "../../assets/index.js";
import gsap from 'gsap';
import SplitType from 'split-type';
import Form from '../Form/Form.js';
import {useRef} from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const [isShowForm, setForm] = useState(false);
  const paragrap1=useRef();
  const paragrap2=useRef();
  function animationParagraph(paragrap){
    const split = new SplitType(paragrap.current, { types: 'chars' });
    gsap.from(split.chars,{
      y: 50,
      duration: 0.6,
      stagger: 0.05,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: paragrap.current,
      }
    })
  }
  useGSAP(()=>{
   animationParagraph(paragrap1);
   animationParagraph(paragrap2);
  },[]);

  const isToggleForm = () => {
    setForm(!isShowForm);
  };
  const formdetails={
    fullName: '',
    phone: '',
    loantype: '',
  
  }
  function handlForm(){
    setForm(true);

  }
  return (
    <>
    <Form show={isShowForm} isToggleForm={isToggleForm} formRequierment={formdetails}   formIndex={2}/>
      <div className="mainServiceStart mt-[110px]" >
        <div className="service" data-aos="fade-up">
          <div className="service-content services2">
            <h2 className="service-title ">Finance Advice</h2>
            <p ref={paragrap1}>
            Grow Lotus Fintech offers expert, tailored financial advice to help you grow wealth, secure funding, and manage expenses.
              </p>
            <button className="get-started-btn" onClick={handlForm}>Get Started</button>
          </div>
          <div className="service-image">
            <img src={service1} alt="Finance Advice" />
          </div>
        </div>
        <div className="service2" data-aos="fade-up">
          <div className="service-content">
            <div className="services2" >
              <h2 className="service-title">Cibil Score</h2>
              <p ref={paragrap2}>
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
