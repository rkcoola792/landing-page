import React from 'react'
import Form from './Form'

const Hero = () => {
  return (
    

    <div className='bg-red flex flex-col justify-center items-center text-center sm:flex-row sm:justify-between sm:text-left sm:items-center my-12 sm:mt-24 '>
      <div className='left sm:w-[70%] flex flex-col gap-4'>
        <div className='heading font-bold'><h2>Media Dynox<span className='text-red-500'>.</span></h2></div>
        <div className='star-subheading relative'>
            <div className='absolute w-12 right-72  top-12 hidden sm:block'>
                <img src='/Star.webp' ></img>
            </div>
        <div className='subheading sm:text-6xl text-3xl font-semibold' style={{lineHeight:1.2}}><h1>Redefining <br></br>Excellence in <br></br>Digital Marketing</h1></div>
        </div>
        <div className='description text-base sm:w-[70%] text-[#646464] '><p className='leading-7 font-semibold'>Welcome to Media Dynox, your catalyst for digital excellence, blending innovation, expertise, and strategy. As a top-tier digital marketing company, we're committed to comprehensive solutions that drive results.</p></div>
      </div>
      <div className='right sm:w-[40%] w-[100%]'>
       <Form></Form>
      </div>
      {/* <div className='bacground absolute -z-10'>
        <img src="/BG.png"></img>
      </div> */}
    </div>
   
  )
}

export default Hero
