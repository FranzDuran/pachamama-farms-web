import React from "react";
import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <section
      data-text-color="black"
      className={styles.sectionAboutUs}
      id="about"
    >
      <article
        className={styles.article}
        aria-label="section where we talk about what we do, produce and export the best fruits"
      >
        <h3>What we do</h3>
        <div className={styles.divisor}></div>
        <p className={styles.parrafo}>
          Pachamama Farms se dedica a la investigación, desarrollo, <br />
          producción, empaque y exportación de <br />
          frutas y verduras exóticas de alta calidad del Perú. Cada año,
          nuestras frutas han <br />
          sido reconocidas con los mejores estándares de calidad en Europa.
        </p>

        <p className={styles.parrafo2}>
          Pachamama = PACHA (mundo o tierra) + MAMA (madre).
          <br />
          Concierne el respeto que tenemos por la tierra y los productos que nos
          ofrece.
        </p>
      </article>
    </section>
  );
};

export default AboutUs;
