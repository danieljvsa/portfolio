import Link from 'next/link'
import React from 'react'
import styles from '../styles/Components/Title.module.scss'

export function Title(){
    return(
        <header className={styles.main_header}>
            <div className={styles.header_div}>
                <div className={styles.text_header}>
                    <p>
                        Olá, eu sou o 
                    </p><br />
                    <h2>Daniel Sá</h2> <br />
                    <p>
                        Desenvolvedor Full-Stack.
                    </p>
                    <button className={styles.button}>
                        <a href="/cv/danieljvsa_cv.pdf" download>Baixar CV</a>
                    </button>
                </div>
                <img src="/assets/logo-header.svg" alt="home-tech" className={styles.img_header} />
            </div>
        </header>
    )
}