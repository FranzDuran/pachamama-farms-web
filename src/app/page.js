import HomeSeccion from "@/app/seccions/home/home.js";
import AboutUs from "./seccions/aboutUs/aboutUs";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import ContactUs from "./seccions/ContactUs/ContactUs";
//import WhyPachamamaFarms from "./seccions/WhyPachamamaFarms/WhyPachamamaFarms";
import FruitsSeccion from "./seccions/fruits/fruits";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSeccion/>
      <AboutUs/>
      <FruitsSeccion/>
      {/* <WhyPachamamaFarms/> */}
      <ContactUs />
    </main>
  );
}
