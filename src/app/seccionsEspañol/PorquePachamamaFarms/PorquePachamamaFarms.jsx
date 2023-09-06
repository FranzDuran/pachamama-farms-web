import React from "react";
import styles from "./PorquePachamamaFarms.module.css";
import image from "./assets/DJI_0289.png";
import Image from "next/image";
import { data } from "./Data";
import SwiperPachamama from "./SwiperPachamama";

const PorquePachamamaFarms = () => {
  return (
    <section className={styles.container} id="pachamama" data-text-color="black" >
      <Image src={image} title="fondo de nuestros campos de cultivo" alt="Antecedentes de nuestros grandes campos de cultivos." width="auto" height="auto" className={styles.imgDesktop}/>
      <article className={styles.cardsContainer}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
          <Image src={item.image} title="icono sobre nuestras grandes virtudes" alt="icono donde hablamos de nuestro excelente equipo de trabajo,Garantía certificada,Innovación" width="auto" height="auto" />
          <h2>{item.title}</h2>
          <p>{item.paragraph}</p>
        </div>
        ))}
      </article>
      <SwiperPachamama/>
    </section>
  );
};

export default PorquePachamamaFarms;
