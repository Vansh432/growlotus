import React from 'react';
import Intro from './Intro';
import ContentBlock from './ContentBlock';
import './JourneySection.css';
import { jou1, jou2, jou3, mangagerPhoto } from '../../../assets/index.js';

const JourneySection = () => {
  const contentBlocks = [
    {
      title: "Our Vision",
      description: "At Grow Lotus Fintech Private Limited, our vision is to become a trusted leader in the financial services industry by providing innovative, tailored solutions that empower individuals and businesses to achieve their financial goals. We strive to set new standards of excellence, integrity, and customer satisfaction, creating long-lasting value for our clients and contributing to their financial success.",
      imageUrl: jou1,
    },
    {
      title: "Our Mission",
      description: "Our mission at Grow Lotus Fintech Private Limited is to deliver a comprehensive range of financial services that cater to the diverse needs of our clients. We are committed to providing the highest quality services at competitive rates, helping our clients achieve their financial aspirations. By fostering a culture of continuous improvement, transparency, and ethical business practices, we aim to build lasting relationships with our clients and ensure their financial well-being.",
      imageUrl: jou2,
    },
    {
      title: "Our Value",
      description: "At Grow Lotus Fintech Private Limited, we prioritize integrity, transparency, and client-focused service in all our business dealings. We strive to exceed client expectations with personalized solutions and continuously seek innovation in our financial offerings. Our collaborative and inclusive work environment empowers every team member to contribute to our success, while we remain committed to positively impacting our clients, employees, and the broader community through responsible business practices.",
      imageUrl: jou3,
    }
  ];

  return (
    <div className="journey-section">
      <Intro />
      <div className="content-blocks">
        {contentBlocks.map((block, index) => (
          <ContentBlock
            key={index}
            index={index}
            title={block.title}
            description={block.description}
            imageUrl={block.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneySection;
