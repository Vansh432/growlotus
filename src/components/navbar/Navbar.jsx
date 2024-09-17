import React, { useState } from "react";
import './Navbar.css';
import { growLogo } from "../../assets/index.js";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowForm, setForm] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAboutDropDownOpen,setAboutDropDownOpen] = useState(false);
  const [isBankServicesOpen,setBankServicesOpen] = useState(false);
  const [isOtherServicesOpen,setOtherServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getForm = () => {
    setForm(true);
  };

  const isToggleForm = () => {
    setForm(!isShowForm);
  };

  const toggleDropdown = (val) => {
    setDropdownOpen(val);
  };

  function toggleAboutDropdown(){
    setAboutDropDownOpen(!isAboutDropDownOpen);
  }

  function toggleBankServices(){
    setBankServicesOpen(!isBankServicesOpen);
  }

  function toggleOtherServices(){
    setOtherServicesOpen(!isOtherServicesOpen);
  }

  return (
    <>
     
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
          
            onMouseEnter={()=> { toggleDropdown(true); setBankServicesOpen(false); setOtherServicesOpen(false); }}
            onMouseLeave={()=> { toggleDropdown(false); setBankServicesOpen(false); setOtherServicesOpen(false); }}
          >
            <Link className="dropdown-toggle max-sm:p-0"   style={{display:"flex",alignItems:"center",padding:"0"}}>
              <span>Services </span><RiArrowDropDownLine className="drop-down-btn" />
            </Link>
          
          </div>
          <NavLink to="/blog"  onClick={toggleMobileMenu}>Blog</NavLink>
          {/* <NavLink to="/about"  onClick={toggleMobileMenu}>About Us</NavLink> */}

          <div 
            className="dropdown  max-sm:w-[100%]"
          
            onClick={toggleAboutDropdown}
          >
            <Link className="dropdown-toggle max-sm:p-0"   style={{display:"flex",alignItems:"center",padding:"0"}}>
              <span>About Us </span><RiArrowDropDownLine className="drop-down-btn" />
            </Link>
          
          </div>

          <NavLink to="/careers"  onClick={toggleMobileMenu}>Careers</NavLink>
          <NavLink to="/contact"  onClick={toggleMobileMenu}>Contact Us</NavLink>
          </div>
          <div className="applyButton">
            <button className="apply-btn" onClick={getForm}>
              IBC
            </button>
          </div>
          {isDropdownOpen && (
              <div id="menu" className={`dropdown-menu ${isMobileMenuOpen?"serviceAtMobile":""}`} onClick={()=>{ setBankServicesOpen(false); setOtherServicesOpen(false); } }   onMouseLeave={()=>{
                  toggleDropdown(false);
                
                 }} >
                {/* <NavLink to="/service/home-loan" onClick={toggleDropdown}>Home Loan</NavLink>
                <NavLink to="/service/personal-loan" onClick={toggleDropdown}>Personal Loan</NavLink>
                <NavLink to="/service/car-loan" onClick={toggleDropdown}>Car Loan</NavLink>
                <NavLink to="/service/msme-loan" onClick={toggleDropdown}>MSME Loan</NavLink>
                <NavLink to="/service/unsecured-loan" onClick={toggleDropdown}>Unsecured Loan</NavLink>
                <NavLink to="/service/business-loan" onClick={toggleDropdown}>Business Loan</NavLink>
                <NavLink to="/service/loan-against-property" onClick={toggleDropdown}>Loan Against Property</NavLink>
                <NavLink to="/service/used-car-loan" onClick={toggleDropdown}>Used Car Loan</NavLink> */}

                <NavLink to="" onMouseEnter={()=> { setBankServicesOpen(true); setOtherServicesOpen(false); toggleDropdown(true)} }
                >Bank & NBFC Services</NavLink>
                <NavLink to="" onMouseEnter={()=> { setOtherServicesOpen(true); setBankServicesOpen(false); toggleDropdown(true) } } >Other Services</NavLink>

              </div>
            )} 

            {/* about dropdown */}

            {isAboutDropDownOpen && (
              <div id="menu" className={`about-dropdown-menu ${isMobileMenuOpen?"serviceAtMobile":""}`}>
                <NavLink to='/about?id=vision' onClick={toggleAboutDropdown} >Our Vision</NavLink>
                <NavLink to='/about?id=mission' onClick={toggleAboutDropdown} >Our Mission</NavLink>
                <NavLink to='/about?id=value' onClick={toggleAboutDropdown} >Our Value</NavLink>
                <NavLink to='/about?id=md-msg' onClick={toggleAboutDropdown} >MD Message</NavLink>
              </div>
            )}

            {/* Bank & NBFC Services */}
            {isBankServicesOpen && (
              <div id="menu" className={`bank-dropdown-menu ${isMobileMenuOpen?"serviceAtMobile":""}`} onMouseLeave={()=>{ toggleBankServices()
              toggleDropdown(false)
              } }
               onMouseEnter={()=>{
                toggleDropdown(true)
               }}
               >
                <NavLink to='service/personal-loan' onClick={()=>{

                toggleBankServices();
                toggleDropdown(false);
                }} >Personal Loan</NavLink>
                <NavLink to='' onClick={()=>{

toggleBankServices();
toggleDropdown(false);
}}  >Credit Card</NavLink>
                <NavLink to=''onClick={()=>{

toggleBankServices();
toggleDropdown(false);
}}  >Business Loan</NavLink>
                <NavLink to=''onClick={()=>{

toggleBankServices();
toggleDropdown(false);
}} >CC/OD/DOD</NavLink>
              </div>
            )}

            {/*Other Services  */}
            {isOtherServicesOpen && (
              <div id="menu" className={`other-services-dropdown-menu ${isMobileMenuOpen?"serviceAtMobile":""}`} onMouseLeave={()=>{ toggleOtherServices()
              toggleDropdown(false)
              } }
              onMouseEnter={()=>{
                toggleDropdown(true)
               }}>
                <NavLink to=''  onClick={toggleOtherServices} >Secured term Loan</NavLink>
                <NavLink to=''  onClick={toggleOtherServices} >Project funding</NavLink>
                <NavLink to=''  onClick={toggleOtherServices} >Equity funding</NavLink>
                <NavLink to=''  onClick={toggleOtherServices} >Emergency Funding</NavLink>
              </div>
            )}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
