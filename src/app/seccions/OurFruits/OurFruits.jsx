import SwiperReusable from "../../../components/SwiperReusable/SwiperReusable";
import image1 from "./assets/_DSC9905.jpg";
import image2 from "./assets/_DSC8669.jpg";
import image3 from "./assets/_DSC9565.jpg";
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
