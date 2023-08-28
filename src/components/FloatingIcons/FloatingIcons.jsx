"use client";
import React from "react";
import Link from "next/link";
import styles from "./FloatingIcons.module.css";
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";

const FloatingIcons = () => {
  const [menuTextColor, setMenuTextColor] = useState("white");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;
  
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const topOffset = (windowHeight * 0.49) - (rect.height * 0.49);
      const bottomOffset = (windowHeight * 0.49) + (rect.height * 0.49);
  
      if (rect.top <= bottomOffset && rect.bottom >= topOffset) {
        setMenuTextColor(section.dataset.textColor || "white");
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
    // Lógica para desplazarse a la siguiente sección de la página
    const sections = document.querySelectorAll("section"); // Selecciona todas las secciones
    let nextSectionIndex = -1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        nextSectionIndex = index + 1;
      }
    });

    if (nextSectionIndex < sections.length) {
      sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${styles.floatingIconsContainer} ${styles[menuTextColor]}`}
    >
      <span className={`${styles.textIcon} `}>Find us in</span>
      <span className={`${styles.linkedinIcon} `}>
        <Link
          href="https://www.linkedin.com/your-linkedin-url"
          passHref
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <i className="ri-linkedin-box-fill"></i>
        </Link>
      </span>
      <span className={styles.youtubeIcon}>
        <Link
          href="https://www.youtube.com/your-youtube-url"
          passHref
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <i className="ri-youtube-fill"></i>
        </Link>
      </span>
      <span className={styles.scrollButton} onClick={scrollToNextSection}>
        <i className="ri-arrow-down-line"></i>
      </span>
    </div>
  );
};

export default FloatingIcons;
