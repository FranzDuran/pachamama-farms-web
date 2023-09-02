"use client";
import Image from "next/image";
import styles from "./SwiperReusable.module.css";
//import { data } from "./Data";
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";
//import "swiper/css/autoplay";
import "./SwiperReusable.css";

import { useRef, useState } from "react";

export default function SwiperReusable({ data }) {
  const [slide_Next, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });

  const [currentImage, setCurrentImage] = useState(1);

  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex + 1;
    const totalSlides = swiper.slides.length;
    setCurrentImage(currentSlideIndex);

    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slide_Next;

  return (
    <section className={styles.container} data-text-color="black">
      <div className={styles.swiperContainer}>
        <div className={styles.slideContent}>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            //Navigation property
            ref={SlideRef}
            onSlideChange={onSlideChange}
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
            {data.cards.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <Image src={item.image} alt="" width="auto" height="auto" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/*-----------------NAVEGATION------------------*/}
        <div className={styles.caja}>
          <button
            id="button-navegation-prev"
            className={`${[!isFirst ? "active" : "none"]}`}
            onClick={() => handlePrev()}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
          {/* Image count */}
          <div className={styles.imageCount}>
            {data.text} {currentImage}/{data.cards.length}
          </div>
          <button
            id="button-navegation-next"
            className={`${[!isLast ? "active" : "none"]}`}
            onClick={() => handleNext()}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
        <div className={styles.divLogo}>
          <Image
            className={styles.LogoPackHouse}
            src={data.logo}
            alt="Illustration with information about the 7000 square meters of pachamama farms where the best fruits of Peru are grown | Ilustracion con informacion sobre los 7000 Metros cuadrados de pachamama farms donde se cultivan las mejores frutas de Perú"
            title="Information about the territory of Pachamama Farms | Informacion sobre el territorio de Pachamama Farms  "
          />
        </div>
      </div>
    </section>
  );
}
