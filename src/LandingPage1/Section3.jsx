import React from 'react'
import Section3Component from './Section3Component'

const Section3 = () => {
  return (
    <div className='section3 my-6 flex flex-col gap-12 '>
      <div className='top flex flex-col gap-2 text-center'>
        <h3 className='font-bold text-base'>What We Offer</h3>
        <h3 className='text-mainRed text-2xl font-semibold'>Where Strategy Meets Digital. </h3>
        <h3 className='text-2xl font-semibold'>Your Success Story Begins with Media Dynox.</h3>
      </div>
      <div className='bottom grid sm:grid-cols-2 lg:grid-cols-3   gap-4 justify-between'>
        <Section3Component heading="Holistic Strategy" subheading="Our position as one of the best digital marketing firms allows us to craft bespoke strategies that encompass all facets of digital marketing, ensuring a cohesive and impactful online presence."/>
        <Section3Component heading="Holistic Strategy" subheading="Our position as one of the best digital marketing firms allows us to craft bespoke strategies that encompass all facets of digital marketing, ensuring a cohesive and impactful online presence."/>
        <Section3Component heading="Holistic Strategy" subheading="Our position as one of the best digital marketing firms allows us to craft bespoke strategies that encompass all facets of digital marketing, ensuring a cohesive and impactful online presence."/>
        <Section3Component heading="Holistic Strategy" subheading="Our position as one of the best digital marketing firms allows us to craft bespoke strategies that encompass all facets of digital marketing, ensuring a cohesive and impactful online presence."/>
        <Section3Component heading="Holistic Strategy" subheading="Our position as one of the best digital marketing firms allows us to craft bespoke strategies that encompass all facets of digital marketing, ensuring a cohesive and impactful online presence."/>
        <Section3Component heading="Holistic Strategy" subheading="Our position as one of the best digital marketing firms allows us to craft bespoke strategies that encompass all facets of digital marketing, ensuring a cohesive and impactful online presence."/>
      </div>
    </div>
  )
}

export default Section3
