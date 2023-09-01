import React from "react";
import styles from './calendar.module.css'
import Image from "next/image";
import CalendarImg from './assets/CalendarInfo.png'

const Calendar = () => {


    return(
       <section className={styles.sectionCalendar} id="calendar" data-text-color="white">
        <section className={styles.divFondo} /* data-text-color="white" */>
          <div className={styles.divCalendar}>
           <Image 
            src={CalendarImg}
            alt=""
            title=""
            className={styles.CalendarInfoIMG}
           /> 
          </div>    
        </section>    
       </section>
    )

}

export default Calendar