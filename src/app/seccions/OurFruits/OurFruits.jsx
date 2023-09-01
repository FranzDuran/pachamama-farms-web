import SwiperReusable from "../../../components/SwiperReusable/SwiperReusable";
import image1 from "./assets/_DSC9905.JPG";
import image2 from "./assets/_DSC8669.JPG";
import image3 from "./assets/_DSC9565.JPG";
import logoicon from "./assets/logoicon.png";

export default function OurFruits({text}) {
  const data = {
    logo: logoicon,
    text: text,
    cards: [{ image: image1 }, { image: image2 }, { image: image3 }],
  };
  return (
    <section id="fruits">
      <SwiperReusable data={data} />
    </section>
  );
}

/* "use client";

import React, { useState } from "react";
import styles from "./OurFruits.module.css";
import Image from "next/image";
import Imagen1 from "./assets/_DSC9905.JPG";
import Imagen2 from "./assets/_DSC8669.JPG";
import Imagen3 from "./assets/_DSC9565.JPG";
import ImagenLogo from "./assets/logoicon.png";
import "remixicon/fonts/remixicon.css";

export default function OurFruits() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalImages = 3; // Update the totalImages count
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalImages));
    };
  
    const isFirstImage = currentPage === 1;
    const isLastImage = currentPage === totalImages;

  return (
    <section className={styles.sectionPackHouse} data-text-color="black">
      <article className={styles.PackHouseArticle}>
      <div>
          <button onClick={handlePrevPage} disabled={isFirstImage}>
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <p>{`Kent mangos ${currentPage}/${totalImages}`}</p>
          <button onClick={handleNextPage} disabled={isLastImage}>
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
        {isFirstImage ? (
          <Image
            src={Imagen1}
            alt="Image 1 Alt Text"
            title="Image 1 Title"
            className={styles.imagen}
          />
        ) : isLastImage ? (
          <Image
            src={Imagen3}
            alt="Image 3 Alt Text"
            title="Image 3 Title"
            className={styles.imagen}
          />
        ) : (
          <Image
            src={Imagen2}
            alt="Image 2 Alt Text"
            title="Image 2 Title"
            className={styles.imagen}
          />
        )}
        <div className={styles.divLogo}>
          <Image
            className={styles.LogoPackHouse}
            src={ImagenLogo}
            alt="Illustration with information about the 7000 square meters of pachamama farms where the best fruits of Peru are grown | Ilustracion con informacion sobre los 7000 Metros cuadrados de pachamama farms donde se cultivan las mejores frutas de Perú"
            title="Information about the territory of Pachamama Farms | Informacion sobre el territorio de Pachamama Farms  "
          />
        </div>
      </article>
    </section>
  );
} */
