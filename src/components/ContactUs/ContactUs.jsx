import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactInfo from './ContactInfo/ContactInfo'

const ContactUs = () => {
  return (
    <>
    <div className='w-[90%] m-auto'>
        <ContactForm />
        <ContactInfo />
    </div>
    </>
  )
}

export default ContactUs