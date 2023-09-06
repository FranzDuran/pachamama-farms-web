import PaginaPrincipal from "../seccionsEspañol/PaginaPrincipal/PaginaPrincipal";
import FloatingIcons from "@/components/FloatingIcons/FloatingIcons";
import SobreNosotros from "../seccionsEspañol/SobreNosotros/SobreNosotros";
import Frutas from "../seccionsEspañol/Frutas/Frutas";
import Empacadora from "../seccionsEspañol/Empacadora/Empacadora";
import Calendario from "../seccionsEspañol/Calendario/Calendario";
import Compromiso from "../seccionsEspañol/Compromiso/Compromiso";
import NuestrasFrutas from "../seccionsEspañol/NuestrasFrutas/NuestrasFrutas";
import NuestraGente from "../seccionsEspañol/NuestraGente/NuestraGente";
import Testimonios from "../seccionsEspañol/Testimonios/Testimonios";
import PorquePachamamaFarms from "../seccionsEspañol/PorquePachamamaFarms/PorquePachamamaFarms";


export const metadata = {
  title: 'Dedicados a la investigación, desarrollo, producción, empaque y exportación de frutas y verduras exóticas de alta calidad del Perú.',
  description: 'Dedicados a la investigación, desarrollo, producción, empaque y exportación de frutas y verduras exóticas de alta calidad del Perú',
   keywords: 'Pachamama, Farms, alta, calidad, exoticas, frutas, vegetales, peru ',
};


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
