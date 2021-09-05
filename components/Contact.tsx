import Link from 'next/link'
import React from 'react'
import styles from '../styles/Components/Contact.module.scss'

export function Contact(){
    return(
        <div className={styles.main_about} id="contacts">
            <h2>Hello World!!</h2>
            <p>Se quiser conversar comigo, não hesite em mandar uma mensagem</p>
            <span className={styles.email}>💌 danielviana18@gmail.com</span>
            <div className={styles.about_link}>
                <button className={styles.button_link}><Link href="https://www.linkedin.com/in/danieljvsa/"><a>Linkedin</a></Link></button>
                <button className={styles.button_link}><Link href="https://github.com/danieljvsa"><a>Github</a></Link></button>
            </div>
            <p>Criado por Daniel Sá</p>
        </div>
    )
}