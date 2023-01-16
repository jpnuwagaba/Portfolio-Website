import Head from 'next/head'
import React from 'react'

const aboutme = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="text-center font-bold text-green-400 text-4xl">About Me</div>
      </div>
    </>
  )
}

export default aboutme