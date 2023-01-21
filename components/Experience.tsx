import React from 'react'
import Link from 'next/link';

const Experience = () => {
  return (
    <div className='container w-[90%] md:w-[80%] mx-auto m-12'>
      <div className='md:grid grid-cols-12 '>
        <div className="font-bold text-2xl mb-3 col-span-3 text-prussianBlue">Experience</div>
        <div className='col-span-9 ml-[1.5rem] relative'>
          <div className='pb-12 border-l-2 border-celadonBlue pl-12 before:absolute before:bg-[url(/images/scapes-logo.png)] before:bg-no-repeat before:bg-center before:bg-cover before:left-0 before:translate-x-[-50%] before:w-12 before:h-12 before:border-2 before:border-celadonBlue before:rounded-full'>
            <div className=' text-xl'><span className="text-prussianBlue font-bold">Intern Land Surveyor - </span><span className='text-celadonBlue'><a href="https://scapesurveys.vercel.app" target={'_blank'}>Scapes & Surveys Asociates.</a></span></div>
            <div className='mt-2'><span>Kampala, Uganda</span><span className='text-prussianBlue mx-2'>&#8226;</span><span>May 2022 - September 2022</span></div>
            <div className='mt-3'>
              <ul className='flex flex-wrap gap-2 text-sm'>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Boundary Surveys</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Topographic Surveys</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>GIS</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>GPS</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Laser Surveys</li>
              </ul>
            </div>
          </div>
          <div className='pb-12 pl-12 before:absolute before:bg-[url(/images/Mak-Logo.png)] before:bg-no-repeat before:bg-center before:bg-cover before:left-0 before:translate-x-[-50%] before:w-12 before:h-12 before:border-2 before:border-celadonBlue before:rounded-full'>
            <div className=' text-xl'><span className="text-prussianBlue font-bold">Survey Camp - </span><span className='text-celadonBlue'>Recess Semester at Makerere University</span></div>
            <div className='mt-2'><span>Kampala, Uganda</span><span className='text-prussianBlue mx-2'>&#8226;</span><span>January 2022 - February 2022</span></div>
            <div className='mt-3'>
              <ul className='flex flex-wrap gap-2 text-sm'>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Boundary Surveys</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Topographic Surveys</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>GIS</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Engineering Surveys</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience