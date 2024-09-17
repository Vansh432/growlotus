import React from "react";
import "./Servicepage.css";
import ImageSection from "./ImageSection.jsx";
import Header from './Header.jsx';
import ServiceDisciption from "./ServiceIntro/ServiceDiscription.js";
import { service1 , service2 } from "../../assets/index.js";
import OurService from '../ourServices/OurServices.jsx'
import Intro from './Intro.js'

const Servicepage = () => {
  return (
    <>
    <div className="mb-10">
    <Header/>
    <ServiceDisciption/>
    <ImageSection/>
    <Intro/>
    <OurService/>
    </div>
    </>
  );
};

export default Servicepage;
