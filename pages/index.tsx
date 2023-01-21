import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Education from '../components/Education'
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
      <Experience />
      <Skills />
      <Education />
    </>
  )
}

export default Home
