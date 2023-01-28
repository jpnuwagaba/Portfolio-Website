import React from 'react'

const Education = () => {
  return (
    <div className='container w-[90%] md:w-[80%] mx-auto'>
      <div className='md:grid grid-cols-12 '>
        <div className="font-bold text-2xl mb-3 col-span-3 text-prussianBlue">Education</div>
        <div className='col-span-9 ml-[1.5rem] relative'>
          <div className='pb-12 border-l-2 border-celadonBlue pl-12 before:absolute before:bg-white before:bg-no-repeat before:bg-center before:bg-cover before:left-0 before:translate-x-[-50%] before:w-8 before:h-8 before:border-2 before:border-celadonBlue before:rounded-full'>
            <div className=' text-xl'><span className="text-prussianBlue font-bold"><a href="https://www.mak.ac.ug/" target={'_blank'}>Makerere University</a> - </span><span className='text-celadonBlue'>BSc. Land Surveying & Geomatics</span></div>
            <div className='mt-2'><span>Kampala, Uganda</span><span className='text-prussianBlue mx-2'>&#8226;</span><span>2019 to Date</span></div>
            <div className='mt-3'>
              <ul className='flex flex-wrap gap-2 text-sm'>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Geo Youth Mappers</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>MASS</li>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Digital Earth Africa</li>
              </ul>
            </div>
          </div>
          <div className='pb-12 border-l-2 border-celadonBlue pl-12 before:absolute before:bg-white before:bg-no-repeat before:bg-center before:bg-cover before:left-0 before:translate-x-[-50%] before:w-8 before:h-8 before:border-2 before:border-celadonBlue before:rounded-full'>
            <div className=' text-xl'><span className="text-prussianBlue font-bold">St. Andrea Kaahwa’s College. - </span><span className='text-celadonBlue'>Uganda Advanced Certificate of Education (UACE)</span></div>
            <div className='mt-2'><span>Hoima, Uganda</span><span className='text-prussianBlue mx-2'>&#8226;</span><span>2017 - 2018</span></div>
            <div className='mt-3'>
              <ul className='flex flex-wrap gap-2 text-sm'>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>School Activities</li>
                {/* <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Bible Sharing Club</li> */}
              </ul>
            </div>
          </div>
          <div className='pb-12 pl-12 before:absolute before:bg-white before:bg-no-repeat before:bg-center before:bg-cover before:left-0 before:translate-x-[-50%] before:w-8 before:h-8 before:border-2 before:border-celadonBlue before:rounded-full'>
            <div className=' text-xl'><span className="text-prussianBlue font-bold">Munta Royal College - </span><span className='text-celadonBlue'>Uganda Certificate of Education (UCE)</span></div>
            <div className='mt-2'><span>Bombo, Uganda</span><span className='text-prussianBlue mx-2'>&#8226;</span><span>2013 - 2016</span></div>
            <div className='mt-3'>
              <ul className='flex flex-wrap gap-2 text-sm'>
                <li className='bg-honeyDew inline py-1 px-4 rounded-full font-bold text-prussianBlue min-w-max'>Scool Activities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education