import SwiperReusable from "../../../components/SwiperReusable/SwiperReusable";
import image1 from "./assets/_DSC9905.JPG";
import image2 from "./assets/_DSC8669.JPG";
import image3 from "./assets/_DSC9565.JPG";
import logoicon from "./assets/logoicon.png";

export default function NuestrasFrutas({text}) {
  const data = {
    logo: logoicon,
    text: "Mangos Kent",
    cards: [{ image: image1 }, { image: image2 }, { image: image3 }],
  };
  return (
    <section id="fruits">
      <SwiperReusable data={data} />
    </section>
  );
}

