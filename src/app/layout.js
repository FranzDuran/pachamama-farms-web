import React from "react";
import "./globals.css";
import fontsConfig from "./fonts";
import Navbar from "@/components/Navbar/Navbar";
import ContactUs from "./seccions/ContactUs/ContactUs";
import Script from "next/script";

export const metadata = {
  title:
    "Dedicated to research, development, producing, packing and exporting high quality exotic fruits ",
  description:
    "Dedicated to research, development, producing, packing and exporting high quality exotic fruits and vegetables from Perú.",
  keywords:
    "exotic fruits, high quality, research, development, exporting, Peru",
};

function applyFontsClasses() {
  const fontClassNames = Object.values(fontsConfig).map(
    (font) => font.className
  );
  return fontClassNames.join(" ");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-6XH4721CH9"
        />

        <Script id="ga-script" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6XH4721CH9', {
                page_path: window.location.pathname,
              });
        `}
        </Script>
      </head>
      <body
        className={applyFontsClasses()}
        style={{ margin: 0, fontWeight: "600" }}
      >
        <header>
          <Navbar></Navbar>
        </header>
        {children}
        <footer>
          <ContactUs></ContactUs>
        </footer>
      </body>
    </html>
  );
}
