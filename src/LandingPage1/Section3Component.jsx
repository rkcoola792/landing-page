import React from 'react'

const Section3Component = ({icon,heading,subheading}) => {
  return (
    <div className='section3-component  border border-mainRed rounded-lg p-2'>
    <div className='bg-secondary flex flex-col gap-4 p-6 rounded-lg'>
        <div className='icon w-8'><img src="horn.webp" alt='icon'></img></div>
        <div className='heading font-bold text-xl'><h2>{heading}</h2></div>
        <div className='subheading text-sm text-gray-500'><p>{subheading}</p></div>
    </div>
      
    </div>
  )
}

export default Section3Component
