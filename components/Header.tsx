import React from 'react'
import Link from 'next/link';
import SocialBar from './SocialBar';

const Header = () => {
  return (
    <>
      <div className='relative h-200 (bg-honeyDew ) bg-celadonBlue bg-center bg-no-repeat bg-cover text-prussianBlue h-40 flex justify-center mb-64 md:mb-44'>
        <div className="container w-[90%] md:w-[80%] mx-auto absolute top-2/3 left-auto md:top-3/4 md:left-auto md:flex justify-between items-center sm:space-y-4">
          <div className='md:flex items-center md:space-x-4'>
            <div className="h-28 w-28 md:h-40 md:w-40 rounded-full bg-[url(/images/jurua-michael.jpg)] bg-center bg-no-repeat bg-cover"></div>
            <div className='mt-4'>
              <h3 className='text-3xl font-bold'>Michael Jurua</h3>
              <p>Land Surveyor</p>
            </div>
          </div>
          {/* <div className="mt-4 flex space-x-4 md:mt-0">
            <Link className="font-bold bg-powderBlue rounded py-2 px-3" href={''}>Resume</Link>
            <Link className="font-bold bg-powderBlue rounded py-2 px-3" href={'/reachout'}>Reach out</Link>
          </div> */}
          <div>
            <SocialBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header