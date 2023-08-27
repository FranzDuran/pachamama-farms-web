// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperSlide.css";

// Import Swiper stylesjj
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import styles from "../home.module.css";

export default ({ showNavigation, hadleVideo }) => {
  return (
    <section className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
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
          <article className={styles.divContenido}>
            <div className={styles.divTexto}>
              <h2>
                We are a big family working <br />
                together every day
              </h2>
              <button onClick={() => hadleVideo()}>
                Watch the video <FontAwesomeIcon icon={faCirclePlay} />{" "}
              </button>
            </div>
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
                Watch the video <FontAwesomeIcon icon={faCirclePlay} />
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
                Watch the video <FontAwesomeIcon icon={faCirclePlay} />
              </button>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="paginationSwiper"></div>
    </section>
  );
};
