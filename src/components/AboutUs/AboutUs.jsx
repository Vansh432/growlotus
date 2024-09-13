import React from "react";
import "./AboutUs.css";
import Header from "./Header";
import ImageSection from "./ImageSection";
import Statistics from "./Statistics";
import JourneySection from "./JourneySection/JourneySection";
import TeamSection from "./TeamSection/TeamSection";
import FAQ from "./Faq/FAQ";
import Subscription from "./Subscription/Subscription";

const AboutUss = () => {
  return (
    <>
      <div className="about-us flex flex-col items-center" >
      <ImageSection />

      <div className="px-[20px]">
        <Header />
      
        <Statistics />
        <JourneySection />
        <TeamSection />
        <FAQ />
        <Subscription />
        </div>
      </div>
    </>
  );
};

export default AboutUss;
