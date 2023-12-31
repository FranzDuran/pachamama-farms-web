"use client";
import Image from "next/image";
import styles from "./WhyPachamamaFarms.module.css";
import { data } from "./Data";
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./SwiperPachamama.css";

export default function SwiperPachamama() {
  return (
    <div className={styles.swiperContainer} >
      <div className={styles.slideContent}>
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          /* spaceBetween={0}
          slidesPerView={1.1} */
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
            
          }}
          pagination={{
            clickable: true,
            el: ".pagination-pachamama",
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.cardMobile}>
                <Image src={item.image} loading="lazy" alt="icon where we talk about our excellent work team,Certified guarantee,Innovation" title="icon about our great virtues" width="auto" height="auto" />
                <h2>{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pagination-pachamama"></div>
    </div>
  );
}
