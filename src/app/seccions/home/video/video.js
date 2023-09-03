import React from "react";
import styles from "./video.module.css";
import Modal from "react-modal";
import "../modal.css";

export default function Video({ hadleVideo, video }) {
  return (
      <article className={styles.Video}
      aria-label="modal showing a youtube video about Pachamama Farms quality fruits and products"
      >
        <i
          className="ri-close-fill"
          id={styles.iconx}
          onClick={() => hadleVideo()}
        ></i>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MZL2trTxwnU?si=x-_VrnxQ_forKuo9"
          title="youtube video showing all that Pachamama Farms has to offer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className={styles.videoYt}
        ></iframe>
      </article>
  );
}
