import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <ul className='flex space-x-6'>
        <li className='bg-gray-200 rounded m-2 py-2 px-4 font-bold'><Link href={'/'}>Home</Link></li>
        <li className='bg-gray-200 rounded m-2 py-2 px-4 font-bold'><Link href={'/aboutme'}>About Me</Link></li>
      </ul>
    </div>
  )
}

export default Navbar