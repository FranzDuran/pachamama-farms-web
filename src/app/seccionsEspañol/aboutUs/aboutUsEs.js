import React from "react";
import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <section
      data-text-color="black"
      className={styles.sectionAboutUs}
      id="about"
    >
      <article className={styles.article}>
        <h3>que hacemos</h3>
        <div className={styles.divisor}></div>
        <p className={styles.parrafo}>
          Pachamama Farms se dedica a la investigación, desarrollo,
          <br />
          producir, empacar y exportar productos exóticos de alta calidad.
          <br />
          frutas y verduras del Perú. Cada año, nuestras frutas han
          <br />
          Reconocido con los mejores estándares de calidad en Europa.
        </p>

        <p className={styles.parrafo2}>
          Pachamama = PACHA (mundo o tierra) + MAMA (madre). <br />
          Talk about our respect for the earth and the products that we get from
          her
        </p>
      </article>
    </section>
  );
};

export default AboutUs;
