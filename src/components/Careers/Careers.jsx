import React, { useState } from 'react';
import Card from './Card/Card';

function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profile: '',
    city: '',
    total_experience: '',
    qualification: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const styles={
    inputStyle:{
     marginBottom:"0"
    },
    errorPara:{
      margin:"0"
    }
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.profile) formErrors.profile = 'Profile is required';
    if (!formData.city) formErrors.city = 'City is required';
    if (!formData.total_experience) formErrors.total_experience = 'Total Experience is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://growlotusfintech.in/growLotusMain/api/career-request', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
        
     
          alert('Form submitted successfully!');
          setFormData({
            name: '',
            email: '',
            profile: '',
            city: '',
            total_experience: '',
            qualification: '',
          });
          setErrors({});
        } else {
          console.error('Failed to submit form:', response.statusText);
          alert('Failed to submit form. Please try again later.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
    <Card />
    <Card />
    <Card />
    <Card />

    <div className="flex justify-center items-center text-center mt-[80px]">
        <div className="w-[90%] max-sm:w-[100%] text-left">
          <p className="text-3xl mb-4 text-center">
            Empower Your Career with <span className="text-[#FFC700]">At Grow Lotus</span>
          </p>
          <p className="text-1.2rem mb-4 text-center">
            <span className="text-[#FFC700]">At Grow Lotus</span>, we believe that our people are our greatest assets.
          </p>
        </div>
      </div>

    <div className="flex  pb-[70px] pt-[30px] px-[10px] flex-wrap justify-center items-center">
      

      <div className="p-6  w-[50%] max-sm:w-[100%] rounded-lg mt-[30px] shadow-lg mx-auto m-0" style={{margin:0}}>
        <h2 className="text-2xl font-bold mb-4 text-[#ffc804]">Join Our Team</h2>
        <p className="mb-6">We're always looking for passionate, talented individuals to join our growing team.</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.inputStyle}
              className={`border border-gray-300 rounded p-1 outline-[#FFC700]  ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500" style={styles.errorPara}>{errors.name}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">Email:</label>
            <input
              type="email"
              id="email"
              style={styles.inputStyle}
              value={formData.email}
              onChange={handleChange}
       
              className={`border border-gray-300 rounded p-1 outline-[#FFC700] ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500" style={styles.errorPara}>{errors.email}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="profile" className="font-medium">Profile:</label>
            <input
              type="text"
              id="profile"
              value={formData.profile}
              style={styles.inputStyle}
              onChange={handleChange}
             className={`border border-gray-300 rounded outline-[#FFC700]  p-1 ${errors.profile ? 'border-red-500' : ''}`}
            />
            {errors.profile && <p className="text-red-500" style={styles.errorPara}>{errors.profile}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="font-medium">City:</label>
            <input
              type="text"
              id="city"
              value={formData.city}
              style={styles.inputStyle}
              onChange={handleChange}
           
              className={`border border-gray-300 rounded outline-[#FFC700] p-1 ${errors.city ? 'border-red-500' : ''}`}
            />
            {errors.city && <p className="text-red-500" style={styles.errorPara}>{errors.city}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="totalExperience" className="font-medium">Total Experience:</label>
            <input
              type="text"
              id="total_experience"
              value={formData.total_experience}
              style={styles.inputStyle}
              onChange={handleChange}
            
              className={`border border-gray-300 rounded outline-[#FFC700]  p-1 ${errors.total_experience ? 'border-red-500' : ''}`}
            />
            {errors.total_experience && <p className="text-red-500" style={styles.errorPara}>{errors.total_experience}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="qualification" className="font-medium">Qualification:</label>
            <input
              type="text"
              id="qualification"
              value={formData.qualification}
              onChange={handleChange}
              
              className="border border-gray-300 rounded p-1 outline-[#FFC700] "
            />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-[#FFC700 ] text-white py-1 px-20 rounded" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Careers;
