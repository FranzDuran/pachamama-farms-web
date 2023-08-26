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
import Video from "../video/video";

import styles from "../home.module.css";

export default ({ showNavigation , hadleVideo }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={showNavigation}
      pagination={!showNavigation}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={styles.divContenido}>
          <div className={styles.divTexto}>
            <h1>
              We are a big family working <br />
              together every day
            </h1>
            <p onClick={() => hadleVideo()}>
              Watch the video <FontAwesomeIcon icon={faCirclePlay} />{" "}
            </p>


          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.divContenido2}>
          <div className={styles.divTexto}>
            <h1>
              We feel truly connected <br />
              to the land we farm
            </h1>
            <p onClick={() => hadleVideo()}>
              Watch the video <FontAwesomeIcon icon={faCirclePlay} />
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.divContenido3}>
          <div className={styles.divTexto}>
            <h1>
              The land we cultivate is unique <br />
              and brings us unique fruits
            </h1>
            <p onClick={() => hadleVideo()}>
              Watch the video <FontAwesomeIcon icon={faCirclePlay} />
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
