import React from 'react'
import { useState } from "react"
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";


const Carrusel = () => {

    const slides = [
        {
            url:'https://i.ibb.co/5sR1WKz/Juane.png'
        },
        {
            url:'https://i.ibb.co/720KngG/Helado-fresa.jpg'
        },
        {
            url:'https://i.ibb.co/yQBpDs2/Sanguche-Chicharron.png'
        },
        {
            url:'https://i.ibb.co/pLcWjVq/tacacho-con-cecina.png'
        },
        {
            url:'https://i.ibb.co/Rcdnk53/Infusiones.png'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;

        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nexSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    
    return (
        <div className= 'bg-red-300 p-6 justify-items-center'>
            <div className='bg-black p-2 max-w-[640px] rounded-xl mb-4'>
                <h2 className='font-bold text-xl text-center text-white'>Nuestros Productos</h2>
            </div>
            <div className='min-w-[350px] h-[458px] w-full bg-white m-auto py-16 px-4 relative group flex flex-col flex-grow md:w-[640px] md:h-full'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
                    className='w-[350px] h-full bg-cover bg-center rounded-2xl duration-500 sm:w-[600px] sm:h-[458px]'>
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] lef-5 text-2xl rounded-full 
                            p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full 
                        p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nexSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center p-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carrusel