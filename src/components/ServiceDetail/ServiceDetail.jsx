import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import ServiceData from './service.json'
import './Service.css'
const serviceDetails = {
  
  "home-loan": {
    title: "Home Loan",
    image: "https://via.placeholder.com/400",
    description:
      "Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans.",
  },
  "personal-loan": {
    image: "https://via.placeholder.com/400",
    title: "Personal Loan",
    description:
      "Details on Personal Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans.",
  },
  "car-loan": {
    title: "Car Loan",
    image: "https://via.placeholder.com/400",
    description:
      "Explore Car Loan options. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans.",
  },
  "msme-loan": {
    title: "MSME Loan",
    image: "https://via.placeholder.com/400",
    description:
      "Support for Micro, Small and Medium Enterprises. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans.",
  },
  "unsecured-loan": {
    title: "Unsecured Loan",
    image: "https://via.placeholder.com/400",
    description:
      "Unsecured loan details. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans.",
  },
  "business-loan": {
    title: "Business Loan",
    image: "https://via.placeholder.com/400",
    description:
      "Grow your business with our loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans.",
  },
  "loan-against-property": {
    title: "Loan Against Property",
    image: "https://via.placeholder.com/400",
    description:
      "Details on Loans Against Property. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans.",
  },
  "used-car-loan": {
    title: "Used Car Loan",
    image: "https://via.placeholder.com/400",
    description:
      "Finance options for used cars. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans. Information about Home Loans.",
  },
};

