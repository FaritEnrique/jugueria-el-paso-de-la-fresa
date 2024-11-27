import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carrusel = () => {
    const slides = [
        { url: 'https://i.ibb.co/HPvSYDr/Fresa-bolsa-x-kg-carrusel.jpg' },
        { url: 'https://i.ibb.co/720KngG/Helado-fresa.jpg' },
        { url: 'https://i.ibb.co/kQ5sF9F/fresas-envase-kg-carrusel.jpg' },
        { url: 'https://i.ibb.co/X8djNn3/Caja-Fresa-x-20-kg-Carrusel.png' },
        { url: 'https://i.ibb.co/Rcdnk53/Infusiones.png' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="bg-red-300 p-8 justify-items-center">
            <div className="bg-black p-2 max-w-[768px] rounded-xl mb-4 mx-auto">
                <h2 className="font-bold text-xl text-center text-white">Nuestros Productos</h2>
            </div>
            <div className="relative group max-w-[768px] mx-auto">
                {/* Imagen del carrusel */}
                <img 
                    className="w-full h-auto max-w-[920px] rounded-2xl duration-500 transition-all transform scale-105" 
                    src={slides[currentIndex].url} 
                    alt={`Imagen ${currentIndex + 1}`} 
                />
                
                {/* Botón izquierdo */}
                <div 
                    className="absolute top-[50%] left-0 text-2xl transform -translate-y-1/2 p-2 bg-black/20 text-white cursor-pointer rounded-full"
                    onClick={prevSlide}
                >
                    <BsChevronCompactLeft size={30} />
                </div>
                
                {/* Botón derecho */}
                <div 
                    className="absolute top-[50%] right-0 text-2xl transform -translate-y-1/2 p-2 bg-black/20 text-white cursor-pointer rounded-full"
                    onClick={nextSlide}
                >
                    <BsChevronCompactRight size={30} />
                </div>
                
                {/* Indicadores de puntos fuera de la imagen */}
                <div className="absolute bottom-[-40px] w-full flex justify-center p-2">
                    {slides.map((slide, slideIndex) => (
                        <div 
                            key={slideIndex} 
                            onClick={() => goToSlide(slideIndex)} 
                            className="text-2xl cursor-pointer mx-1"
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carrusel;