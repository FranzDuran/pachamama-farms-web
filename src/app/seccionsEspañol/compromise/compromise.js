import React from "react";
import styles from "./compromise.module.css";
import Image from "next/image";
import logoImg from "./assets/logosCompromise.png";

export default function Compromise() {
  return (
    <section
      className={styles.sectionCompromise}
      data-text-color="black"
      id="certifications"
    >
      <article className={styles.articleCompromise}>
        <h3>Nuestro compromiso</h3>
        <div className={styles.divisor}></div>
        <p className={styles.parrafo}>
          No sólo estamos comprometidos a llevar las mejores frutas a tu mesa,
          <br></br>
          también estamos convencidos de que nuestro trabajo debe generar un
          impacto positivo<br></br>
          impacto tanto para el medio ambiente como para las comunidades de
          alrededor <br></br>a nosotros. De esa manera es de vital importancia
          para nosotros compartir nuestra cultura.<br></br>
          con nuestros socios, colaboradores y clientes.
        </p>
        <Image src={logoImg} className={styles.logos} title="" alt="" />
      </article>
    </section>
  );
}
