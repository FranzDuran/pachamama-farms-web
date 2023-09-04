import react from "react";
import PaginaPrincipal from "../seccionsEspañol/PaginaPrincipal/PaginaPrincipal";
import FruitsSeccion from "../seccionsEspañol/Frutas/Frutas";
import PackHouse from "../seccions/packHouse/packHouse";
import Calendar from "../seccionsEspañol/Calendario/Calendario";
import Compromise from "../seccionsEspañol/Compromiso/Compromiso";
import OurFruits from "../seccions/OurFruits/OurFruits";
import OurPeople from "../seccionsEspañol/NuestraGente/NuestraGente";
import Testimonials from "../seccionsEspañol/Testimonios/Testimonios";
import WhyPachamamaFarms from "../seccionsEspañol/PorquePachamamaFarms/PorquePachamamaFarms";
import FloatingIcons from "@/components/FloatingIcons/FloatingIcons";
import ContactUs from "../seccionsEspañol/Contactanos/Contactanos";
import SobreNosotros from "../seccionsEspañol/SobreNosotros/SobreNosotros";
import Frutas from "../seccionsEspañol/Frutas/Frutas";
import Empacadora from "../seccionsEspañol/Empacadora/Empacadora";
import Calendario from "../seccionsEspañol/Calendario/Calendario";
import Compromiso from "../seccionsEspañol/Compromiso/Compromiso";
import NuestrasFrutas from "../seccionsEspañol/NuestrasFrutas/NuestrasFrutas";
import NuestraGente from "../seccionsEspañol/NuestraGente/NuestraGente";
import Testimonios from "../seccionsEspañol/Testimonios/Testimonios";
import PorquePachamamaFarms from "../seccionsEspañol/PorquePachamamaFarms/PorquePachamamaFarms";

const Es = () => {
  return (
    <main>
      <PaginaPrincipal />
      <SobreNosotros />
      <Frutas />
      <Empacadora/>
      <Calendario/>
      <Compromiso/>
      <NuestrasFrutas/>
      <NuestraGente/>
      <Testimonios/>
      <PorquePachamamaFarms/>
      <FloatingIcons></FloatingIcons>
    </main>
  );
};

export default Es;
