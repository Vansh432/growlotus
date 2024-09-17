import React from 'react'
import './Card.css'

const Card = () => {

    const handleApplyNow = ()=>{
        document.querySelector('.apply-form').classList.remove('hide-apply-form');
        document.querySelector('.apply-form').classList.add("show-apply-form");
        document.querySelector('.apply-form-container').classList.remove('hide-apply-form');
        document.querySelector('.apply-form-container').classList.add("show-apply-form");
    }

    const handleApply = (e)=>{
        e.preventDefault();
        document.querySelector('.apply-form').classList.remove('show-apply-form');
        document.querySelector('.apply-form').classList.add("hide-apply-form");
        document.querySelector('.apply-form-container').classList.remove('show-apply-form');
        document.querySelector('.apply-form-container').classList.add("hide-apply-form");
        alert('Applied Successfully');
    }

    const handleClose = () => {
        const formContainer = document.querySelector('.apply-form');
        formContainer.classList.add('hide-apply-form');
        formContainer.classList.remove('show-apply-form');

        const formBackground = document.querySelector('.apply-form-container');
        formBackground.classList.remove('show-apply-form');
        formBackground.classList.add('hide-apply-form');

    }

  return (
    <>
        <div className='card-container'>
        <div className="card">
        <div className='items'>
            <div className='heading'>Title</div>
            <div className='details'>Developer</div>
        </div>
        <div className='items'>
            <div className='heading'>Department</div>
            <div className='details'>Loan Department</div>
        </div>
        <div className='items'>
            <div className='heading'>Employment Type</div>
            <div className='details'>Full Time</div>
        </div>
        <div className='items'>
            <div className='heading'>Location</div>
            <div className='details'>Remote</div>
        </div>
        <div>
            <button className='apply-button' onClick={handleApplyNow}>Apply Now</button>
        </div>
        </div>
        </div>
        <div className='apply-form-container hide-apply-form'>
            <form className='apply-form hide-apply-form'>
                <label className='closeButton' onClick={handleClose}>x</label>
                <h1>Enter your details</h1>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name='Name' placeholder='Enter your name' required />
                </div>
                <div>
                    <label htmlFor="email" >Email : </label>
                    <input type="email" required placeholder='Enter your email' />
                </div>
                <div>
                    <label htmlFor="mobile" >Mobile No : </label>
                    <input type="text" required  placeholder='Enter your mobile' />
                </div>
                <div>
                    <label htmlFor="resume">Upload Resume : </label>
                    <input type="file" name='resume' />
                </div>
                <div>
                    <button className='apply-button' onClick={ handleApply } > Apply </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Card
