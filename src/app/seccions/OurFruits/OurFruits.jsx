import SwiperReusable from "../../../components/SwiperReusable/SwiperReusable";
import image1 from "./assets/DSC9905.png";
import image2 from "./assets/DSC8669.png";
import image3 from "./assets/DSC9565.png";
import logoicon from "./assets/logoicon.png";

export default function OurFruits({text}) {
  const data = {
    logo: logoicon,
    text: text,
    cards: [{ image: image1 }, { image: image2 }, { image: image3 }],
  };
  return (
    <section id="fruits">
      <SwiperReusable data={data} />
    </section>
  );
}
