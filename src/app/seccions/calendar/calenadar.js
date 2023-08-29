import React from "react";
import styles from './calendar.module.css'
import Image from "next/image";
import CalendarImg from './assets/calendar.png'

const Calendar = () => {


    return(
       <section className={styles.sectionCalendar}>
        <div className={styles.divFondo}>
          <div className={styles.divCalendar}></div>    
        </div>    
       </section>
    )

}

export default Calendar