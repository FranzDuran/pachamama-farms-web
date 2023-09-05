"use client";
import styles from "./contact.module.css";

export default function ContactUs() {
  const email = "ventas@pachamamafarms.com";
  /* const currentURL = window.location.href;
  const ultimasDosLetras = currentURL.slice(-2); */

  return (
    <section className={styles.container} data-text-color="white" id="contact">
      <div className={styles.content}>
        <div className={styles["small-text"]}>
          <span>Get in touch {/* {ultimasDosLetras === "es" ? "Contáctanos" : "Get in touch"} */}</span>
          <span className={styles.line} />
        </div>
        <div className={styles["big-text"]}>
          <span>Parcela A s/n predio Parales Valle</span>
          <span>Sector Medio – Tambogrande</span>
          <span>Piura – Perú</span>
          <span><a href={`mailto:${email}`} className={styles.email}>ventas@pachamamafarms.com</a></span>
          <span>T. (+51) 469 9845</span>
        </div>
      </div>
    </section>
  );
}
