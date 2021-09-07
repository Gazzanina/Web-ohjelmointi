import React from 'react'
import styles from './NewsNotification.module.css'

export default function NewsNotification() {

    return (
        <div>
            <div className={styles.container}>
                <span className={styles.otsikko}>POLITIIKKA:</span>
                Suora lähetys puhemies Vehviläisen tiedotustilaisuudesta käynnissä</div>
            <div className={styles.mainos}>
                <span className={styles.otsikko}> MAINOS:</span>
                Aloita aamusi Hesarilla.Tutustu nyt 2 viikkoa maksutta! </div>
            <div className={styles.container}>
                <span className= {styles.otsikko}> PÄIVÄN TIMANTTI:</span> 
                Maailman tunnetuimmassa kuntosaliohjelmassa on vain kuusi liikettä</div>

        </div>    
    )
}
