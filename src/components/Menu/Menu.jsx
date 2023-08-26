"use client";
// Menu.js
import { useEffect, useState } from "react";
import styles from "./menu.module.css";

const Menu = () => {
  const [menuTextColor, setMenuTextColor] = useState("white");
  //const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom >= 80) {
        setMenuTextColor(section.dataset.textColor || "white");
      }
    });
  };

  /* const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; */

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.menu}>
      <ul className={`${styles.menuItems} ${styles[menuTextColor]}`}>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Menu;
