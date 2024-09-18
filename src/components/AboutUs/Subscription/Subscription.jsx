import React from 'react';
import './Subscription.css';
import { carbon_email } from '../../../assets/index.js';
import { Link, useNavigate } from 'react-router-dom';

const Subscription = () => {
  const navigate = useNavigate(); // Correctly using the navigate hook

  function navigatePage() {

    navigate('/privacy'); // Navigating to privacy page
  }

  return (
    <div className="subscription-container">
      <h2>Stay Connected with Grow Lotus Fintech</h2>
      <p className='textSub'>
        Sign up for our newsletter to stay informed about the latest news, updates, and exclusive offers from Grow Lotus Fintech. By subscribing, you'll receive regular emails featuring financial insights, service updates, and tips to help you manage and grow your finances effectively. Stay connected with us and be the first to know about our innovative solutions and special offers designed to meet your financial needs.
      </p>
      <div className="subscription-form">
        {/* Uncomment if you need the email icon */}
        {/* <img src={carbon_email} alt="Email Icon" /> */}
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
      <p className="privacy-policy">
        We care about the protection of your data. Read our <Link onClick={navigatePage}>Privacy Policy</Link>.
      </p>
    </div>
  );
};

export default Subscription;
