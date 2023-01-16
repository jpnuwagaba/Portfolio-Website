import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='relative h-200 bg-[url(/images/neural-bg.jpg)] bg-center bg-no-repeat bg-cover text-prussianBlue h-40 flex justify-center mb-72 md:mb-44'>
        <div className="container absolute top-1/2 left-16 md:top-3/4 md:left-auto md:flex justify-between items-center sm:space-y-4">
          <div className='md:flex items-center md:space-x-4'>
            <div className="h-40 w-40 rounded-full bg-[url(/images/profile.jpg)] bg-center bg-no-repeat bg-cover"></div>
            <div className='mt-4'>
              <h3 className='text-2xl font-bold'>Nuwagaba John Peter</h3>
              <p>Student Surveyor / Web Developer</p>
            </div>
          </div>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link className="font-bold bg-powderBlue rounded py-2 px-3" href={''}>Resume</Link>
            <Link className="font-bold bg-powderBlue rounded py-2 px-3" href={'/reachout'}>Reach out</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header