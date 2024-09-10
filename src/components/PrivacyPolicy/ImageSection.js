import React from 'react';
import { aboutHeader } from '../../assets';

const ImageSection = () => {
  return (
    <div className="relative w-full h-[300px]">
      <img src={aboutHeader} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-[0.7]"></div>
    </div>
  );
}

export default ImageSection;