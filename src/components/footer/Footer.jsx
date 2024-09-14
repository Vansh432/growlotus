import React from 'react';
import "./Footer.css";
import { useEffect } from 'react';
import { playstore , applestore , qrfooter , footerlogo , facebook , linkdin , insta, location, mail, call } from '../../assets/index.js';
import { Link, NavLink,useLocation } from 'react-router-dom';
const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={footerlogo} alt="Grow Lotus" className="logo" />
          <h3>GROW LOTUS</h3>
          <p className="company-description">
            Our fintech loan provider company leverages cutting-edge technology to deliver
            seamless, accessible financing solutions. We empower individuals and
            businesses with tailored loans, fostering financial growth and stability.
          </p>
          <p className="app-info">Learn more about the app</p>
          <p className="app-download">Download the app</p>
          <img src={qrfooter} alt="QR Code" className="qr-code" />
          <div className="app-stores">
            <img src={playstore} alt="Get it on Google Play" className="store-badge" />
            {/* <img src={applestore} alt="Download on the App Store" className="store-badge" /> */}
          </div>
        </div>
        
        <div className="footer-center">
          <div className="quick-links rightContentFooter">
            <h3>QUICK LINKS</h3>
            <ul>
             <Link to="/about"> <li>About Us</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
            
              <Link to="/careers"> <li>Career</li></Link>
              <NavLink to="/termcondition"> <li>Term & Condition</li></NavLink>
              <NavLink to="/privacy"><li>Privacy Policy</li></NavLink>
            </ul>
          </div>
          <div className="connect">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <span className="icon facebook"><img src={facebook} alt="" srcset="" width="30px" /></span>
              <span className="icon instagram"><img src={insta} alt="" srcset="" width="25px"/></span>
              <span className="icon linkedin"><img src={linkdin} alt="" srcset="" width="30px" /></span>
            </div>
          </div>
        </div>
        <div className="latest-blog rightContentFooter">
            <h3>LATEST BLOG</h3>
            <div className="blog-post">
              Why Diversification of Marketing Strategies is Vital in 2023
            </div>
            <div className="blog-post">
              Why Diversification of Marketing Strategies is Vital in 2023
            </div>
          </div>
        <div className="footer-right rightContentFooter">
          
          <div className="information">
            <h3>INFORMATION</h3>
           <NavLink to=""><p><span className="info-icon"><ion-icon name="call-outline"></ion-icon></span> 1800 180 1800</p></NavLink> 
            <p><span className="info-icon"><ion-icon name="mail-outline"></ion-icon></span>Info@growlotusfintech.com</p>
            <p id="addressOffice"><span className="info-icon"><ion-icon name="location-outline"></ion-icon></span>302, 3rd Floor, Global Foyer Mall
Golf Course Road, Gurugram
Haryana, India 122009</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer