import Link from 'next/link'
import React from 'react'
import styles from '../styles/Components/Aboutme.module.scss'


export function Aboutme(){
    return(
        <div className={styles.main_about_me} id="about-me">
            <h2>Sobre mim</h2>
            <div className={styles.about_content}>
                <img src="/assets/profile.png" alt="Perfil logo" className={styles.logo_perfil} />
                <div className={styles.about_div}>
                    <span>O meu nome é Daniel, tenho 22 anos, moro em Portugal,<br />
                    mais especificamente no Porto. <br /> <br /> 
                    Atualmente, estou a procura de trabalho e tenho <br />
                    me dedicado também, sozinho, a aprender novas <br />
                    tecnologias.<br /> <br />
                    Iniciei os meus estudos em programação em 2019, <br />
                    com a introdução de programação na licenciatura, <br />
                    o que me levou a investir meu tempo nesta área.</span> <br />
                    <button className={styles.button}>
                        <Link href="https://www.linkedin.com/in/danieljvsa/"><a>Linkedin</a></Link>
                    </button>              
                </div>                 
            </div>
        </div>
)
}