"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logoWhite from "./logo white.png";
import logoBlack from "./logo black.png";
import iconoClaro from "./icono-claro.png";
import iconoOscuro from "./icono-oscuro.png";
import iconClose from "./icon-close.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language is English
  const [menuTextColor, setMenuTextColor] = useState("white");
  const [activeSection, setActiveSection] = useState(null);
  console.log(isMenuOpen);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 20 && rect.bottom >= 20) {
        setMenuTextColor(section.dataset.textColor || "white");
      }
    });
  };

  const handleClickNav = (scrollToId) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });

    setActiveSection(scrollToId);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(`.${styles.navbar}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        isMenuOpen ? styles.navbarToggleDer : ""
      } ${styles.sticky} ${styles[menuTextColor]}`}
    >
      <div className={`${styles.logo} ${isMenuOpen ? styles.hide : ""}`}>
        {menuTextColor === "white" ? (
          <Image src={logoWhite} alt="" width="auto" height="auto" />
        ) : (
          <Image src={logoBlack} alt="" width="auto" height="auto" />
        )}
      </div>
      <div className={styles.menuIzq}>
        <div className={`${styles.languageButtons} ${styles[menuTextColor]}`}>
          <button
            onClick={() => changeLanguage("en")}
            className={`${styles.languageButton} ${
              language === "en" ? styles.activeLanguage : ""
            } ${isMenuOpen ? styles.hide : ""}`}
          >
            EN
          </button>
          <span
            className={`${styles.languageSeparator} ${
              isMenuOpen ? styles.hide : ""
            }`}
          ></span>
          <button
            onClick={() => changeLanguage("es")}
            className={`${styles.languageButton} ${
              language === "es" ? styles.activeLanguage : ""
            } ${isMenuOpen ? styles.hide : ""}`}
          >
            ES
          </button>
        </div>
        <div
          className={`${styles.navbarToggle} ${isMenuOpen ? styles.open : ""} ${
            styles[menuTextColor]
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <Image src={iconClose} alt="" width="auto" height="auto" className={styles.iconx}/>
          ) : menuTextColor === "white" ? (
            <Image src={iconoClaro} alt="" width="auto" height="auto" />
          ) : (
            <Image src={iconoOscuro} alt="" width="auto" height="auto" />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <ul className={styles.menu}>
          <li
            onClick={() => {
              handleClickNav("home");
              toggleMenu();
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              handleClickNav("about");
              toggleMenu();
            }}
          >
            About us
          </li>
          <li
            onClick={() => {
              handleClickNav("calendar");
              toggleMenu();
            }}
          >
            Calendar
          </li>
          <li
            onClick={() => {
              handleClickNav("certifications");
              toggleMenu();
            }}
          >
            Certifications
          </li>
          <li
            onClick={() => {
              handleClickNav("fruits");
              toggleMenu();
            }}
          >
            Our fruits
          </li>
          <li
            id={styles.borderLi}
            onClick={() => {
              handleClickNav("contact");
              toggleMenu();
            }}
          >
            Contact us
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
