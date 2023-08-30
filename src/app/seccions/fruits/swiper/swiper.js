// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../fruits.module.css'

// Import Swiper stylesjj
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function SwiperCarrousel (){
  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        /* spaceBetween={10}
        slidesPerView={1} */
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
            <div className={styles.divTexto}>
              <h3>
              We work everyday to bring <br/>
              unforgetable fruits
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido2}>
            <div className={styles.divTexto}>
              <h3>
              We work everyday to bring <br/>
              unforgetable fruits
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido3}>
            <div className={styles.divTexto}>
              <h3>
              We work everyday to bring <br/>
              unforgetable fruits
              </h3>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};