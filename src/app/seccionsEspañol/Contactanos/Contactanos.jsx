import styles from "./Contactanos.module.css";

export default function Contactanos() {
  const email = "ventas@pachamamafarms.com";

  return (
    <section className={styles.container} data-text-color="white" id="contactanos">
      <div className={styles.content}>
        <div className={styles["small-text"]}>
          <span>Contáctanos</span>
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
