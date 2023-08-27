import React from "react";
import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <section data-text-color="black" className={styles.sectionAboutUs}>
      <article className={styles.article}>
        <h5>What we do</h5>
        <div className={styles.divisor}></div>
        <p className={styles.parrafo}>
          Pachamama Farms is dedicated to research, development, <br />
          producing, packing and exporting high quality exotic <br />
          fruits and vegetables from Perú. Every year, our fruits has <br />
          recognited with the best quality standards in Europe.
        </p>

        <p className={styles.parrafo2}>
          Pachamama = PACHA (mundo o tierra) + MAMA (madre). <br/>
          Talk about our respect for the earth and the products that we get from
          her
        </p>
      </article>
    </section>
  );
};

export default AboutUs;
