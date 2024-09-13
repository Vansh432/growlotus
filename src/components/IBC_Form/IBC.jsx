import React, { useState } from 'react';
import './IBC.css';

const IBC = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        referralCode: '',
        experience: '',
        expType: '',
        fullName: '',
        stateName: '',
        cityName: '',
        certName: '',
        mobileNumber: '',
        email: '',
        address: '',
        bankName: '',
        ifscCode: '',
        declaration: false
    });

    // State to store errors
    const [errors, setErrors] = useState({});

    const handleClose = () => {
        const formContainer = document.querySelector('.ibc-form-container');
        formContainer.classList.add('hide-ibc-form');
        formContainer.classList.remove('show-ibc-form');

        const formBackground = document.querySelector('.ibc');
        formBackground.classList.remove('ibc-background');

    }

    const handleActionButton = () => {
        const formContainer = document.querySelector('.ibc-form-container');
        formContainer.classList.toggle('hide-ibc-form');
        formContainer.classList.toggle('show-ibc-form');
        document.querySelector('.first-form').style = "display:block";
        document.querySelector('.personal-details-form').style = "display:none";
        document.querySelector('.contact-info-form').style = "display:none";
        document.querySelector('.bank-info-form').style = "display:none";
        const formBackground = document.querySelector('.ibc');
        formBackground.classList.toggle('ibc-background');
    }

    const handleNextButton = (e) => {
        e.preventDefault();
        if (!formData.referralCode || !formData.experience || !formData.expType) {
            setErrors({
                referralCode: !formData.referralCode ? 'Referral code is required' : '',
                experience: !formData.experience ? 'Experience is required' : '',
                expType: !formData.expType ? 'Type is required' : ''
            });
        } else {
            setErrors({});
            document.querySelector('.first-form').style = "display:none";
            document.querySelector('.personal-details-form').style = "display:block";
        }
    }

    const personalDetailsBackButton = (e) => {
        e.preventDefault();
        document.querySelector('.first-form').style = "display:block";
        document.querySelector('.personal-details-form').style = "display:none";
    }

    const personalDetailsNextButton = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.stateName || !formData.cityName || !formData.certName) {
            setErrors({
                fullName: !formData.fullName ? 'Full name is required' : '',
                stateName: !formData.stateName ? 'State is required' : '',
                cityName: !formData.cityName ? 'City is required' : '',
                certName: !formData.certName ? 'Certificate name is required' : ''
            });
        } else {
            setErrors({});
            document.querySelector('.personal-details-form').style = "display:none";
            document.querySelector('.contact-info-form').style = "display:block";
        }
    }

    const contactInfoBackButton = (e) => {
        e.preventDefault();
        document.querySelector('.personal-details-form').style = "display:block";
        document.querySelector('.contact-info-form').style = "display:none";
    }

    const contactInfoNextButton = (e) => {
        e.preventDefault();
        if (!formData.mobileNumber || !formData.email || !formData.address) {
            setErrors({
                mobileNumber: !formData.mobileNumber ? 'Mobile number is required' : '',
                email: !formData.email ? 'Email is required' : '',
                address: !formData.address ? 'Address is required' : ''
            });
        } else {
            setErrors({});
            document.querySelector('.contact-info-form').style = "display:none";
            document.querySelector('.bank-info-form').style = "display:block";
        }
    }

    const bankAccountBackButton = (e) => {
        e.preventDefault();
        document.querySelector('.bank-info-form').style = "display:none";
        document.querySelector('.contact-info-form').style = "display:block";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.bankName || !formData.ifscCode || !formData.declaration) {
            setErrors({
                bankName: !formData.bankName ? 'Bank name is required' : '',
                ifscCode: !formData.ifscCode ? 'IFSC code is required' : '',
                declaration: !formData.declaration ? 'You must accept the declaration' : ''
            });
        } else {
            setErrors({});
            alert('Form submitted successfully!');
            handleClose();
        }
    }

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const options = [
        'option1',
        'option2',
        'option3',
        'option4',
        'option5'
    ]

    return (
        <div>
            <div className='ibc'>
                <div className="ibc-form-container hide-ibc-form">
                    <label className='closeButton' onClick={handleClose}>x</label>
                    <form className='ibc-form'>
                        {/* First Form */}
                        <div className="first-form">
                            <h1 style={{ color: "#FFC807" }}>IBC Registration Form</h1>
                            <label htmlFor="ref-code">Referral Code <span>*</span> </label>
                            <select name="referralCode" id="ref-code-select" value={formData.referralCode} onChange={handleInputChange}>
                                <option value="">Select Referral Code</option>
                                {
                                    options.map(opt => <option key={opt} value={opt}>{opt}</option>)
                                }
                            </select>
                            {errors.referralCode && <p className="error">{errors.referralCode}</p>}

                            <label htmlFor="experience">Experience <span>*</span> </label>
                            <select name="experience" value={formData.experience} onChange={handleInputChange}>
                                <option value="">Select Experience</option>
                                <option value="Fresher">Fresher</option>
                                <option value="1 to 3 year">1 to 3 year</option>
                                <option value="3 to 5 year">3 to 5 year</option>
                            </select>
                            {errors.experience && <p className="error">{errors.experience}</p>}

                            <label>Are you a <span>*</span></label>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <input type="radio" name="expType" value="DSA/Business" onChange={handleInputChange} />
                                </div>
                                <div>
                                    <h4>DSA/Business</h4>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <input type="radio" name="expType" value="Freelancer/Salaried" onChange={handleInputChange} />
                                </div>
                                <div>
                                    <h4>Freelancer/Salaried</h4>
                                </div>
                            </div>
                            {errors.expType && <p className="error">{errors.expType}</p>}

                            <button className='nextButton' onClick={handleNextButton}>Next</button>
                        </div>

                        {/* Personal Details Form */}

                        <div className="personal-details-form">
                            <h1>Personal Details</h1>
                            <div className='grid'>
                                <div>
                                    <h3>Enter your full name <span>*</span></h3>
                                    <input type="text" placeholder="Your answer" name="fullName" value={formData.fullName} onChange={handleInputChange} />
                                    {errors.fullName && <p className="error">{errors.fullName}</p>}

                                    <h3>State Name <span>*</span></h3>
                                    <select name="stateName" value={formData.stateName} onChange={handleInputChange}>
                                        <option value="">Select State</option>
                                        {options.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    {errors.stateName && <p className="error">{errors.stateName}</p>}
                                </div>

                                <div>
                                    <h3>District Name <span>*</span></h3>
                                    <input type="text" name="cityName" placeholder="Your answer" value={formData.cityName} onChange={handleInputChange} />
                                    {errors.cityName && <p className="error">{errors.cityName}</p>}

                                    <h3 style={{padding:"10px 0px"}}>Which name you want to print on certificate <span>*</span></h3>
                                    <div style={{ display: "flex",gap:"20px" }}>
                                        <div>
                                            <input type="radio" name="certName" value="Authorized Signature" onChange={handleInputChange} checked={formData.certName === "Authorized Signature"} />
                                        </div>
                                        <div>
                                            <h4 style={{ width: "100%" }}>Authorized Signature</h4>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",gap:"20px" }}>
                                        <div>
                                            <input type="radio" name="certName" value="Business Name" onChange={handleInputChange} checked={formData.certName === "Business Name"} />
                                        </div>
                                        <div>
                                            <h4 style={{ width: "100%" }}>Business Name</h4>
                                        </div>
                                    </div>
                                    {errors.certName && <p className="error">{errors.certName}</p>}
                                </div>
                            </div>

                            {/* Button container - aligned at the bottom of the form */}
                            <div className="personal-details-buttons">
                                <button className="backButton" onClick={personalDetailsBackButton}>Back</button>
                                <button className="nextButton" onClick={personalDetailsNextButton}>Next</button>
                            </div>
                        </div>


                        {/* Contact Info Form */}
                        <div className="contact-info-form">
                            <h1>Contact Info</h1>
                            <h3>Mobile Number <span>*</span></h3>
                            <input type="text" placeholder='Your answer' name='mobileNumber' value={formData.mobileNumber} onChange={handleInputChange} />
                            {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}

                            <h3>Email <span>*</span></h3>
                            <input type="email" placeholder='Your answer' name='email' value={formData.email} onChange={handleInputChange} />
                            {errors.email && <p className="error">{errors.email}</p>}

                            <h3>Full Address <span>*</span></h3>
                            <input name="address" placeholder='Your answer' value={formData.address} onChange={handleInputChange}></input>
                            {errors.address && <p className="error">{errors.address}</p>}

                            <div className='contactInfo-buttons'>
                                <button className='nextButton' onClick={contactInfoBackButton}>Back</button>
                                <button className='nextButton' onClick={contactInfoNextButton}>Next</button>
                            </div>
                        </div>

                        {/* Bank Info Form */}
                        <div className="bank-info-form">
                            <h1>Bank Info</h1>
                            <h3>Bank Name <span>*</span></h3>
                            <input type="text" placeholder='Your answer' name='bankName' value={formData.bankName} onChange={handleInputChange} />
                            {errors.bankName && <p className="error">{errors.bankName}</p>}

                            <h3>IFSC Code <span>*</span></h3>
                            <input type="text" placeholder='Your answer' name='ifscCode' value={formData.ifscCode} onChange={handleInputChange} />
                            {errors.ifscCode && <p className="error">{errors.ifscCode}</p>}

                            <h3>Declaration <span>*</span></h3>
                            <div style={{ display: "flex" }}>
                                <div style={{paddingTop:"8px"}}>
                                    <input type="checkbox" name="declaration" onChange={handleInputChange} />
                                </div>
                                <div>
                                    <p style={{ paddingLeft: "10px",fontSize:"15px" }}>I hereby declare that the information given above is correct.</p>
                                </div>
                            </div>
                            {errors.declaration && <p className="error">{errors.declaration}</p>}

                            <div className='bankInfo-buttons'>
                                <button className='nextButton' onClick={bankAccountBackButton}>Back</button>
                                <button className='nextButton' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className='ibc-logo' onClick={handleActionButton}>IBC</div>
        </div>
    )
}

export default IBC;
