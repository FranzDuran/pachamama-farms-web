import React from "react";
import styles from "./Compromiso.module.css";
import Image from "next/image";
import logoImg from "./assets/logosCompromise.png";

export default function Compromiso() {
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
          No solo estamos comprometidos con traer las mejores frutas a su mesa,
          <br></br>
          también estamos convencidos de que nuestro trabajo debe generar un
          impacto positivo <br></br>
          tanto para el medio ambiente como para las comunidades que nos rodean.
          <br></br>
          De esa manera, es de vital importancia para nosotros compartir nuestra
          cultura
          <br></br>
          con nuestros socios, colaboradores y clientes.
        </p>
        <Image
          src={logoImg}
          className={styles.logos}
          title="logos de los socios y clientes que colaboran con Pachamama Farms"
          alt="logotipos de socios y clientes"
        />
      </article>
    </section>
  );
}
