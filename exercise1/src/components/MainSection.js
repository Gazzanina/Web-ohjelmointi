import React from 'react'
import styles from './MainSection.module.css'

export default function MainSection() {

    return (
        <div>
        <div className={styles.container}>
            <div className={styles.otsikko}>Hallitus</div>
            <div><img src={`/hallitus.jpg`} /> </div>
            <span className={styles.subtitle}>Budjettiriihi | </span>
            <span className={styles.title}>Marin: Veroista saavutettu "hyvin lähelle" yhteinen näkemys - Hallitus aloitti budjettineuvottelut</span>
            <div>Politiikka: 10.45 </div>
        </div>
        </div>
    )
}
