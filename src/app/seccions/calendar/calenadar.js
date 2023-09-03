import React from "react";
import styles from "./calendar.module.css";
import Image from "next/image";
import CalendarImg from "./assets/CalendarInfo.png";
import calendar from "./assets/calendar.png";
import imgfondo from "./assets/_DSC9013.JPG";
import calendarResponsive from './assets/calendario_mobile.png'
const Calendar = () => {
  return (
    <section className={styles.sectionCalendar} id="calendar">
      <section className={styles.divFondo} data-text-color="white">
        <Image src={imgfondo} alt="" title="" className={styles.fondoImg} />
        <div className={styles.divCalendar}>
          <Image
            src={calendar}
            alt=""
            title=""
            className={styles.calendarImg}
          />
          
          <Image
            src={CalendarImg}
            alt=""
            title=""
            className={styles.CalendarInfoIMG}
          />

            <Image
            src={calendarResponsive}
            alt=""
            title=""
            className={styles.CalendarResponsive}
          />
        </div>
      </section>
      <section
        className={styles.sectionWhite}
        data-text-color="black"
      ></section>
    </section>
  );
};

export default Calendar;
