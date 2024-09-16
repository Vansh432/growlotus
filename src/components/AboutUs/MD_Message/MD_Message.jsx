import React from 'react'
import './MD_Message.css'
import { mangagerPhoto as mdPhoto } from '../../../assets/index.js';

const MD_Message = () => {
    
    const MD = {
        title: "Managing Director's Message",
        description: "Welcome to Grow Lotus Fintech Private Limited. Our mission is to help you achieve your financial goals with personalized solutions. With a focus on growth, innovation, and excellence, we are dedicated to guiding you through the complexities of financial planning. Our team is committed to providing exceptional service and building lasting relationships based on trust and integrity. Thank you for choosing us as your financial partner.",
        imageUrl: mdPhoto,
    }

  return (
    <div id="md-msg" className='md-section'>
          <div className="content-text">
            <h4>{MD.title}</h4>
            <p>{MD.description}</p>
          </div>
          <img src={MD.imageUrl} alt={MD.title}   className="content-image" />
    </div>
  )
}

export default MD_Message
