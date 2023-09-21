"use client";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./NuestraGente.module.css";
import Image from "next/image";
import img1 from "./assets/7.png";
import img2 from "./assets/8.jpg";
import img3 from "./assets/9.jpg";
import img4 from "./assets/10.png";
import img5 from "./assets/mobile7.jpg";
import img6 from "./assets/mobile8.jpg";
import img7 from "./assets/mobile9.jpg";
import img8 from "./assets/mobile10.jpg";

import { useEffect, useState } from "react";

// Import Swiper stylesjj
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../seccions/OurPeople/OurPeople.css"

export default function SwiperPeople() {

  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedBeginning, setReachedBeginning] = useState(true);

  const handleReachEnd = () => {
    setReachedEnd(true);
    setReachedBeginning(false);
  };

  const handleReachBeginning = () => {
    setReachedEnd(false);
    setReachedBeginning(true);
  };

  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        onReachEnd={handleReachEnd}
        onReachBeginning={handleReachBeginning}
        
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

        navigation={{
          nextEl: ".btn-button-next",
          prevEl: ".btn-button-prev",
        }}

      >
        <SwiperSlide>
          <article
            className={styles.divContenido}
            aria-label="article about the workers and how we strive to have the best quality products"
          >
            <Image
              src={img1}
              alt="worker carrying fruits while working"
              title="worker carrying fruits"
              width="auto"
              height="auto"
              className={styles.img}
            />
            <Image
              src={img5}
              alt="worker carrying fruits while working"
              title="worker carrying fruits"
              width="auto"
              height="auto"
              className={styles.imgMobile}
            />
            <div className={styles.divTexto}>
              <h3>
                Estamos convencidos que las
                <br />
                personas hacen la diferencia.
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article
            className={styles.divContenido}
            aria-label="artículo sobre los trabajadores y cómo nos esforzamos por tener productos de la mejor calidad"
          >
            <Image
              src={img2}
              alt="Female worker checking the quality of fruits."
              title="Trabajadora comprobando la calidad."
              width="auto"
              height="auto"
              className={styles.img}
            />
            <Image
              src={img6}
              alt="Female worker checking the quality of fruits."
              title="Trabajadora comprobando la calidad."
              width="auto"
              height="auto"
              className={styles.imgMobile}
            />
            <div className={styles.divTexto}>
              <h3>
                Estamos convencidos que las
                <br />
                personas hacen la diferencia.
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article
            className={styles.divContenido}
            aria-label="artículo sobre los trabajadores y cómo nos esforzamos por tener productos de la mejor calidad"
          >
            <Image
              src={img3}
              alt="Trabajador recogiendo frutas de campos agrícolas"
              title="Trabajador recogiendo frutas"
              width="auto"
              height="auto"
              className={styles.img}
            />
            <Image
              src={img7}
              alt="Trabajador recogiendo frutas de campos agrícolas"
              title="Trabajador recogiendo frutas"
              width="auto"
              height="auto"
              className={styles.imgMobile}
            />
            <div className={styles.divTexto}>
              <h3>
                Estamos convencidos que las
                <br />
                personas hacen la diferencia.
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article
            className={styles.divContenido}
            aria-label="artículo sobre los trabajadores y cómo nos esforzamos por tener productos de la mejor calidad"
          >
            <Image
              src={img4}
              alt="Trabajadora descansando después de un día de trabajo"
              title="trabajador descansando"
              width="auto"
              height="auto"
              className={styles.img}
            />
            <Image
              src={img8}
              alt="Trabajador descansando después de un día de trabajo."
              title="trabajador descansando"
              width="auto"
              height="auto"
              className={styles.imgMobile}
            />
            <div className={styles.divTexto}>
              <h3>
                Estamos convencidos que las
                <br />
                personas hacen la diferencia.
              </h3>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
      <button className={`btn-button-prev ${[reachedEnd? "activee" : "nonee"]}`}>
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <button className={`btn-button-next ${[reachedBeginning? "activee" : "nonee"]}`}>
        <i className="ri-arrow-right-s-line"></i>
      </button>
    </div>
  );
}
