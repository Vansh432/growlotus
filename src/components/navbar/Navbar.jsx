import React, { useState } from "react";
import './Navbar.css';
import { growLogo } from "../../assets/index.js";
import Form from '../Form/Form.js';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowForm, setForm] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getForm = () => {
    setForm(true);
  };

  const isToggleForm = () => {
    setForm(!isShowForm);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const formdetails={
    fullName: '',
    phone: '',
    city: '',
    loantype: '',
    loanAmount: '',
    profile: '',
    PINCode: '',
    State: ''
  
  }
  return (
    <>
      <Form show={isShowForm} isToggleForm={isToggleForm} formRequierment={formdetails} formIndex={1} />
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={growLogo} alt="logo" />
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className="menu-icon">&#9776;</span>
        </div>
        <div className={`navbar-links `} style={{height:"fit-content",overflow:"visible"}}>
        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <NavLink to="/"  onClick={toggleMobileMenu}>Home</NavLink>
          <div 
            className="dropdown  max-sm:w-[100%]"
          
            onClick={toggleDropdown}
          >
            <Link className="dropdown-toggle max-sm:p-0"   style={{display:"flex",alignItems:"center",padding:"0"}}>
              <span>Services </span><RiArrowDropDownLine className="drop-down-btn" />
            </Link>
          
          </div>
          <NavLink to="/blog"  onClick={toggleMobileMenu}>Blog</NavLink>
          <NavLink to="/about"  onClick={toggleMobileMenu}>About Us</NavLink>
          <NavLink to="/careers"  onClick={toggleMobileMenu}>Careers</NavLink>
          <NavLink to="/contact"  onClick={toggleMobileMenu}>Contact Us</NavLink>
          </div>
          <div className="applyButton">
            <button className="apply-btn" onClick={getForm}>
              Apply For Loan
            </button>
          </div>
          {isDropdownOpen && (
              <div className={`dropdown-menu ${isMobileMenuOpen?"serviceAtMobile":""}`}>
                <NavLink to="/service/home-loan" onClick={toggleDropdown}>Home Loan</NavLink>
        <NavLink to="/service/personal-loan" onClick={toggleDropdown}>Personal Loan</NavLink>
        <NavLink to="/service/car-loan" onClick={toggleDropdown}>Car Loan</NavLink>
        <NavLink to="/service/msme-loan" onClick={toggleDropdown}>MSME Loan</NavLink>
        <NavLink to="/service/unsecured-loan" onClick={toggleDropdown}>Unsecured Loan</NavLink>
        <NavLink to="/service/business-loan" onClick={toggleDropdown}>Business Loan</NavLink>
        <NavLink to="/service/loan-against-property" onClick={toggleDropdown}>Loan Against Property</NavLink>
        <NavLink to="/service/used-car-loan" onClick={toggleDropdown}>Used Car Loan</NavLink>
              </div>
            )} 
        </div>
      </nav>
    </>
  );
};

export default Navbar;
