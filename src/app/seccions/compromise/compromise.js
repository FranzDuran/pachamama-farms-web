import React from "react";
import styles from "./compromise.module.css";
import Image from "next/image";
import logoImg from './assets/logosCompromise.png'

export default function Compromise() {
  return (
    <section className={styles.sectionCompromise} data-text-color="black" id="certifications">
      <article className={styles.articleCompromise}>
        <h3>Our commitment</h3>
        <div className={styles.divisor}></div>
        <p className={styles.parrafo}>
          We are not only committed to bring the best fruits to your table,<br></br>
          we are also convinced that our work must generate a positive <br></br>
          impact both for the environment and for the communities around <br></br>
          us. In that way it is of vital importance for us share our culture <br></br>
          with our partners, collaborators, and customers.
        </p>
        <Image 
        src={logoImg}
        className={styles.logos}
        alt="logos of the partners and clients that collaborate with Pachamama Farms || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_logosCompromise.png "
        title="partner and customer logos"
        />
 
      </article>
    </section>
  );
}
