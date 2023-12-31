"use client";
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

import styles from "../home.module.css";

export default function SwiperComponent({ showNavigation, hadleVideo }) {
  return (
    <section className="container">
      <Swiper
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
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        pagination={{
          clickable: true,
          el: ".pagination-home",
        }}
      >
        <SwiperSlide>
          <article
            className={styles.divContenido}
            aria-label="article about fruits with background image text and button to display a modal with a youtube video"
          >
            <div className={styles.divTexto}>
              <h2>
                We are a big family <br />
                working together
              </h2>
              <button onClick={() => hadleVideo()}>
                Watch the video{" "}
                <Image
                  src={PlayImg}
                  width={20}
                  height={20}
                  alt="play logo to start the video of quality fruits and agricultural products"
                  title="play logo"
                  priority
                  className={styles.logoPlay}
                />
              </button>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article
            className={styles.divContenido2}
            aria-label="article about fruits with background image text and button to display a modal with a youtube video"
          >
            <div className={styles.divTexto}>
              <h2>
                We feel truly connected <br />
                to the land we farm
              </h2>
              <button onClick={() => hadleVideo()}>
                Watch the video{" "}
                <Image
                  src={PlayImg}
                  width={20}
                  height={20}
                  alt="play logo to start the video of quality fruits and agricultural products "
                  title="play logo"
                  priority
                  className={styles.logoPlay}
                />
              </button>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article
            className={styles.divContenido3}
            aria-label="article about fruits with background image text and button to display a modal with a youtube video"
          >
            <div className={styles.divTexto}>
              <h2>
                We know that only unique places
                <br />
                can make unique products
              </h2>
              <button onClick={() => hadleVideo()}>
                Watch the video{" "}
                <Image
                  src={PlayImg}
                  width={20}
                  height={20}
                  alt="play logo to start the video of quality fruits and agricultural products"
                  title="play logo"
                  priority
                  className={styles.logoPlay}
                />
              </button>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
      <button className="swiper-button-next"></button>
      <button className="swiper-button-prev"></button>
      <div className="pagination-home"></div>
    </section>
  );
}
