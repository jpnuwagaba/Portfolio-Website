import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Peter Nuwagaba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      {/* <Experience /> */}
      <Skills />
    </>
  )
}

export default Home
