"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language is English
  const [menuTextColor, setMenuTextColor] = useState("white");
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom >= 80) {
        setMenuTextColor(section.dataset.textColor || "white");
      }
    });
  };


  const handleClickNav = (scrollToId) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });

    setActiveSection(scrollToId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${styles.sticky} ${styles[menuTextColor]}`}
    >
      <div className={`${styles.logo}`}>Logo</div>
      <div className={styles.menuIzq}>
        <div className={`${styles.languageButtons} ${styles[menuTextColor]}`}>
          <button
            onClick={() => changeLanguage("en")}
            className={`${styles.languageButton} ${
              language === "en" ? styles.activeLanguage : ""
            }`}
          >
            EN
          </button>
          <span className={styles.languageSeparator}>|</span>
          <button
            onClick={() => changeLanguage("es")}
            className={`${styles.languageButton} ${
              language === "es" ? styles.activeLanguage : ""
            }`}
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
          <span className={styles.icon}></span>
          <span className={styles.icon}></span>
          <span className={styles.icon}></span>
        </div>
      </div>
      {isMenuOpen && (
        <ul className={styles.menu}>
          <li onClick={() => handleClickNav("home")}>Home</li>
          <li onClick={() => handleClickNav("about")}>About us</li>
          <li onClick={() => handleClickNav("calendar")}>Calendar</li>
          <li onClick={() => handleClickNav("certifications")}>Certifications</li>
          <li onClick={() => handleClickNav("fruits")}>Our fruits</li>
          <li className={styles.borderLi} onClick={() => handleClickNav("contact")}>Contact us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;