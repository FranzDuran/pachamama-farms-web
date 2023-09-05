// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../fruits.module.css'
import Image from "next/image";
import img1 from "../assets/4.jpg";
import img2 from "../assets/5.jpg";
import img3 from "../assets/6.jpg";
import img4 from "../assets/mobile4.jpg";
import img5 from "../assets/mobile5.jpg";
import img6 from "../assets/mobile6.jpg";

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
          <Image src={img1} alt="background fruits and products we sell || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_assets/4.jpg" title='background fruits' width="auto" height="auto" className={styles.img}/>
          <Image src={img4} alt="background fruits and products that we sell to show in responsive version || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_assets/mobile4.jpg" title="responsive fruit background" width="auto" height="auto" className={styles.imgMobile}/>
            <div className={styles.divTexto}>
              <h3>
              We work everyday to bring <br/>
              unforgetable fruits
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido}>
          <Image src={img2}  alt="background fruits and products we sell || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_assets/5.jpg" title='background fruits' width="auto" height="auto" className={styles.img}/>
          <Image src={img5} alt="background fruits and products that we sell to show in responsive version || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_assets/mobile5.jpg" title="responsive fruit background" width="auto" height="auto" className={styles.imgMobile}/>
            <div className={styles.divTexto}>
              <h3>
              We work everyday to bring <br/>
              unforgetable fruits
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido}>
          <Image src={img3}  alt="background fruits and products we sell || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_assets/6.jpg " title='background fruits' width="auto" height="auto" className={styles.img}/>
          <Image src={img6} alt="background fruits and products that we sell to show in responsive version || pachamama_farms_high_quality_exotic_fruits_vegetables_peru_assets/mobile6.jpg " title="responsive fruit background" width="auto" height="auto" className={styles.imgMobile}/>
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