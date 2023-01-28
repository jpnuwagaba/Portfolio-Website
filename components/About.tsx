import React from 'react'
import Section from './Section'
import Link from 'next/link';


const About = () => {
  return (
    <div className='container w-[90%] md:w-[80%] mx-auto text-[18px] m-12'>
      <div className='md:grid grid-cols-12 '>
        <div className="font-bold text-2xl mb-3 col-span-3 text-prussianBlue">About Me</div>
        <div className='col-span-9 bg-honeyDew p-8 rounded-lg'>
          <div className='text-justify'>I am a final year student working towards a Bachelor's of Science degree in Geomatics at Makerere University. I’m passionate about the use of Geomatics techniques and solutions in addressing real world problems.
            I am particularly determined to fulfil the demand for geospatial data access in the local communities especially those that are disaster prone, through my passion for research.
          </div>
          {/* <div className='font-bold text-celadonBlue underline mt-4'><Link href={'/aboutme'}>See more</Link></div> */}
        </div>
      </div>
    </div>
  )
}

export default About