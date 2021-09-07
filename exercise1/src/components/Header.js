import React from 'react'
import styles from './Header.module.css'

export default function Header() {

    const tilaa = {color: 'black', backgroundColor: 'white'};

    return (
        <div className={styles.headerBackground}>
            <div className={styles.container}>
                <div className={styles.brand}>HELSINGIN SANOMAT</div>
                <div>Etusivu</div>
                <div>Uutiset</div>
                <div>Lehdet</div>
                <div>Asiakaspalvelu</div>
                <div style={tilaa}>Tilaa</div>
                <div>Kirjaudu</div>
                <div>Valikko</div>

            </div>

        </div>
    )
}
