import React from "react";
import styles from './calendar.module.css'
import Image from "next/image";
import CalendarImg from './assets/CalendarInfo.png'

const Calendar = () => {


    return(
       <section className={styles.sectionCalendar}>
        <div className={styles.divFondo}>
          <div className={styles.divCalendar}>
           <Image 
            src={CalendarImg}
            alt=""
            title=""
            className={styles.CalendarInfoIMG}
           /> 
          </div>    
        </div>    
       </section>
    )

}

export default Calendar