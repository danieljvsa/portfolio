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
                        <span><Link href="https://github.com/danieljvsa/smart-bracelet-guardian">Smart Bracelet</Link></span>
                        <p>Projeto desenvolvido para detetar quedas de pacientes e avisar os enfermeiros.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="https://github.com/danieljvsa/plate-recon">Plate Recon</Link></span>
                        <p>Projeto desenvolvido para servir de sistema de segurança de garagens particulares.</p>
                    </div>  
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="https://github.com/danieljvsa/harkonnen-auto">Harkonnen Auto</Link></span>
                        <p>App de agendamento de reparação de automóveis.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="https://github.com/danieljvsa/pickup_robot">Pickup Robot</Link></span>
                        <p>Agente (IA) para determinar o melhor percurso a realizar por um robô, que se movimenta num espaço conhecido onde deve recolher objetos, procurando minimizar a distância percorrida.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="https://github.com/danieljvsa/lockheed">Lockheed</Link></span>
                        <p>Projecto foi desenvolvido para investigar contratos suspeitos de fraude do site Base.gov.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <span><Link href="#">Naped</Link></span>
                        <p>Portal de noticias de entretenimento.</p>
                    </div>
                </div>
            </div>
            <span><Link href="https://github.com/danieljvsa?tab=repositories"><a>Repositórios do Github</a></Link></span>
        </div>
    )
}