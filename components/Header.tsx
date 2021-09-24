import Link from 'next/link'
import React from 'react'
import styles from '../styles/Components/Header.module.scss'

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.larguraMaxConatiner}>
                <div className={styles.logo}>
                    <h1>Portfólio</h1>
                </div>
                <button id="btn-mobile">&#9776;</button>
                <div className={styles.menu} id="menu">
                    <p><Link href="#about-me"><a>Sobre mim</a></Link></p>
                    <p><Link href="#projects"><a>Projetos</a></Link></p>
                    <p><Link href="#known"><a>Conhecimentos</a></Link></p>
                    <p><Link href="#contacts"><a>Contactos</a></Link></p>
                </div>
            </div>
        </header>
    )
}