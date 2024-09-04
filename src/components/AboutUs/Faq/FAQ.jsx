import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="faq-item">
                <div className="faq-question" onClick={() => handleToggle(1)}>
                    1. What services does Grow Lotus Fintech offer?
                    <span className={`arrow ${activeIndex === 1 ? 'up' : 'down'}`}></span>
                </div>
                <div className={`faq-answer ${activeIndex === 1 ? 'open' : ''}`}>
                    We offer a wide range of financial services including secured loans, project funding, equity funding, emergency funding, personal loans, home loans, and tax consulting.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question" onClick={() => handleToggle(2)}>
                    2. How can I apply for a loan with Grow Lotus Fintech?
                    <span className={`arrow ${activeIndex === 2 ? 'up' : 'down'}`}></span>
                </div>
                <div className={`faq-answer ${activeIndex === 2 ? 'open' : ''}`}>
                    You can apply for a loan by visiting our website and filling out the application form, or by contacting our customer service at 1800 180 1800.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question" onClick={() => handleToggle(3)}>
                    3. What are the eligibility criteria for securing a loan?
                    <span className={`arrow ${activeIndex === 3 ? 'up' : 'down'}`}></span>
                </div>
                <div className={`faq-answer ${activeIndex === 3 ? 'open' : ''}`}>
                    Eligibility criteria vary based on the type of loan. Generally, factors like credit score, income, and financial stability are considered. For specific requirements, please visit the respective loan service page on our website.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question" onClick={() => handleToggle(4)}>
                    4. How long does it take to get loan approval?
                    <span className={`arrow ${activeIndex === 4 ? 'up' : 'down'}`}></span>
                </div>
                <div className={`faq-answer ${activeIndex === 4 ? 'open' : ''}`}>
                    Loan approval times vary depending on the type of loan and the completeness of your application. Typically, personal and emergency loans have quicker approval times compared to secured and project funding loans.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question" onClick={() => handleToggle(5)}>
                    5. What are the interest rates for loans?
                    <span className={`arrow ${activeIndex === 5 ? 'up' : 'down'}`}></span>
                </div>
                <div className={`faq-answer ${activeIndex === 5 ? 'open' : ''}`}>
                    Interest rates vary based on the loan type and your credit profile. We offer competitive rates and encourage you to contact us for personalized rate information.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question" onClick={() => handleToggle(6)}>
                    6. How can I contact Grow Lotus Fintech for further assistance?
                    <span className={`arrow ${activeIndex === 6 ? 'up' : 'down'}`}></span>
                </div>
                <div className={`faq-answer ${activeIndex === 6 ? 'open' : ''}`}>
                    You can reach us by phone at 1800 180 1800, email us at info@growlotusfintech.com, or visit our office at 302, 3rd Floor, Global Foyer Mall, Golf Course Road, Gurugram, Haryana, India 122009.
                </div>
            </div>
        </div>
    );
};

export default FAQ;
