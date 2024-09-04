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
      description: "At Grow Lotus Fintech Private Limited, our values form the cornerstone of our business. We are committed to maintaining the highest standards of integrity in all our dealings, ensuring transparency and honesty guide our interactions. Our focus is always on our clients, prioritizing their needs and goals to provide personalized services that go above and beyond their expectations. We strive for excellence in every aspect of our work, from service delivery to customer care, continuously seeking ways to innovate and offer cutting-edge financial solutions. Collaboration and inclusivity are central to our approach, creating an environment where every team member is valued and empowered to contribute to our success. Additionally, we take our social and corporate responsibilities seriously, ensuring that our business practices positively impact our clients, employees, and the wider community.",
      imageUrl: jou3,
    },
    {
      title: "Managing Director's Message",
      description: "Welcome to Grow Lotus Fintech Private Limited. Our mission is to help you achieve your financial goals with personalized solutions. With a focus on growth, innovation, and excellence, we are dedicated to guiding you through the complexities of financial planning. Our team is committed to providing exceptional service and building lasting relationships based on trust and integrity. Thank you for choosing us as your financial partner.",
      imageUrl: mangagerPhoto,
    },
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
