import SwiperReusable from "../../../components/SwiperReusable/SwiperReusable";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import logoicon from "./assets/con_mas_de_7000m2.png";

export default function Empacadora({text}) {
  const data = {
    logo: logoicon,
    text: "Empacadora",
    cards: [{ image: image1 }, { image: image2 }],
  };
  return <SwiperReusable data={data} />;
}




