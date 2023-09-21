"use client";
import styles from "./contact.module.css";
import { usePathname } from 'next/navigation'


export default function ContactUs() {
  const email = "ventas@pachamamafarms.com";

  const pathname = usePathname()
  // Determine the id based on the current URL path
  const id = pathname === '/es' ? 'contactanos' : 'contact';

  return (
    <section className={styles.container} data-text-color="white" id={id}>
      <div className={styles.content}>
        <div className={styles["small-text"]}>
        <span>{pathname === "/es" ? "Contáctanos" : "Get in touch"}</span>
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
