'use client'

import React, { useState } from "react";
import styles from "./packHouse.module.css";
import Image from "next/image";
import Imagen1 from './assets/image1.JPG';
import Imagen2 from './assets/image2.JPG'


export default function PackHouse() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalImages = 2;

    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalImages));
    };
  
    const selectedImage = currentPage === 1 ? Imagen1 : Imagen2;

  return (
    <section className={styles.sectionPackHouse} data-text-color="black">
      <article className={styles.PackHouseArticle}>
        <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>izq</button>
            <p>{`Packhouse ${currentPage}/2`}</p>
            <button onClick={handleNextPage} disabled={currentPage === totalImages}>der</button>
        </div>

        <Image
         src={selectedImage}
         alt="Assortment of Exotic Fruits and Vegetables from Pachamama Farms , Variedad de Frutas y Verduras Exóticas de Pachamama Farms , "
         className={styles.imagen}
         />
      </article>
    </section>
  );
}
