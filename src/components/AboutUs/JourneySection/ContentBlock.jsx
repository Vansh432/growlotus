import React from 'react';
import './JourneySection.css';

const ContentBlock = ({ index, title, description, imageUrl }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`content-block ${isEven ? 'left-image' : 'right-image'}`}>
      {isEven ? (
        <>
          <img src={imageUrl} alt={title} className="content-image" />
          <div className="content-text">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="content-text">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <img src={imageUrl} alt={title} className="content-image" />
        </>
      )}
    </div>
  );
};

export default ContentBlock;
