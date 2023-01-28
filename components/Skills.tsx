import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container w-[90%] md:w-[80%] mx-auto  m-12 text-lg'>
      <div className='md:grid grid-cols-12'>
        <div className="font-bold text-2xl mb-3 col-span-3 text-prussianBlue">Skills</div>
        <div className='col-span-9 grid md:grid-cols-2 xl:grid-cols-2 gap-4'>
        <div id='skills-part-1' className='bg-honeyDew py-8 px-6 rounded-lg'>
            <h2 className="text-xl text-prussianBlue font-bold">Professional Skills</h2>
            <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Expertise</h3>
              <ul>
                <li className='list-disc m-2'>Civil Engineering Surveying</li>
                <li className='list-disc m-2'>Cadastral Surveying and Photogrammetry </li>
                <li className='list-disc m-2'>Remote Sensing (The use of Earth Observation data) </li>
                <li className='list-disc m-2'>Geographical Information Systems (GIS) </li>
                <li className='list-disc m-2'>Cloud Based Computing for remote sensing applications</li>
              </ul>
            </div>
            <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Key Skills</h3>
              <ul>
                <li className='list-disc m-2'>Project Management</li>
                <li className='list-disc m-2'>Open Street Mapping</li>
                <li className='list-disc m-2'>Geospatial data analysis and modelling</li>
                <li className='list-disc m-2'>Geospatial Information Management</li>
                <li className='list-disc m-2'>Good at programming in Java and Python languages</li>
              </ul>
            </div>
          </div>
          <div id='skills-part-1' className='bg-honeyDew py-8 px-6 rounded-lg'>
            <h2 className="text-xl text-prussianBlue font-bold">Tools & Instrumentation</h2>
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
            <div className="text-xl text-prussianBlue font-bold">Computer / IT</div>
            <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Microsoft Office Suite</h3>
              <ul>
                <li className='list-disc m-2'>Word</li>
                <li className='list-disc m-2'>Excel</li>
                <li className='list-disc m-2'>PowerPoint</li>
              </ul>
            </div>
            {/* <div className='ml-8 mt-4'>
              <h3 className="font-bold text-prussianBlue underline">Frameworks</h3>
              <ul>
                <li className='list-disc m-2'>ReactJS (NextJS)</li>
                <li className='list-disc m-2'>TailwindCSS</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills