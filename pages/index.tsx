import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Expertise from '@/components/sections/Expertise'
import Projects from '@/components/sections/Projects'
import OpenSource from '@/components/sections/OpenSource'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Sá | Backend Engineer & Distributed Systems</title>
        <meta name="description" content="Backend engineer specializing in distributed systems, IoT, GNSS, and telemetry platforms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <OpenSource />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default Home
