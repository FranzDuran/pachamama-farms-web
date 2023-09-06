import SwiperReusable from "../../../components/SwiperReusable/SwiperReusable";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import logoicon from "./assets/LogoPackHouse.png";

export default function PackHouse({text}) {
  const data = {
    logo: logoicon,
    text: text,
    cards: [{ image: image1 }, { image: image2 }],
  };
  return <SwiperReusable data={data} />;
}




