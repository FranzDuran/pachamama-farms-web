import React from 'react';
import './globals.css'
import fontsConfig from './fonts';
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from './seccions/ContactUs/ContactUs';

export const metadata = {
  title: 'Dedicated to research, development, producing, packing and exporting high quality exotic fruits ',
  description: 'Dedicated to research, development, producing, packing and exporting high quality exotic fruits and vegetables from Perú.',
   keywords: 'exotic fruits, high quality, research, development, exporting, Peru',
};

function applyFontsClasses() {
  const fontClassNames = Object.values(fontsConfig).map((font) => font.className);
  return fontClassNames.join(' ');
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={applyFontsClasses()} style={{ margin: 0, fontWeight: '600' }}>
       <header>
          <Navbar></Navbar>
       </header>
        {children}
        <footer>
         <ContactUs></ContactUs>
        </footer>
      </body>
    </html>
  )
}
