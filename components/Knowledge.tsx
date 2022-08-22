import Link from 'next/link'
import React from 'react'
import styles from '../styles/Components/Knowledge.module.scss'
import { faCss3, faHtml5, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react';

export function Knowledge(){
    return(
        <div className={styles.main_known} id="known">
            <h2>Conhecimentos</h2>
            <div className={styles.known_div}>
                <div className={styles.card_known}>
                    <i><FontAwesomeIcon icon={faHtml5} /></i>
                    <span>HTML</span>
                </div>
                <div className={styles.card_known}>
                    <i><FontAwesomeIcon icon={faCss3} /></i>
                    <span>CSS</span>
                </div>
                <div className={styles.card_known}>
                    <i><Icon icon="bx:bxl-firebase" /></i>
                    <span>Firebase</span>
                </div>
                <div className={styles.card_known}>
                    <i><FontAwesomeIcon icon={faSass} /></i>
                    <span>Sass</span>
                </div>
                <div className={styles.card_known}>
                    <i ><FontAwesomeIcon icon={faReact} /></i>
                    <span>ReactJS</span>
                </div>
                <div className={styles.card_known}>
                    <i><Icon icon="file-icons:nextjs"/></i>
                    <span>Next.js</span>
                </div>
                <div className={styles.card_known}>
                    <i><FontAwesomeIcon icon={faNode} /></i>
                    <span>NodeJS</span>
                </div>
                <div className={styles.card_known}>
                    <i><Icon icon="cib:mongodb"/></i>
                    <span>MongoDB</span>
                </div>
                <div className={styles.card_known}>
                    <i><Icon icon="cib:mysql"/></i>
                    <span>MySQL</span>
                </div>
                <div className={styles.card_known}>
                    <i><Icon icon="fontisto:java"/></i>
                    <span>Java</span>
                </div>
                <div className={styles.card_known}>
                    <i><Icon icon="teenyicons:c-sharp-solid"/></i>
                    <span>C#</span>
                </div>
                <div className={styles.card_known}>
                    <i><Icon icon="teenyicons:c-solid"/></i>
                    <span>C</span>
                </div>
            </div>
        </div>
    )
}