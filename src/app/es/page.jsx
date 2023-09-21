"use client";
//import { useEffect } from 'react';
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

/* export const metadata = {
  title: 'Dedicados a la investigación, desarrollo, producción, empaque y exportación de frutas y verduras exóticas de alta calidad del Perú.',
  description: 'Dedicados a la investigación, desarrollo, producción, empaque y exportación de frutas y verduras exóticas de alta calidad del Perú',
   keywords: 'Pachamama, Farms, alta, calidad, exoticas, frutas, vegetales, peru ',
}; */


const Es = () => {

  /* useEffect(() => {
    // Agrega el primer script de Google Tag Manager
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-6XH4721CH9';
    script1.async = true;
    document.head.appendChild(script1);

    // Agrega el segundo script de Google Tag Manager
    const script2 = document.createElement('script');
    script2.id = 'ga-script';
    script2.appendChild(
      document.createTextNode(`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6XH4721CH9', {
          page_path: window.location.pathname,
        });
      `)
    );
    document.head.appendChild(script2);
  }, []); */

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
