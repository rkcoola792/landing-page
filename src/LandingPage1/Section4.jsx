// 

import React from 'react'

const Section4 = () => {
  return (
    <div className="section3   ">
      <div className="image relative ">
        <img
          src="redBackground.webp"
          alt=""
          className='h-[300px] sm:h[350px]  w-full rounded-lg xl:h-auto z-10'
        />
        <div className="texts px-4  w-full absolute xl:flex-row  flex flex-col justify-between  top-16 md:top-14 lg:top-12   xl:top-[80px] 2xl:top-28  lg:px-32 items-center ">
          <div className="left flex flex-col gap-8  items-center xl:items-baseline text-center lg:text-left">
            <div className="heading">
              <h1 className="text-white font-semibold lg:text-[36px] text-2xl sm:text-3xl text-center xl:text-left lg:leading-[40px] pt-6">
                Let’s discuss make <br></br>something cool together.
              </h1>
            </div>
            
          </div>
          <div className="right  py-6">
            <div className="contact-us-button bg-white text-mainRed p-2 px-6 py-3 font-semibold rounded-full cursor-pointer text-base sm:text-">
              Get in Touch
            </div>
          </div>
        </div>

       

      </div>
    </div>
  );
}

export default Section4
