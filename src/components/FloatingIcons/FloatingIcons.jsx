"use client";
import React from "react";
import Link from "next/link";
import styles from "./FloatingIcons.module.css";
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import flechawhite from "./assets/flecha_blanca.png";
import flechablack from "./assets/flecha_marron.png";
import iconYoutubeClaro from "./assets/ico_youtube_claro.png";
import iconYoutubeOscuro from "./assets/ico_youtube_oscuro.png";
import LikedinClaro from "./assets/LinkedinClaro.png";
import linkedinOscuro from "./assets/LinkedinOscuro.png";

const FloatingIcons = () => {
  const [menuTextColor, setMenuTextColor] = useState("white");
  const [isLastSection, setIsLastSection] = useState(false);

  /* const currentURL = window.location.href;
  const ultimasDosLetras = currentURL.slice(-2); */

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;
    let isPachamamaSectionVisible = false;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const topOffset = windowHeight * 0.49 - rect.height * 0.49;
      const bottomOffset = windowHeight * 0.49 + rect.height * 0.49;

      if (rect.top <= bottomOffset && rect.bottom >= topOffset) {
        setMenuTextColor(section.dataset.textColor || "white");
        setIsLastSection(index === sections.length - 1);

        // Check if the current section has the id "pachamama"
        if (section.id === "pachamama") {
          isPachamamaSectionVisible = true;
        }
      }
    });

    // Set the menuTextColor to white if the "pachamama" section is visible
    if (isPachamamaSectionVisible) {
      setMenuTextColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;
    let nextSectionIndex = -1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < windowHeight) {
        nextSectionIndex = index + 1;
      }
    });

    if (nextSectionIndex < sections.length) {
      sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
    } else {
      // Si estás en la última sección, redirige a la primera sección
      sections[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${styles.floatingIconsContainer} ${styles[menuTextColor]}`}
    >
      <span className={`${styles.textIcon} `}>
      Find us in
        {/* {ultimasDosLetras === "es" ? "Encuéntranos en" : "Find us in"} */}
      </span>
      <span className={`${styles.linkedinIcon} `}>
        <Link
          href="https://www.linkedin.com/company/pachamama-farms-sac/"
          passHref
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
        >
          {/* <i className="ri-youtube-fill"></i> */}
          {menuTextColor === "white" ? (
            <Image
              src={LikedinClaro}
              title="Likedin icon"
              alt="white Likedin icon to show on dark backgrounds"
              width="auto"
              height="auto"
            />
          ) : (
            <Image
              src={linkedinOscuro}
              title="Likedin icon"
              alt="black Likedin icon to show on claros backgrounds"
              width="auto"
              height="auto"
            />
          )}
        </Link>
      </span>
      <span className={styles.youtubeIcon}>
        <Link
          href="https://www.youtube.com/@pachamamafarms7190"
          passHref
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
        >
          {menuTextColor === "white" ? (
            <Image
              src={iconYoutubeClaro}
              title="youtube icon"
              alt="white youtube icon to show on dark backgrounds"
              height="auto"
            />
          ) : (
            <Image
              src={iconYoutubeOscuro}
              title="youtube icon"
              alt="black youtube icon to show on claros backgrounds"
              height="auto"
            />
          )}
        </Link>
      </span>
      <span
        className={styles.scrollButton}
        onClick={scrollToNextSection}
        style={{
          transform: isLastSection ? "rotate(180deg)" : "rotate(0)",
        }}
      >
        {menuTextColor === "white" ? (
          <Image
            src={flechawhite}
            title="white arrow"
            alt="light arrow to advance to the next section when the background is dark"
            width="auto"
            height="auto"
          />
        ) : (
          <Image
            src={flechablack}
            title="dark arrow"
            alt="dark arrow to advance to the next section when the background is ligh"
            width="auto"
            height="auto"
          />
        )}
      </span>
    </div>
  );
};

export default FloatingIcons;
