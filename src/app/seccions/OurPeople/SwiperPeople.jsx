// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./OurPeople.module.css";
import Image from "next/image";
import img1 from "./assets/7.png";
import img2 from "./assets/8.jpg";
import img3 from "./assets/9.jpg";
import img4 from "./assets/10.png";
import img5 from "./assets/mobile7.jpg";
import img6 from "./assets/mobile8.jpg";
import img7 from "./assets/mobile9.jpg";
import img8 from "./assets/mobile10.jpg";

// Import Swiper stylesjj
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperPeople() {
  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        // spaceBetween={10}
        // slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          390: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <article className={styles.divContenido}
            aria-label="article about the workers and how we strive to have the best quality products"
          >
            
            <Image src={img1} alt="worker carrying fruits while working || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_7.png" title="worker carrying fruits" width="auto" height="auto" className={styles.img}/>
            <Image src={img5} alt="worker carrying fruits while working  || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_mobile7.jpg" title="worker carrying fruits" width="auto" height="auto" className={styles.imgMobile}/>
            <div className={styles.divTexto}>
              <h3>
                We’re conviced that
                <br />
                people makes the difference
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido}
            aria-label="article about the workers and how we strive to have the best quality products">
          <Image src={img2} alt="Female worker checking the quality of fruits. || pachamama_farms_high_quality_exotic_fruits_vegetables_8.jpg" title="Female worker checking the quality" width="auto" height="auto" className={styles.img}/>
          <Image src={img6} alt="Female worker checking the quality of fruits. || pachamama_farms_high_quality_exotic_fruits_vegetables_mobile8.jpg" title="Female worker checking the quality" width="auto" height="auto" className={styles.imgMobile}/>
            <div className={styles.divTexto}>
              <h3>
                We’re conviced that
                <br />
                people makes the difference
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido}
            aria-label="article about the workers and how we strive to have the best quality products">
          <Image src={img3} alt="worker collecting fruits from farm fields || pachamama_farms_high_quality_exotic_fruits_vegetables_9.jpg" title="worker picking fruits" width="auto" height="auto" className={styles.img}/>
          <Image src={img7} alt="worker collecting fruits from farm fields || pachamama_farms_high_quality_exotic_fruits_vegetables_mobile9.jpg" title="worker picking fruits" width="auto" height="auto" className={styles.imgMobile}/>
            <div className={styles.divTexto}>
              <h3>
                We’re conviced that
                <br />
                people makes the difference
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido}
            aria-label="article about the workers and how we strive to have the best quality products">
          <Image src={img4} alt="worker resting after a day of work  || pachamama_farms_high_quality_exotic_fruits_vegetables_10.png" title="female worker resting" width="auto" height="auto" className={styles.img}/>
          <Image src={img8} alt="worker resting after a day of work || pachamama_farms_high_quality_exotic_fruits_vegetables_mobile9.jpg" title="female worker resting" width="auto" height="auto" className={styles.imgMobile}/>
            <div className={styles.divTexto}>
              <h3>
                We’re conviced that
                <br />
                people makes the difference
              </h3>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
