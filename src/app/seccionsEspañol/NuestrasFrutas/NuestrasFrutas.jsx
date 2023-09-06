import SwiperReusable from "../../../components/SwiperReusable/SwiperReusable";
import image1 from "./assets/_DSC9905.png";
import image2 from "./assets/_DSC8669.png";
import image3 from "./assets/_DSC9565.png";
import logoicon from "./assets/pronto_nuevas_variedades.png";

export default function NuestrasFrutas({text}) {
  const data = {
    logo: logoicon,
    text: "Mangos Kent",
    cards: [{ image: image1 }, { image: image2 }, { image: image3 }],
  };
  return (
    <section id="frutas">
      <SwiperReusable data={data} />
    </section>
  );
}

