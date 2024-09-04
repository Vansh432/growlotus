import React from 'react';
import {aboutHeader} from '../../assets/index.js';

const ImageSection = () => {
  return (
    <div className="image-section" style={{marginTop:"50px"}}>
      <img src={aboutHeader} alt="Team" className="team-image" />
    </div>
  );
};

export default ImageSection;

