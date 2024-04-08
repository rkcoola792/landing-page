import React from 'react'

const InputDiv = ({heading,subheading}) => {
  return (
  <div className='input flex flex-col gap-2'>
            <h3 className='text-sm font-semibold'>{heading}</h3>
           
            <input  className={`bg-secondary rounded px-4 text-sm p-2 text-gray-400`} placeholder={`Enter your ${subheading}`} ></input>
            
        </div>
  )
}

export default InputDiv
