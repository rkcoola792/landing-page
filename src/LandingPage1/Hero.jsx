import React from 'react'
import Form from './Form'

const Hero = () => {
  return (
    
<div className=''>
<div className=' flex flex-col justify-center items-center text-center md:flex-row md:justify-between md:text-left md:items-center py-12 md:py-24  '>
      <div className='left md:w-[50%] lg:w-[70%]  flex flex-col gap-4'>
        <div className='heading font-bold text-3xl'><h2>Media Dynox<span className='text-red-500'>.</span></h2></div>
        <div className='star-subheading relative'>
            <div className='absolute w-12 lg:right-72 md:right-12 md:top-6  top-12 hidden md:block'>
                <img src='/Star.webp' ></img>
            </div>
        <div className='subheading lg:text-5xl xl:text-6xl sm:text-4xl text-3xl font-semibold' style={{lineHeight:1.2}}><h1>Redefining  <br></br>Excellence in <br></br>Digital Marketing</h1></div>
        </div>
        <div className='description text-base md:w-[70%] text-[#646464] '><p className='leading-7 font-semibold'>Welcome to Media Dynox, your catalyst for digital excellence, blending innovation, expertise, and strategy. As a top-tier digital marketing company, we're committed to comprehensive solutions that drive results.</p></div>
      </div>
      <div className='right md:w-[50%] lg:w-[40%] w-[100%]'>
       <Form></Form>
      </div>
     
    </div>
</div>
  
   
  )
}

export default Hero
