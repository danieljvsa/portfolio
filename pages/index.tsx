import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Aboutme } from '../components/Aboutme'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import { Knowledge } from '../components/Knowledge'
import { Projects } from '../components/Projects'
import { Title } from '../components/Title'
import { EngineeringFocus } from '../components/EngineeringFocus'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { CurrentExploration } from '../components/CurrentExploration'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Sá | Backend Engineer & Distributed Systems</title>
        <meta name="description" content="Backend engineer specializing in distributed systems, geospatial platforms, and GNSS technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Title />
        <EngineeringFocus />
        <ExperienceTimeline />
        <Projects />
        <CurrentExploration />
        <Knowledge />
        <Aboutme />
        <Contact />
      </main>
    </>
  )
}

export default Home
