import React from 'react'

const Education = () => {
  return (
    <div className='container w-[90%] md:w-[80%] mx-auto'>
      <div className='md:grid grid-cols-12 '>
        <div className="font-bold text-2xl mb-3 col-span-3 text-prussianBlue">Education</div>
        <div className='col-span-9 ml-[1.5rem] relative'>
          <div className='pb-12 border-l-2 border-celadonBlue pl-12 before:absolute before:bg-[url(/images/Mak-Logo.png)] before:bg-no-repeat before:bg-center before:bg-cover before:left-0 before:translate-x-[-50%] before:w-12 before:h-12 before:border-2 before:border-celadonBlue before:rounded-full'>
            <div className=' text-xl'><span className="text-prussianBlue font-bold"><a href="https://www.mak.ac.ug/" target={'_blank'}>Makerere University</a> - </span><span className='text-celadonBlue'>BSc. Land Surveying & Geomatics</span></div>
            <div className='mt-2'><span>Kampala, Uganda</span><span className='text-prussianBlue mx-2'>&#8226;</span><span>January 2021 to Date</span></div>
            <div className='mt-3'>
              <ul className='flex flex-wrap gap-2 text-sm'>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Class Coordinator</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Geo Youth Mappers</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>MASS</li>
              </ul>
            </div>
          </div>
          <div className='pb-12 border-l-2 border-celadonBlue pl-12 before:absolute before:bg-[url(/images/ngo.jfif)] before:bg-no-repeat before:bg-center before:bg-cover before:left-0 before:translate-x-[-50%] before:w-12 before:h-12 before:border-2 before:border-celadonBlue before:rounded-full'>
            <div className=' text-xl'><span className="text-prussianBlue font-bold"><a href="https://namilyangocollege.sc.ug/" target={'_blank'}>Namilyango College - </a></span><span className='text-celadonBlue'>Uganda Advanced Certificate of Education (UACE)</span></div>
            <div className='mt-2'><span>Mukono, Uganda</span><span className='text-prussianBlue mx-2'>&#8226;</span><span>2018 - 2019</span></div>
            <div className='mt-3'>
              <ul className='flex flex-wrap gap-2 text-sm'>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>C.O.U Coordinator</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Bible Sharing Club</li>
              </ul>
            </div>
          </div>
          <div className='pb-12 pl-12 before:absolute before:bg-[url(/images/ngo.jfif)] before:bg-no-repeat before:bg-center before:bg-cover before:left-0 before:translate-x-[-50%] before:w-12 before:h-12 before:border-2 before:border-celadonBlue before:rounded-full'>
            <div className=' text-xl'><span className="text-prussianBlue font-bold"><a href="https://namilyangocollege.sc.ug/" target={'_blank'}>Namilyango College - </a></span><span className='text-celadonBlue'>Uganda Certificate of Education (UCE)</span></div>
            <div className='mt-2'><span>Mukono, Uganda</span><span className='text-prussianBlue mx-2'>&#8226;</span><span>2014 - 2017</span></div>
            <div className='mt-3'>
              <ul className='flex flex-wrap gap-2 text-sm'>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Bible Sharing Club</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education