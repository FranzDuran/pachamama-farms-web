import React from "react";
import styles from "./WhyPachamamaFarms.module.css";
import image from "./assets/DJI_0289.JPG";
import Image from "next/image";
import { data } from "./Data";
import SwiperPachamama from "./SwiperPachamama";

const WhyPachamamaFarms = () => {
  return (
    <div className={styles.container}>
      <Image src={image} alt="" width="auto" height="auto" />
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
    </div>
  );
};

export default WhyPachamamaFarms;
