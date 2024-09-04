import React, { useState } from 'react';
import './ContactForm.css';
import { officeImage } from '../../../assets/index.js';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation function
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.mobile) {
            newErrors.mobile = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Phone number is invalid. Must be 10 digits.';
        }
        if (!formData.message) newErrors.message = 'Message is required';

        return newErrors;
    };

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        setIsSubmitting(true);

        try {
            const response = await fetch('https://growlotusfintech.in/growLotusMain/api/contactuoweb', {
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
                    mobile: '',
                    message: ''
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
    };

    return (
        <div className="contact-form-container ">
            <div className="form-image">
                <img src={officeImage} alt="Building" />
            </div>
            <div className="form-content">
                <h2>Let's Get In Touch</h2>
                <p>We'd love to hear from you! Whether you have questions about our services, need assistance, or want to provide feedback, our team is here to help.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                    
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                    
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="8"
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                    
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
