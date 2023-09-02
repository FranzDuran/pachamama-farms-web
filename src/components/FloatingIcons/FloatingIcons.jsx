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

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const topOffset = windowHeight * 0.49 - rect.height * 0.49;
      const bottomOffset = windowHeight * 0.49 + rect.height * 0.49;

      if (rect.top <= bottomOffset && rect.bottom >= topOffset) {
        setMenuTextColor(section.dataset.textColor || "white");
        setIsLastSection(index === sections.length - 1);
      }
    });
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
      <span className={`${styles.textIcon} `}>Find us in</span>
      <span className={`${styles.linkedinIcon} `}>
        <Link
          href="https://www.linkedin.com/company/pachamama-farms-sac/"
          passHref
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {/* <i className="ri-youtube-fill"></i> */}
          {menuTextColor === "white" ? (
            <Image src={LikedinClaro} alt="" width="auto" height="auto" />
          ) : (
            <Image src={linkedinOscuro} alt="" width="auto" height="auto" />
          )}
        </Link>
      </span>
      <span className={styles.youtubeIcon}>
        <Link
          href="https://www.youtube.com/@pachamamafarms7190"
          passHref
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {menuTextColor === "white" ? (
            <Image src={iconYoutubeClaro} alt="" width="auto" height="auto" />
          ) : (
            <Image src={iconYoutubeOscuro} alt="" width="auto" height="auto" />
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
          <Image src={flechawhite} alt="" width="auto" height="auto" />
        ) : (
          <Image src={flechablack} alt="" width="auto" height="auto" />
        )}
      </span>
    </div>
  );
};

export default FloatingIcons;
