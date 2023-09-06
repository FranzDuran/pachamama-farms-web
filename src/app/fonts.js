// fonts.js
import { Roboto } from "next/font/google";
import localFont from "next/font/local";


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const periodico = localFont({
  src: [
    {
      path: "./PeriodicoDisplay-Lg.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./PeriodicoDisplay-Rg.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
});

const fontsConfig = {
  roboto,
  periodico,
};

export default fontsConfig;
