import React from 'react'
import Section from './Section'
import Link from 'next/link';


const About = () => {
  return (
    <div className='container w-[80%] mx-auto text-[18px] m-12'>
      <div className='md:grid grid-cols-12 '>
        <div className="font-bold text-2xl mb-3 col-span-3 text-prussianBlue">About Me</div>
        <div className='col-span-9'>
          <div className='text-justify'>As a land surveying student, I have a strong foundation in both the technical and practical aspects of the field. My passion for front-end web development allows me to take that knowledge and apply it to creating visually appealing and user-friendly websites. With a keen eye for design and a desire to stay up to date with the latest web development trends, I strive to create websites that are not only functional but also visually stunning. I am excited to continue honing my skills and bringing my unique perspective to the world of web development.</div>
          <div className='font-bold text-celadonBlue underline mt-4'><Link href={'/aboutme'}>See more</Link></div>
        </div>
      </div>
    </div>
  )
}

export default About