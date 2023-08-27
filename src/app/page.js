import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import HomeSeccion from "@/app/seccions/home/home.js";
import ContactUs from "./seccions/ContactUs/ContactUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSeccion />
      <section data-text-color="white" className={styles.section1}>
        <h1>Section 1</h1>
      </section>
      <section data-text-color="black" className={styles.section2}>
        <h1>Section 2</h1>
      </section>
      <ContactUs/>
    </main>
  );
}
