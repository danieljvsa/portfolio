import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Aboutme } from '../components/Aboutme'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import { Knowledge } from '../components/Knowledge'
import { Projects } from '../components/Projects'
import { Title } from '../components/Title'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Daniel Sá | Portfolio</title>
      </Head>
      <Header />
      <main className={styles.main}>
            <Title />
            <main className={styles.main_body}>
                <Aboutme />
                <Projects />
                <Knowledge />
                <Contact />
            </main>
      </main>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </div>
  )
}

export default Home
