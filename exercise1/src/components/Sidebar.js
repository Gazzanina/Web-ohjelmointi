import React from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
       <div className={styles.sidebarBackground}>
         <div className={styles.mostRead}>Luetuimmat</div>
            <div className = {styles.container2}>
                <div className={styles.numbers}>1</div>
                <div className={styles.title}>Helsingin Yliopisto | 
                    <span className={styles.subtitle}> Ilona Raimas päätti keskeyttää opinnot yliopistossa - Syynä on parjattu Sisu-opetusjärjestelmä, joka teki elämän aivan mahdottomaksi
                    </span>
                </div>
                </div>
            <div className = {styles.container2}>
                <div className={styles.numbers}>2</div>
                <div className={styles.title}>Henkilö | 
                    <span className={styles.subtitle}> Keskiluokkaiset ja koulutetut ovat täysin vaate- ja ulkonäkökeskeisiä, sanoo Laura Friman -hän piti vuoden ostolakon, ja kokemus oli kauhea
                    </span>
                </div>
                </div>
            <div className = {styles.container2}>
                <div className={styles.numbers}>3</div>
                <div className={styles.title}>Fysiologia | 
                    <span className={styles.subtitle}> Monelle kertyy ylimääräisiä kiloja 30-40 vuoden iässä, ja syynä on pidetty aineenvaihdunnan hidastumista - Uusi tutkimus todistaa uskomuksen vääräksi
                    </span>
                </div>
                </div>    
                
                </div>
    )
}

