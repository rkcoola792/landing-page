import React from 'react'
import InputDiv from './InputDiv'



const Form = () => {
  return (
    <div className='form flex flex-col border border-mainRed rounded-lg p-6 gap-4 bg-white mt-10 sm:mt-0'>
      <div className='top-heading font-semibold'><h3>Get In <span className='text-mainRed'>Touch</span></h3></div>
      <div className='mid-form flex flex-col gap-4 text-left' >
        <InputDiv heading="Your Name" subheading="name"></InputDiv>
        <InputDiv heading="Email Address" subheading="email"></InputDiv>
        <InputDiv heading="Phone Number" subheading="phone number"></InputDiv>
        <InputDiv heading="Service" subheading="service"></InputDiv>
       

      </div>
      <div className='bottom-button '>
        <button className='bg-mainRed w-full p-2 text-white rounded mt-2 font-semibold'><p className='text-base'> SUBMIT</p></button>
      </div>
    </div>
  )
}

export default Form
