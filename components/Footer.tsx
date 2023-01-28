import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto w-[90%] w-[80%] flex justify-left border-t-2 border-celadonBlue'>
      <div className='text-sm flex space-x-12 py-4 font-bold text-celadonBlue'>
        <a href="https://www.linkedin.com/in/jurua-michael/" target={'_blank'}>LinkedIn</a>
        <a href="https://twitter.com/MichaelJurua" target={'_blank'}>Twitter</a>
        <a href="mailto:michaeljurua@gmail.com" target={'_blank'}>Email</a>
      </div>
    </div>
  )
}

export default Footer