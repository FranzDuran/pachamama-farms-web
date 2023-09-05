"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import logoWhite from "./logo white.png";
import logoBlack from "./logo black.png";
import iconoClaro from "./icono-claro.png";
import iconoOscuro from "./icono-oscuro.png";
import iconClose from "./icon-close.png";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language is English
  const [menuTextColor, setMenuTextColor] = useState("white");
  const [activeSection, setActiveSection] = useState(null);

  const currentURL2 = window.location.href;
  const ultimasDosLetras = currentURL2.slice(-2);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Antes de cerrar el menú, desactiva el scroll suave
      document.documentElement.style.scrollBehavior = "auto";
      setTimeout(() => {
        setIsMenuOpen(false);
        // Después de cerrar el menú, restaura el scroll suave
        document.documentElement.style.scrollBehavior = "smooth";
      }, 500); // Ajusta el tiempo según la duración de la animación de cierre
    } else {
      setIsMenuOpen(true);
    }
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleLogoClick = () => {
    handleClickNav("home");
    setIsMenuOpen(false); // Close the menu when clicking the logo
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
      <div
        className={`${styles.logo} ${isMenuOpen ? styles.hide : ""}`}
        onClick={handleLogoClick}
      >
        {menuTextColor === "white" ? (
          <Image
            src={logoWhite}
            alt="white Pachamama farms logo for dark backgrounds"
            title="dark logo"
            width="auto"
            height="auto"
          />
        ) : (
          <Image
            src={logoBlack}
            alt="white Pachamama farms logo for light backgrounds"
            title="clear logo"
            width="auto"
            height="auto"
          />
        )}
      </div>
      <div className={styles.menuIzq}>
        <div className={`${styles.languageButtons} ${styles[menuTextColor]}`}>
          <Link href="/">
            <button
              onClick={() => changeLanguage("en")}
              className={`${styles.languageButton} ${
                language === "en" ? styles.activeLanguage : ""
              } ${isMenuOpen ? styles.hide : ""}`}
            >
              EN
            </button>
          </Link>
          <span
            className={`${styles.languageSeparator} ${
              isMenuOpen ? styles.hide : ""
            }`}
          ></span>

          <Link href="/es">
            <button
              onClick={() => changeLanguage("es")}
              className={`${styles.languageButton} ${
                language === "es" ? styles.activeLanguage : ""
              } ${isMenuOpen ? styles.hide : ""}`}
            >
              ES
            </button>
          </Link>
        </div>
        <div
          className={`${styles.navbarToggle} ${isMenuOpen ? styles.open : ""} ${
            styles[menuTextColor]
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <Image
              src={iconClose}
              alt="close icon , to be able to close the dropdown menu"
              title="close icon"
              width="auto"
              height="auto"
              className={styles.iconx}
            />
          ) : menuTextColor === "white" ? (
            <Image
              src={iconoClaro}
              alt="light hamburger menu icon for dark backgrounds, to open the dropdown menu"
              title="clear hamburger menu icon"
              width="auto"
              height="auto"
            />
          ) : (
            <Image
              src={iconoOscuro}
              alt="dark hamburger menu icon for dark backgrounds, to open the dropdown menu"
              title="dark hamburger menu icon"
              width="auto"
              height="auto"
            />
          )}
        </div>
      </div>

      <ul
        className={`${styles.menu} ${
          isMenuOpen ? styles["menu-slide-in"] : styles["menu-slide-out"]
        }`}
      >
        <li
          onClick={() => {
            handleClickNav("home");
            toggleMenu();
          }}
        >
          {ultimasDosLetras === "es" ? "Inicio" : "Home"}
        </li>
        <li
          onClick={() => {
            handleClickNav("about");
            toggleMenu();
          }}
        >
          {ultimasDosLetras === "es" ? "Sobre Nosotros" : "About us"}
        </li>
        <li
          onClick={() => {
            handleClickNav("calendar");
            toggleMenu();
          }}
        >
          {ultimasDosLetras === "es" ? "Calendario" : "Calendar"}
        </li>
        <li
          onClick={() => {
            handleClickNav("certifications");
            toggleMenu();
          }}
        >
          {ultimasDosLetras === "es" ? "Certificaciones" : "Certifications"}
        </li>
        <li
          onClick={() => {
            handleClickNav("fruits");
            toggleMenu();
          }}
        >
          {ultimasDosLetras === "es" ? "Nuestras frutas" : "Our fruits"}
        </li>
        <li
          id={styles.borderLi}
          onClick={() => {
            handleClickNav("contact");
            toggleMenu();
          }}
        >
          {ultimasDosLetras === "es" ? "Contáctanos" : "Contact us"}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
