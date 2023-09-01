import HomeSeccion from "@/app/seccions/home/home.js";
import FruitsSeccion from "./seccions/fruits/fruits";
import PackHouse from "./seccions/packHouse/packHouse";
import FloatingIcons from "@/components/FloatingIcons/FloatingIcons";
import Calendar from "./seccions/calendar/calenadar";
import WhyPachamamaFarms from "./seccions/WhyPachamamaFarms/WhyPachamamaFarms";
import Compromise from "./seccions/compromise/compromise";
import OurFruits from "./seccions/OurFruits/OurFruits";
import OurPeople from "./seccions/OurPeople/OurPeople";
import Testimonials from "./seccions/Testimonials/Testimonials";
import AboutUs from "./seccions/aboutUs/aboutUs";

export default function Home() {
  return (
    <main>
      <HomeSeccion/>
      <AboutUs/>
      <FruitsSeccion/>
      <PackHouse text={'Packhouse'}/>
      <Calendar/>
      <Compromise/>
      <OurFruits text={'Kent mangos'}/>
      <OurPeople/>
      <Testimonials/>
      <WhyPachamamaFarms/> 
      <FloatingIcons/>
    </main>
  );
}
