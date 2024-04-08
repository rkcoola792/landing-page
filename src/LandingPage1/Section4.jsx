import React from 'react'

const Section4 = () => {
  return (
    <div className='section4 my '>
      <div className='background-image relative '>
        <img src="redBackground.webp" className='object-cover '></img>
        <div className='content flex justify-between items-center  absolute top-24  left-24 w-[900px] '>
            <h2 className='text-white text-5xl font-bold' style={{lineHeight:1.1}}>Lets discuss make<br></br>something cool together 
            </h2>
            <div className='bg-white p-4 px-8 rounded-full' >
            <h2 className='text text-mainRed font-semibold'>Get in Touch</h2>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Section4
