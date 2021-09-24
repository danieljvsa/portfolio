import Link from 'next/link'
import React from 'react'
import styles from '../styles/Components/Projects.module.scss'

export function Projects(){
    return(
        <div className={styles.main_project} id="projects">
            <h2>Projetos</h2>
            <div className={styles.card_catalog}>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="#">Em Breve</Link></span>
                        <p>Pegue num café enquanto fazemos um novo projecto</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="#">Em Breve</Link></span>
                        <p>Pegue num café enquanto fazemos um novo projecto</p>
                    </div>
                    
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="#">Em Breve</Link></span>
                        <p>Pegue num café enquanto fazemos um novo projecto</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="#">Em Breve</Link></span>
                        <p>Pegue num café enquanto fazemos um novo projecto</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="#">Em Breve</Link></span>
                        <p>Pegue num café enquanto fazemos um novo projecto</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="#">Em Breve</Link></span>
                        <p>Pegue num café enquanto fazemos um novo projecto</p>
                    </div>
                </div>
            </div>
            <span><Link href="https://github.com/danieljvsa?tab=repositories"><a>Repositórios do Github</a></Link></span>
        </div>
    )
}