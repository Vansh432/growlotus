import React from 'react';
import './TeamSection.css';
import { team1, team2, team3, team4, team5, team6, team7, team8 } from '../../../assets/index.js';

const TeamSection = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', imageUrl: team1 },
    { name: 'Jone Smith', role: 'Project Manager', imageUrl: team2 },
    { name: 'Michel Jen', role: 'Founder & CEO', imageUrl: team3 },
    { name: 'Sarah Williams', role: 'Founder & CEO', imageUrl: team4 },
   
  ];

  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <h3>Meet Our Dedication Team</h3>
      <p>
        At Grow Lotus Fintech Private Limited, our journey began with a simple yet powerful vision: to transform the
        financial landscape by combining innovation, expertise, and integrity. Founded over 9 years ago by a team of
        passionate industry veterans, Grow Lotus Fintech quickly established itself as a trusted name in the financial
        services sector. Our story is one of dedication, perseverance, and a relentless pursuit of excellence. From
        humble beginnings to becoming a leading force in the industry, Grow Lotus Fintech has remained committed to its
        core values every step of the way.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imageUrl} alt={member.name} className="team-images" />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
