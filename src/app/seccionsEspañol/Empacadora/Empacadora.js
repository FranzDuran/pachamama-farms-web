import SwiperReusable from "../../../components/SwiperReusable/SwiperReusable";
import image1 from "./assets/image1.JPG";
import image2 from "./assets/image2.JPG";
import logoicon from "./assets/LogoPackHouse.png";

export default function Empacadora({text}) {
  const data = {
    logo: logoicon,
    text: "Empacadora",
    cards: [{ image: image1 }, { image: image2 }],
  };
  return <SwiperReusable data={data} />;
}




