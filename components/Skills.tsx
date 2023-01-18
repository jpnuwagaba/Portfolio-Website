import React from 'react'

const Skills = () => {
  return (
    <div className='container w-[80%] mx-auto  m-12 text-lg'>
      <div className='md:grid grid-cols-12'>
        <div className="font-bold text-2xl mb-3 col-span-3 text-prussianBlue">Skills</div>
        <div className='col-span-9 grid lg:grid-cols-2 gap-8'>
          <div id='skills-part-1' className='bg-honeyDew py-8 px-6 rounded-lg'>
            <div className="text-2xl text-prussianBlue font-bold">Land Surveying & GIS</div>
            <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Software</h3>
              <ul>
                <li className='list-disc m-2'>ArcGIS</li>
                <li className='list-disc m-2'>AutoCAD Civil3D</li>
                <li className='list-disc m-2'>QGIS</li>
                <li className='list-disc m-2'>Google Earth</li>
              </ul>
            </div>
            <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Equipment</h3>
              <ul>
                <li className='list-disc m-2'>Total Stations</li>
                <li className='list-disc m-2'>GPS Receivers</li>
                <li className='list-disc m-2'>Laser Scan Stations</li>
              </ul>
            </div>
          </div>
          <div id='skills-part-2' className='bg-honeyDew py-8 px-6 rounded-lg'>
            <div className="text-2xl text-prussianBlue font-bold">Web Development</div>
            <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Languages</h3>
              <ul>
                <li className='list-disc m-2'>HTML</li>
                <li className='list-disc m-2'>CSS</li>
                <li className='list-disc m-2'>JavaScript</li>
              </ul>
            </div>
            <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Frameworks</h3>
              <ul>
                <li className='list-disc m-2'>ReactJS</li>
                <li className='list-disc m-2'>TailwindCSS</li>
              </ul>
            </div>
          </div>
          <div id='skills-part-2' className='bg-honeyDew py-8 px-6 rounded-lg'>
            <div className="text-2xl text-prussianBlue font-bold">Graphic Design</div>
            <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Design Software</h3>
              <ul>
                <li className='list-disc m-2'>Adobe Illustrator</li>
                <li className='list-disc m-2'>Canva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills