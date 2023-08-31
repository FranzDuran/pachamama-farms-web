// fonts.js
import { Newsreader, Roboto } from "next/font/google";
import localFont from "next/font/local";

const nw = Newsreader({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["300", "400", "700"],
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
  nw,
  roboto,
  periodico,
};

export default fontsConfig;
