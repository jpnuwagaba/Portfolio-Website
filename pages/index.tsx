import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Peter Nuwagaba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  )
}

export default Home
