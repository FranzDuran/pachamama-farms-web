import HomeSeccion from "@/app/seccions/home/home.js";
import AboutUs from "./seccions/aboutUs/aboutUs";
import Navbar from "@/components/Navbar/Navbar";
import ContactUs from "./seccions/ContactUs/ContactUs";
import FruitsSeccion from "./seccions/fruits/fruits";
import PackHouse from "./seccions/packHouse/packHouse";
import FloatingIcons from "@/components/FloatingIcons/FloatingIcons";
import Calendar from "./seccions/calendar/calenadar";
import WhyPachamamaFarms from "./seccions/WhyPachamamaFarms/WhyPachamamaFarms";
import Testimonials from "./seccions/Testimonials/Testimonials";
import OurPeople from "./seccions/OurPeople/OurPeople";
import OurFruits from "./seccions/OurFruits/OurFruits";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSeccion/>
      <AboutUs/>
      <FruitsSeccion/>
      <PackHouse/>
      <FloatingIcons/>
      <Calendar/>
      <OurFruits/>
      <OurPeople/>
      <Testimonials/>
      <WhyPachamamaFarms/>
      <ContactUs />
    </main>
  );
}
