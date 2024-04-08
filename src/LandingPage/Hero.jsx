import React from 'react'
import Form from './Form'

const Hero = () => {
  return (
    <div className='bg-red px-4 sm:px-24 2xl:px-0 max-w-[1440px] flex justify-between  items-center h-svh bg-gradient-to-t from- to-white  '>
      <div className='left w-[70%] flex flex-col gap-4'>
        <div className='heading font-bold'><h2>Media Dynox<span className='text-red-500'>.</span></h2></div>
        <div className='star-subheading relative'>
            <div className='absolute w-12 right-72  top-12'>
                <img src='/Star.webp' ></img>
            </div>
        <div className='subheading text-6xl font-semibold' style={{lineHeight:1.2}}><h1>Redefining <br></br>Excellence in <br></br>Digital Marketing</h1></div>
        </div>
        <div className='description text-base w-[70%] text-[#646464] '><p className='leading-7 font-semibold'>Welcome to Media Dynox, your catalyst for digital excellence, blending innovation, expertise, and strategy. As a top-tier digital marketing company, we're committed to comprehensive solutions that drive results.</p></div>
      </div>
      <div className='right w-[40%]'>
       <Form></Form>
      </div>
    </div>
  )
}

export default Hero
