import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <section data-text-color="white" className={styles.section1}>
          <h1>Section 1</h1>
        </section>
        <section data-text-color="black" className={styles.section2}>
          <h1>Section 2</h1>
        </section>
        <section data-text-color="white" className={styles.section3}>
          <h1>Section 3</h1>
        </section>
      </div>
    </main>
  );
}
