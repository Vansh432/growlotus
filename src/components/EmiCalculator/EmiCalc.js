import React, { useState } from 'react';

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

    return (
        <div className='mt-[50px] bg-[#FFC700;] rounded-[10px] p-[20px_25px]' >
            <h2 className='text-3xl font-bold text-[#fff]'>EMI Calculator</h2>
            <div className='flex flex-wrap justify-between' style={{ width: '100%', textAlign: 'left' }}>


                <div className='w-[49%] max-sm:w-[100%]'>
                    <div className='mb-[30px]'>
                        <label className='text-[18px] font-[700] p-0 m-0'>Loan Amount</label>
                        <input className='m-0 pl-0'
                            type="range"
                            min="100000"
                            max="500000000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                        />
                        <div className='text-[20px]  border-[1px] border-[#fff] p-[5px_10px] bg-[#fff] rounded-[5px] w-fit'>₹{loanAmount.toLocaleString()}</div>
                    </div>

                    <div className='mb-[30px]'>
                        <label className='text-[18px] font-[700] p-0 m-0'>Interest Rate</label>
                        <input
                        className='m-0 pl-0'
                            type="range"
                            min="1"
                            max="15"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                        />
                        <div className='text-[20px]  border-[1px] border-[#fff] p-[5px_10px] bg-[#fff] rounded-[5px] w-fit'>{interestRate}%</div>
                    </div>

                    <div className='mb-[30px]'> 
                        <label className='text-[18px] font-[700] p-0 m-0'>Loan Period</label>
                        <input
                        className='m-0 pl-0' 
                            type="range"
                            min="5"
                            max="40"
                            value={loanPeriod}
                            onChange={(e) => setLoanPeriod(Number(e.target.value))}
                        />
                        <div className='text-[20px]  border-[1px] border-[#fff] p-[5px_10px] bg-[#fff] rounded-[5px] w-fit'>{loanPeriod} years</div>
                    </div>
                </div>
                <div className='w-[49%] max-sm:w-[100%] '>
                    <div style={{ backgroundColor: '#f0f4ff', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
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
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MortgageCalculator;
