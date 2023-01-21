import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto w-[90%] w-[80%] flex justify-center border-t-2 border-celadonBlue'>
      <div className='text-sm flex space-x-8 py-4 font-bold text-celadonBlue'>
        <a href="https://github.com/jpnuwagaba" target={'_blank'}>Github</a>
        <a href="https://www.linkedin.com/in/john-peter-nuwagaba-39a2a11b9/" target={'_blank'}>LinkedIn</a>
        <a href="https://twitter.com/jpnuwagaba" target={'_blank'}>Twitter</a>
        <a href="mailto:jpnuwagaba1@gmail.com" target={'_blank'}>Email</a>
      </div>
    </div>
  )
}

export default Footer