import React, { useState,useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
const MortgageCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [interestRate, setInterestRate] = useState(5);
    const [loanPeriod, setLoanPeriod] = useState(30);

    const calculateMonthlyPayment = (principal, annualInterestRate, years) => {
        const monthlyInterestRate = annualInterestRate / 100 / 12;
        const numberOfPayments = years * 12;
        const monthlyPayment =
            (principal * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        return monthlyPayment.toFixed(2);
    };

    const calculateTotalInterest = (monthlyPayment, years, principal) => {
        const totalPayment = monthlyPayment * years * 12;
        return (totalPayment - principal).toFixed(2);
    };

    const monthlyPayment = calculateMonthlyPayment(
        loanAmount,
        interestRate,
        loanPeriod
    );
    const totalInterestPaid = calculateTotalInterest(
        monthlyPayment,
        loanPeriod,
        loanAmount
    );
    useEffect(() => {
        AOS.init({
    
          duration: 1000,
          easing: "ease-out-cubic",
          delay:100,
          offset:320,
        });
      }, []);

    return (
        <div className='mt-[50px] shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-[10px] mt-[110px] p-[20px_25px]' >
            <h2 className='text-3xl font-bold text-[#000]'>EMI Calculator</h2>
            <div className='flex flex-wrap justify-between' style={{ width: '100%', textAlign: 'left' }}>


                <div className='w-[49%] max-sm:w-[100%]'>
                    <div className='mb-[30px]'>
                        <label className='text-[18px] font-[700] p-0 m-0'>Loan Amount</label>
                        <input className='m-0 pr-0'
                            type="range"
                            min="100000"
                            max="500000000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                          />
                        <div  className='text-[20px]  border-[1px] border-[#FFCF32] p-[5px_10px] bg-[#fff] rounded-[5px] w-fit'>₹{loanAmount.toLocaleString()}</div>
                    </div>

                    <div className='mb-[30px]'>
                        <label className='text-[18px] font-[700] p-0 m-0'>Interest Rate</label>
                        <input
                        className='m-0 pr-0'
                            type="range"
                            min="1"
                            max="30"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                        />
                        <div className='text-[20px]   border-[1px] border-[#FFCF32] p-[5px_10px] bg-[#fff] rounded-[5px] w-fit'>{interestRate}%</div>
                    </div>

                    <div className='mb-[30px]'> 
                        <label className='text-[18px] font-[700] p-0 m-0'>Loan Period</label>
                        <input
                        className='m-0 pr-0' 
                            type="range"
                            min="5"
                            max="30"
                            value={loanPeriod}
                            onChange={(e) => setLoanPeriod(Number(e.target.value))}
                        />
                        <div className='text-[20px]   border-[1px] border-[#FFCF32] p-[5px_10px] bg-[#fff] rounded-[5px] w-fit'>{loanPeriod} years</div>
                    </div>
                </div>
                <div className='w-[49%] max-sm:w-[100%]'>
                    <div className=' bg-[#FFCF32]' style={{ backgroundColor: '#FFCF32', padding: '20px', borderRadius: '8px', marginTop: '20px' }}  data-aos="flip-left">
                        <h3>Monthly Payment</h3>
                        <div style={{ fontSize: '2em', fontWeight: 'bold',color:"#03b403" }}>₹{monthlyPayment}</div>
                        <p className='text-[.9rem]'> This is an approximate monthly repayment amount for your mortgage based on the given inputs.</p>
                        <hr />
                        <div className='flex justify-between  mt-[20px]'>
                        <div>
                        <h3 >Total Amount with Interest Paid</h3>
                       
                        <p className='text-[.8rem]'>This is the total interest you would pay over the entire loan period.</p>
                        </div>
                        <span>₹
                        {totalInterestPaid}
                        </span>
                        </div>

                        <div className='mt-[30px]   '>
                         <h2 className='text-[1.5rem] font-[800] text-left text-[#003C07] mb-0'>Ready to get started</h2>
                         <p className='mt-0 mb-0 text-[#000]  text-[.8rem] '>Get in touch with our service </p>
                         <p className='mt-0 text-[#000] text-[.8rem] mb-[20px]'>adviors for personalize advice</p>

                         <button className='btn-primary bg-[#fff] text-[#003C07] font-[700] transition duration-[0.4s] hover:bg-[#d5d5d5]'>Book a Meeting</button>
 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MortgageCalculator;
