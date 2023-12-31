import React from "react";
import styles from "./SobreNosotros.module.css";

const SobreNosotros = () => {
  return (
    <section
      data-text-color="black"
      className={styles.sectionAboutUs}
      id="sobre nosotros"
    >
      <article
        className={styles.article}
        aria-label="sección donde hablamos de lo que hacemos, producimos y exportamos las mejores frutas"
      >
        <h3>Que hacemos</h3>
        <div className={styles.divisor}></div>
        <p className={styles.parrafo}>
          Pachamama Farms se dedica a la investigación, desarrollo, <br />
          producción, empaque y exportación de frutas y verduras
          <br />
          exóticas de alta calidad del Perú. Cada año, nuestras frutas han{" "}
          <br />
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

export default SobreNosotros;
