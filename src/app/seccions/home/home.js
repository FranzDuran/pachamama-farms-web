"use client";

import { useEffect, useState } from "react";
import SwiperComponent from "./swiper/swiper.js";
import Video from "./video/video.js";




export default function HomeSeccion() {
  
const [video, setVideo] = useState(false)

  const hadleVideo = () => {
    setVideo(!video)
  }

  const handleWindowResize = () => {
    // Aquí defines el ancho máximo para la versión móvil
    const mobileMaxWidth = 920;
    const shouldShowNavigation = window.innerWidth > mobileMaxWidth;

    // Actualiza el estado para mostrar u ocultar la navegación
    setShowNavigation(shouldShowNavigation);
  };

  useEffect(() => {
    // Agrega un event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleWindowResize);

    // Llama a la función una vez al inicio para configurar inicialmente el estado
    handleWindowResize();

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [showNavigation, setShowNavigation] = useState(true);

  return (
    <section id="home">
      <SwiperComponent
       showNavigation={showNavigation}
       hadleVideo={hadleVideo}>
      </SwiperComponent>
      {video && <Video />}
    </section>
  );
}
