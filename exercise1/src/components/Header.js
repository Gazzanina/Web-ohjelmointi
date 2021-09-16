import React from 'react'
import styles from './Header.module.css'

export default function Header() {

    const tilaa = {color: 'black', backgroundColor: 'white', marginLeft: 200};

    return (
        <div className={styles.headerBackground}>
            <div className={styles.container}>
                <div className={styles.brand}>HELSINGIN SANOMAT </div>
                <div className= {styles.tekstit}> Etusivu </div>
                <div className= {styles.tekstit}> Uutiset </div>
                <div className= {styles.tekstit}> Lehdet </div>
                <div className= {styles.tekstit}> Asiakaspalvelu </div>
                <div className= {styles.tekstit}><span style={tilaa}>Tilaa </span></div>
                <div className= {styles.tekstit}> Kirjaudu </div>
                <div className= {styles.tekstit}> Valikko </div>
                </div>
            </div>

        
    )
}
