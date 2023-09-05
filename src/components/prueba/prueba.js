"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';



const Prueba = () => {
    const router = useRouter();
    useEffect(() => {
        const sections = document.querySelectorAll('section');
    
        const handleScroll = () => {
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 20 && rect.bottom >= 20) { // Puedes ajustar este valor según tu diseño
                    const targetId = section.id;
                    if (targetId) {
                        const newURL = `${window.location.pathname}#${targetId}`;
                        window.history.replaceState({}, document.title, newURL);
                        break;
                    }
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [router]);

    return(
        <>
        
        </>
    )
}



export default Prueba