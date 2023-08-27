import HomeSeccion from "@/app/seccions/home/home.js"
import AboutUs from "./seccions/aboutUs/aboutUs"
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import ContactUs from "./seccions/ContactUs/ContactUs";
// import HomeSeccion from "@/app/seccions/home/home.js";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSeccion></HomeSeccion> 
      <AboutUs></AboutUs>

      {/* <section data-text-color="white" className={styles.section1}>
        <h1>Section 1</h1>
      </section>
      <section data-text-color="black" className={styles.section2}>
        <h1>Section 2</h1>
      </section>
      <section data-text-color="white" className={styles.section3}>
    <h1>Section 3</h1> */}
    <ContactUs/>
    </main>
  );
}
