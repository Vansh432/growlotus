import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './JourneySection.css';

const ContentBlock = ({ index, title, description, imageUrl }) => {
  const isEven = index % 2 === 0;

  const location = useLocation();

  const sectionId = title.toLowerCase().split(' ')[1];
  // console.log(sectionId);
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id');
  
  // scroll function
  const scrollToViewWithOffset = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight-20;
      const finalPosition = elementTop - offset;
  
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    }
  }

  useEffect(()=>{
    if(id){
      scrollToViewWithOffset(id)
    }
  })

  return (
    <div className={`content-block ${isEven ? 'left-image' : 'right-image'}`}>
      {isEven ? (
        <div id={sectionId} className='content-block'>
          <img src={imageUrl} alt={title} className="content-image" />
          <div className="content-text">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div id={sectionId} className='content-block'>
          <div className="content-text">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          {index==3?(<img src={imageUrl} alt={title}  width="250x"  className="content-image" />):(<img src={imageUrl} alt={title}   className="content-image" />)}
        </div>
      )}
    </div>
  );
};

export default ContentBlock;
