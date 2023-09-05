import React from "react";
import styles from "./video.module.css";

export default function Video({hadleVideo}) {
  return (
    <div className={styles.Video}>
      <i className="ri-close-fill" id={styles.iconx} onClick={() => hadleVideo()}></i>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MZL2trTxwnU?si=x-_VrnxQ_forKuo9"
        title="Excellence in Agricultural Innovation: Pachamama Farms' Commitment to Premium Produce from Peru | Excelencia en innovación agrícola: el compromiso de Pachamama Farms con productos premium del Perú"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className={styles.videoYt}
      ></iframe>
    </div>
  );
}
