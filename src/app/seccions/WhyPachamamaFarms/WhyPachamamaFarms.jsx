import React from 'react';
import styles from './WhyPachamamaFarms.module.css';
import image from "./DJI_0289.JPG";
import Image from 'next/image';

const WhyPachamamaFarms = () => {
  return (
    <div className={styles.container}>
        <Image src={image} alt="" width="auto" height="auto"/>
      <div className={styles.cardsContainer}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
};

export default WhyPachamamaFarms;