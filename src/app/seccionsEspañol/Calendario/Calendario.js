import React from "react";
import styles from "./Calendario.module.css";
import Image from "next/image";
import CalendarImg from "./assets/calendario_estacional.png";
import calendar from "./assets/calendario_desktop.png";
import calendarioMobile from "./assets/calendario_mobile-es.png";
import imgfondo from "./assets/_DSC9013.png";
import calendarResponsive from './assets/calendario_mobile.png'
const Calendario = () => {
  return (
    <section className={styles.sectionCalendar} id="calendario">
      <section className={styles.divFondo} data-text-color="white">
        <Image src={imgfondo} alt="" title="" className={styles.fondoImg} />
        <div className={styles.divCalendar}>
          <Image
            src={calendar}
            alt="calendar showing the months in which all fruits are grown"
            title="calendario de cultivos"
            className={styles.calendarImg}
          />
          
          <Image
            src={CalendarImg}
            alt="calendario estacional donde se cultivan todas las frutas"
            title="calendario de temporada"
            className={styles.CalendarInfoIMG}
          />

            <Image
            src={calendarioMobile}
            alt=" calendario de cultivos responsivo "
            title="Calendario que muestra los meses en los que se cultivan todas las frutas que responden."
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

export default Calendario;
