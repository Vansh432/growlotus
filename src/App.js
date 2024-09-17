import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Banner from "./components/banner/Banner.jsx";
import Service from "./components/service/Service.jsx";
import Closemodel from './components/Modal/Model.js'
import WhyChoose from "./components/whyChoose/WhyChoose.jsx";
import OurServices from "./components/ourServices/OurServices.jsx";
import About from "./components/about/About.jsx";
import Testimonial from "./components/testimonialbg/Testimonial.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "./components/footer/Footer.jsx";
import AboutUss from "./components/AboutUs/AboutUs.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import ServicePage from "./components/ServicePage/Servicepage.js";
import Blog from "./components/Blog/Blog.jsx";
import BlogPage from "./components/BlogPage/BlogPage.jsx";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail.jsx";
import Careers from "./components/Careers/Careers.jsx";
import EmiCalulator from'./components/EmiCalculator/EmiCalc.js';
import Privacy from './components/PrivacyPolicy/Privacy'
import TermCondition from './components/Term&Condition/TermCondition.js'
import Testimonials from "./components/Testimonials/Testimonials.js";


function App() {

  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  return (
    <>
    <Router>
      <div className="leftRightPadding" style={{boxShadow: "0 0 5px #9c9999",position:"fixed",width:"100%",background:"#fff",zIndex:"1000"}}>
        <Navbar /> 
      </div>
      <Routes>
        <Route path="/" element={
          <>
            <div className="leftContainer overflow-hidden">
              <Banner />
              <Service />
              <EmiCalulator/>
              <WhyChoose />
              <Testimonials/>
              <OurServices />
      
            <Testimonial />
            </div>
          </>
        } />
        <Route path="/service" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"80px"}}>
              <ServicePage />
            </div>
          </>
        } />

            <Route path="/service/:serviceName" element={<ServiceDetail />} />
        <Route path="/blog" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"90px"}}>
              <Blog />
            </div>
          </>
        } />
         <Route path="/blog/:id" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"90px"}}>
              <BlogPage />
            </div>
          </>
        } />
        <Route path="/about" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"80px"}}>
            <AboutUss/>
                          </div>
          </>
        } />
        <Route path="/contact" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"90px"}}>
              <ContactUs />
            </div>
          </>
        } />
            <Route path="/termcondition" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"90px"}}>
              <TermCondition />
            </div>
          </>
        } />
        <Route path="/privacy" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"90px"}}>
              <Privacy />
            </div>
          </>
        } />
         <Route path="/achivements" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"90px"}}>
            
            </div>
          </>
        } />
         <Route path="/careers" element={
          <>
            <div className="leftRightPadding leftContainer" style={{paddingTop:"90px"}}>
              <Careers />
            </div>
          </>
        } />
        
      </Routes>
      <Footer />
    </Router>
    {successMessage && (
          <div className="success-message">
            <Closemodel message={successMessage} />
          </div>
        )}
    </>
  );
}

export default App;
