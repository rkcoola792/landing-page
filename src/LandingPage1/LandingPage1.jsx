import React from 'react'
import Hero from './Hero'
import Section2 from './Section2'
import Section3 from './Section3'
import FAQ from './FAQ'
import Section4 from './Section4'

const LandingPage1 = () => {
  return (

    
    <div className='landing-page px-4 sm:px-8 md:px-12 lg:px-24  2xl:px-0 max-w-[1280px] mx-auto'>
    <Hero></Hero>
    <Section2></Section2>
    <Section3></Section3>
    <Section4></Section4>
    <FAQ></FAQ>
    </div>
  )
}

export default LandingPage1
