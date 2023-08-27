import styles from "./contact.module.css";

export default function ContactUs() {
  return (
    <section className={styles.container} data-text-color="white" id="contact">
      <div className={styles.content}>
        <div className={styles["small-text"]}>
          <span>Get in touch</span>
          <span className={styles.line}/>
        </div>
        <div className={styles["big-text"]}>
          <span>Parcela A s/n predio Parales Valle</span>
          <span>Sector Medio – Tambogrande</span>
          <span>Piura – Perú</span>
          <span>ventas@pachamamafarms.com</span>
          <span>T. (+51) 469 9845</span>
        </div>
      </div>
    </section>
  );
}
