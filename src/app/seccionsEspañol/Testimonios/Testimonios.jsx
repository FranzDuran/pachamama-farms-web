"use client";
import Image from "next/image";
import styles from "./Testimonios.module.css";
import { data } from "./Data";
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./SwiperTestimonios.css";

export default function Testimonios() {
  return (
    <section className={styles.container} data-text-color="black">
      <article className={styles.swiperContainer}
        aria-label="
        testimonial article where they talk about how we work for and for the environment"
      >
        <div className={styles.slideContent}>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              390: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 10,
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
            pagination={{
              clickable: true,
              el: ".pagination-testimonials",
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <Image src={item.image} title="testimonio de empleado" alt="artículo testimonial donde hablan de cómo trabajamos por y para el medio ambiente" width="auto" height="auto" />
                  <div className={styles.text}>
                    <h2>{item.title}</h2>
                    <p>{item.paragraph}</p>
                    <div className={styles.perfil}>
                      <h2>{item.subTitle}</h2>
                      <p>{item.subParagraph}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination-testimonials"></div>
      </article>
    </section>
  );
}
