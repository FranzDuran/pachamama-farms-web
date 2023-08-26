import React from "react";
import styles from "./video.module.css";

export default function Video() {
  return (
    <div className={styles.Video}>
      <iframe
        src="https://www.youtube.com/embed/GROgxR27u0Q?si=Wn3-1MeXp2Ib6tV0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className={styles.videoYt}
      ></iframe>
    </div>
  );
}
