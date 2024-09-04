import { useState } from "react";
import './Form.css';

const MultiStepForm = ({ show, isToggleForm }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    loantype: '',
    loanAmount: '',
    profile: '',
    PINCode: '',
    State: ''
  });

  const [errors, setErrors] = useState({});
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full Name is required";
   
    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.loantype) {
      formErrors.loantype = "Loan type is required";
    }
    if (!formData.loanAmount) {
      formErrors.loanAmount = "Loan Amount is required";
    } else if (isNaN(formData.loanAmount) || formData.loanAmount <= 0) {
      formErrors.loanAmount = "Loan Amount must be a positive number";
    }
    if (!formData.profile) formErrors.profile = "Profile is required";
    if (!formData.PINCode) formErrors.PINCode = "PIN Code is required";
    if (!formData.State) formErrors.State = "State is required";

    setErrors(formErrors);
    console.log(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (validate()) {
      console.log(e)
      console.log('Form data submitted:', formData);

      setFormData({
        fullName: '',
        phone: '',
        city: '',
        loantype: '',
        loanAmount: '',
        profile: '',
        PINCode: '',
        State: ''
      });
      setErrors({});
      setTimeout(() => {

      }, 3000); // Hide the success message after 3 seconds
    }
  };

  const hideForm = () => {
    isToggleForm();
  }

  const styles = {
    visibility: `${show ? "visible" : "hidden"}`,
  }

  return (
    <div id="formMainContainer" style={styles}>
      <div className="form-container">
        <h2 id="headerForm" >Apply For Loan</h2>
        <button className="cancelForm" onClick={hideForm}>
          &#10005;
        </button>
        <form onSubmit={handleSubmit} className="loan-form">
          {/* Form Fields */}
          <div className="flex justify-between">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error-message">{errors.fullName}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="form-group">
              <label htmlFor="profile">Profile</label>
              <select
                id="profile"
                value={formData.profile}
                onChange={handleChange}
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
                id="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
              />
              {errors.loanAmount && <p className="error-message">{errors.loanAmount}</p>}
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
              />
              {errors.city && <p className="error-message">{errors.city}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="State">State</label>
              <input
                type="text"
                id="State"
                value={formData.State}
                onChange={handleChange}
              />
              {errors.State && <p className="error-message">{errors.State}</p>}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="form-group" style={{ marginBottom: "40px" }}>
              <label htmlFor="PINCode">PIN Code</label>
              <input
                type="text"
                id="PINCode"
                value={formData.PINCode}
                onChange={handleChange}
              />
              {errors.PINCode && <p className="error-message">{errors.PINCode}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="loantype">Loan Type</label>
              <select
                id="loantype"
                value={formData.loantype}
                onChange={handleChange}
                style={{marginBottom:"0"}}
              >
                <option value="">Select Loan Type</option>
                <option value="HomeLoan">Home Loans</option>
                <option value="PersonalLoan">Personal Loans</option>
                <option value="CarLoan">Car Loans</option>
                <option value="SecuredLoan">Secured Loans</option>
                <option value="ProjectFinance">Project Finance</option>
                <option value="Salaried">Salaried</option>
              </select>
              {errors.loantype && <p className="error-message">{errors.loantype}</p>}
            </div>
          </div>
          <div className="form-group w-[100%]" style={{ width: "80%", margin: 'auto' }}>
            <button type="submit" className="submit-btn">
              Apply Now
            </button>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default MultiStepForm;
