import React from "react";
import "./AboutUs.css";
import Header from "./Header";
import ImageSection from "./ImageSection";
import Statistics from "./Statistics";
import JourneySection from "./JourneySection/JourneySection";
import TeamSection from "./TeamSection/TeamSection";
import FAQ from "./Faq/FAQ";
import Subscription from "./Subscription/Subscription";
import Achivement from '../Achivedment/Achivement'
import MD_Message from './MD_Message/MD_Message'

const AboutUss = () => {
  return (
    <>
      <div className="about-us flex flex-col items-center" >
      <ImageSection />

      <div className="px-[20px]">
        <Header />
      
        <Statistics />
        <JourneySection />
        <MD_Message />
        <Achivement/>
        <TeamSection />
        <FAQ />
        <Subscription />
        </div>
      </div>
    </>
  );
};

export default AboutUss;
