'use client'

import React, { useState } from "react";
import styles from "./packHouse.module.css";
import Image from "next/image";
import Imagen1 from './assets/image1.JPG';
import Imagen2 from './assets/image2.JPG'
import "remixicon/fonts/remixicon.css";

export default function PackHouse() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalImages = 2;

    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalImages));
    };
  
    const isFirstImage = currentPage === 1;

  return (
    <section className={styles.sectionPackHouse} data-text-color="black">
      <article className={styles.PackHouseArticle}>
        <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}><i class="ri-arrow-left-s-line"></i></button>
            <p>{`Packhouse ${currentPage}/2`}</p>
            <button onClick={handleNextPage} disabled={currentPage === totalImages}><i class="ri-arrow-right-s-line"></i></button>
        </div>
        {isFirstImage ? (
                    <Image
                        src={Imagen1}
                        alt="Pachamama Farms facilities where the best quality fruits from all over Perú are grown | Instalaciones de Pachamama Farms donde se cultivan las mejores frutas de calidad de todo Perú"
                        title="Facilities of premium exotic fruits and vegetables from Pachamama farms in Peru | Instalaciones de Frutas y verduras exóticas premium de granjas Pachamama en Perú"
                        className={styles.imagen}
                    />
                ) : (
                    <Image
                        src={Imagen2}
                        alt="
                        Worker inspecting the excellent quality of the fruits that Phamama farms sells | Trabajador inspeccionando la Exelente calidad de las frutas que vende Phamama farms"
                        title="Worker inspecting the best fruits of Peru | Trabajador inspeccionando las mejores frutas de Perú"
                        className={styles.imagen}
                    />
                )}
      </article>
    </section>
  );
}
