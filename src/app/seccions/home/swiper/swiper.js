// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperSlide.css";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PlayImg from '../assets/playcircleline.png';
import Image from "next/image";


// import Img1 from './assets/_DSC9473.JPG';
// import img2 from './assets/_DSC0320.JPG'
// import img3 from './assets/DJI_0286.JPG'

import styles from "../home.module.css";
// import { Image } from "next/image";

export default function SwiperComponent({ showNavigation, hadleVideo }){
  return (
    <section className="container">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        /* spaceBetween={0}
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
        navigation={
          showNavigation
            ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            : false
        }
        
        pagination={
          !showNavigation
            ? {
                clickable: true,
                el: ".paginationSwiper",
              }
            : false
        }
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <article className={styles.divContenido} aria-label="Contenido destacado">
            <div className={styles.divTexto}>
              <h2>
                We are a big family working <br />
                together every day
              </h2>
              <button onClick={() => hadleVideo()}>
                Watch the video <Image src={PlayImg} width={20} height={20} alt='play logo to start the video of quality fruits and agricultural products | logo de play para inciar el video de frutas y productos agropecuarios de calidad' className={styles.logoPlay}/>
              </button>
            </div>
             {/* <Image src={Img1} className={styles.imgFondo}></Image> */}
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido2}>
            <div className={styles.divTexto}>
              <h2>
                We feel truly connected <br />
                to the land we farm
              </h2>
              <button onClick={() => hadleVideo()}>
                Watch the video <i className="ri-play-circle-line" id={styles.logoPlay}></i>
              </button>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.divContenido3}>
            <div className={styles.divTexto}>
              <h2>
                The land we cultivate is unique <br />
                and brings us unique fruits
              </h2>
              <button onClick={() => hadleVideo()}>
                Watch the video <Image src={PlayImg} width={20} height={20} alt='play logo to start the video of quality fruits and agricultural products | logo de play para inciar el video de frutas y productos agropecuarios de calidad' className={styles.logoPlay}/>
              </button>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
      <button className="swiper-button-next"></button>
      <button className="swiper-button-prev"></button>
      <div className="paginationSwiper"></div>
    </section>
  );
};
