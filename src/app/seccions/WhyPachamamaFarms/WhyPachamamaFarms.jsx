import React from "react";
import styles from "./WhyPachamamaFarms.module.css";
import image from "./assets/DJI_0289.JPG";
import Image from "next/image";
import { data } from "./Data";
import SwiperPachamama from "./SwiperPachamama";

const WhyPachamamaFarms = () => {
  return (
    <section className={styles.container} data-text-color="black">
      <Image src={image} alt="" width="auto" height="auto" className={styles.imgDesktop}/>
      <div className={styles.cardsContainer}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
          <Image src={item.image} alt="" width="auto" height="auto" />
          <h2>{item.title}</h2>
          <p>{item.paragraph}</p>
        </div>
        ))}
      </div>
      <SwiperPachamama/>
    </section>
  );
};

export default WhyPachamamaFarms;