const ServiceDetail = () => {
  const { serviceName } = useParams();
 const [formData, setFormData] = useState({
 name: '',
            mobile: '',
            city: '',
            type_of_loan:serviceName,
            amount: '',
            profile: '',
            pin_code: '',
            state: ''
});

  const [errors, setErrors] = useState({});
  
  const service = ServiceData[serviceName];
  const [activeDocument, setActiveDocument] = useState(null);

  const handleToggle = (documentType) => {
    setActiveDocument((prev) => (prev === documentType ? null : documentType));
  };

  const handleChange = (e) => {

    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

   const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Full Name is required";
    
    if (!formData.mobile) {
      formErrors.mobile = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = "Phone number must be 10 digits";
    }
    if (!formData.city) formErrors.city = "City is required";
   
    if (!formData.amount) {
      formErrors.amount = "Loan Amount is required";
    } else if (isNaN(formData.amount) || formData.amount <= 0) {
      formErrors.amount = "Loan Amount must be a positive number";
    }
    if (!formData.profile) formErrors.profile = "Profile is required";
    if (!formData.pin_code) formErrors.pin_code = "PIN Code is required";
    if (!formData.state) formErrors.state = "State is required";

    setErrors(formErrors);
    console.log(formErrors," in functiom");
    console.log(errors)
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log(formData);
    if (validate()) {
      console.log("sumit")
      try {
        const response = await fetch('https://growlotusfintech.in/growLotusMain/api/applyloan', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        console.log(response, response.ok);
        if (response.ok) {
          console.log('Response OK, proceeding...');
        
          alert('Form submitted successfully!');
          setFormData({
            name: '',
            mobile: '',
            city: '',
            type_of_loan: '',
            amount: '',
            profile: '',
            pin_code: '',
            state: ''
          });
          setErrors({});
        } else {
          console.error('Failed to submit form:', response.statusText);
          alert('Failed to submit form. Please try again later.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        console.error('Error details:', error.message); // Additional error message
        alert('An error occurred. Please try again later.');
      }
    }
  };
  





  return (
    <>
      <div className="pt-[80px]">
        {service ? (
          <>
            <div className="relative mb-6">
              <img
                src={service.HeaderImage}
                alt={service.title}
                className="w-full max-h-[250px] object-cover"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 " style={{margin:0,textTransform:"uppercase"}}>
                {service.title}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 p-10 ml-12 lg:p-8 max-sm:ml-0 max-sm:p-[10px]">
              <div className="flex flex-col lg:w-1/3">
                <div className="bg-[#FFC700] text-center p-6 rounded-lg shadow-lg mb-6 h-90 lg:mb-0">
                  <p className="text-white font-semibold text-[2rem] max-sm:text-[1.5rem] leading-[47px]">
                    Get a Free Consultation
                  </p>
                  <IoMdCall className=" border rounded-full text-3xl bg-black mx-auto mt-2 p-2 text-[3rem]  bg-[#fff] text-[#FFC700]" style={{background:"#FFC700",color:"#fff"}}/>
                  <p className="text-white text-sm mt-2 text-[1.05rem] tracking-[1px]">
                    Call Anytime
                  </p>
                  <p className="text-white text-lg mt-1">( +91 ) 900 900 7352</p>
                </div>

                <div className="bg-gray-900 text-white p mt-[50px] max-sm:mt-0 rounded-lg shadow-lg pt-[20px]">
                  <p className="text-xl text-white mb-4 text-[2rem] text-center mb-[30px]">
                    Required Documents
                  </p>
                  {Object.keys(service.DocumentsRequired).map((type) => (
                    <div key={type} className="my-[20px]">
                      <p
                        className={`cursor-pointer text-[15px] tracking-[1px] font-semibold mb-2 transition-colors duration-300 pl-[15px] pb-[8px] border-b-[1px] border-[#fff] ${
                          activeDocument === type
                            ? "text-yellow-400"
                            : "text-white"
                        }`}
                        onClick={() => handleToggle(type)}
                      >
                        {type}
                      </p>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          activeDocument === type
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="ml-4 space-y-2 text-white border-b-[1px] pb-[15px] ml-0 border-[#fff] ml-[0]">
                          {service.DocumentsRequired[type].map((item, index) => (
                            <li key={index} className="list-disc ml-[40px]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col mr-12 max-sm:mr-0 lg:w-2/3">
                <div className=" mb-6">
                  <img
                    src={service.LoanImage}
                    alt={service.title}
                    className="w-full h-[500px]  max-sm:h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="rounded-lg">
                 <h2 className="text-left text-[1.8rem] mb-0 font-[600] text-[#FFC700] tracking-[1px] uppercase ">{service.title}</h2>
                  <p className="m-0">{service.Description}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-center text-2xl font-semibold">Service Not Found</h1>
        )}
      </div>
      <div className="loan-form-container ">
        <div className="left-section max-sm:w-[100%]">
          <h2 className="join-team">JOIN OUR TEAM AND GROW WITH US!</h2>
          <p>
           {service.CompanyTermConditions.Description1}
          </p>
          <p>
          {service.CompanyTermConditions.Description2}
          </p>
        </div>
        <div className="right-section max-sm:w-[100%]" style={{paddingBottom:"30px"}}>
        <h3 className="text-[1.5rem] font-[700] text-[#ffc700] mb-[25px]">Get in Touch with Us</h3>
          <form onSubmit={handleSubmit} method="post" className="loan-form">

          <div className="flex justify-between">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            
            <div className="form-group">
              <label htmlFor="mobile">Phone Number</label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <p className="error-message">{errors.mobile}</p>}
            </div>
            </div>
           <div className="flex justify-between">
           <div className="form-group">
              <label htmlFor="profile">Profile</label>
              <select
                id="profile"
                value={formData.profile}
                onChange={handleChange}
                className="mb-0"
              >
                <option value="">Select Profile</option>
                <option value="Business">Business</option>
                <option value="Salaried">Salaried</option>
              </select>
              {errors.profile && <p className="error-message">{errors.profile}</p>}
            </div>

          

            <div className="form-group">
              <label htmlFor="loanAmount">Loan Amount</label>
              <input
                type="number"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
              />
              {errors.amount && <p className="error-message">{errors.amount}</p>}
            </div>
</div>
<div className="flex justify-between">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                name=""
              />
              {errors.city && <p className="error-message">{errors.city}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
              />
              {errors.state && <p className="error-message">{errors.state}</p>}
            </div>
</div>
<div className="flex justify-between">
            <div className="form-group" style={{marginBottom:"40px"}}>
              <label htmlFor="pin_code">PIN Code</label>
              <input
                type="text"
                id="pin_code"
                value={formData.pin_code}
                onChange={handleChange}
              />
              {errors.pin_code && <p className="error-message">{errors.pin_code}</p>}
            </div>
            
            <div className="form-group">
              <input type="hidden" name={serviceName}  value={service}   />
            </div>

</div>
            <div className="form-group w-[100%]" style={{width:"80%", margin:'auto'}}>
              <button type="submit" className="submit-btn">
                Apply Now
              </button>
            </div>  
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;