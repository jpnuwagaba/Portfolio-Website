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
        <title>Michael Jurua</title>
        <link rel="icon" href="/mj-ico.svg" />
      </Head>
      <About />
      <Experience />
      <Skills />
      <Education />
    </>
  )
}

export default Home
