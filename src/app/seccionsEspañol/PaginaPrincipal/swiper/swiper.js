// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperSlide.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PlayImg from "../assets/PLAY.png";
import Image from "next/image";

// import imagen1 from '../assets/image1.jpg';

import styles from "../PaginaPrincipal.module.css";

export default function SwiperComponent({ showNavigation, hadleVideo }) {
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
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
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
          <article
            className={styles.divContenido}
            aria-label="artículo sobre frutas con texto de imagen de fondo y botón para mostrar un modal con un video de youtube"
          >
            <div className={styles.divTexto}>
              <h2>
                Somos una gran familia <br />
                trabajando juntos
              </h2>
              <button onClick={() => hadleVideo()}>
                Ver el video{" "}
                <Image
                  src={PlayImg}
                  width={20}
                  height={20}
                  alt="reproducir logo para iniciar el video de frutas y productos agrícolas de calidad"
                  title="play logo"
                  className={styles.logoPlay}
                />
              </button>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article
            className={styles.divContenido2}
            aria-label="artículo sobre frutas con texto de imagen de fondo y botón para mostrar un modal con un video de youtube">
            <div className={styles.divTexto}>
              <h2>
                Sabemos que solo los mejores lugares pueden <br />
                ofrecernos las mejores frutas
              </h2>
              <button onClick={() => hadleVideo()}>
                Ver el video{" "}
                <Image
                  src={PlayImg}
                  width={20}
                  height={20}
                  alt="reproducir logo para iniciar el video de frutas y productos agrícolas de calidad "
                  title="play logo"
                  className={styles.logoPlay}
                />
              </button>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article
            className={styles.divContenido3}
            aria-label="artículo sobre frutas con texto de imagen de fondo y botón para mostrar un modal con un video de youtube"
          >
            <div className={styles.divTexto}>
              <h2>
                Nos sentimos realmente conectados con la tierra que cultivamos
                <br />
                con la tierra que cultivamos
              </h2>
              <button onClick={() => hadleVideo()}>
                Ver el video{" "}
                <Image
                  src={PlayImg}
                  width={20}
                  height={20}
                  alt="reproducir logo para iniciar el video de frutas y productos agrícolas de calidad"
                  title="play logo"
                  className={styles.logoPlay}
                />
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
}
