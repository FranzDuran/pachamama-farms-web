import React from "react";
import styles from "./WhyPachamamaFarms.module.css";
import image from "./assets/DJI_0289.png";
import Image from "next/image";
import { data } from "./Data";
import SwiperPachamama from "./SwiperPachamama";

const WhyPachamamaFarms = () => {
  return (
    <section className={styles.container} id="pachamama" data-text-color="black" >
      <Image src={image} title="background of our crop fields" alt="background of our large fields of crops" width="auto" height="auto" className={styles.imgDesktop}/>
      <article className={styles.cardsContainer}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
          <Image src={item.image} title="icon about our great virtues" alt="icon where we talk about our excellent work team,Certified guarantee,Innovation" width="auto" height="auto" />
          <h2>{item.title}</h2>
          <p>{item.paragraph}</p>
        </div>
        ))}
      </article>
      <SwiperPachamama/>
    </section>
  );
};

export default WhyPachamamaFarms;
