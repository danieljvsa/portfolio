import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Aboutme } from '../components/Aboutme'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import { Knowledge } from '../components/Knowledge'
import { Projects } from '../components/Projects'
import { Title } from '../components/Title'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Sá | Portfolio</title>
        <meta name="description" content="Portfolio de Daniel Sá - Desenvolvedor Full-Stack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Title />
        <Aboutme />
        <Projects />
        <Knowledge />
        <Contact />
      </main>
    </>
  )
}

export default Home
