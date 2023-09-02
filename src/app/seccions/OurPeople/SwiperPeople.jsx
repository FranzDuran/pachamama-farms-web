// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./OurPeople.module.css";
import Image from "next/image";
import img1 from "./assets/7.png";
import img2 from "./assets/8.jpg";
import img3 from "./assets/9.jpg";
import img4 from "./assets/10.png";

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
          <article className={styles.divContenido}>
            <Image src={img1} alt="" width="auto" height="auto" />
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
          <article className={styles.divContenido}>
            <Image src={img2} alt="" width="auto" height="auto" />
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
          <article className={styles.divContenido}>
            <Image src={img3} alt="" width="auto" height="auto" />
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
          <article className={styles.divContenido}>
            <Image src={img4} alt="" width="auto" height="auto" />
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
