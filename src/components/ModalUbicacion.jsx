import React from 'react'
import esquina from '../images/Esquina_ubicacion.png'
import { FaRegWindowClose } from "react-icons/fa";

const ModalUbicacion = () => {
    
    return (
        <>
            <dialog id='modalUbicacion' className='w-5/12 rounded-xl p-4 justify-self-center bg-red-200'>
                <button className='flex px-3 mt-2 bg-blue-300 items-center justify-self-end gap-2 rounded-xl'>
                    <p>
                        Cerrar
                    </p>
                    <FaRegWindowClose />
                </button>
                <h3 className='font-bold mb-2 text-center'>Nuestra Ubicación</h3>
                <div className='border-2 mb-2 border-b-slate-800 w-full'>
                <iframe className='w-full hover:h-screen' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.928729030069!2d-73.24372384255751!3d-3.745584927823323!2m3!1f0!2f0!3f0!
                3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea10773b698b0b%3A0x96cf508c8d37a5bc!2sYavari%20419%2C%20Iquitos%2016002!5e0!3m2!1ses
                -419!2spe!4v1730155749176!5m2!1ses-419!2spe"></iframe>
                </div>
                <div className='w-full border-2'>
                    <img className='w-full' src={esquina} alt="" />
                </div>
            </dialog>
        </>
    )
}

export default ModalUbicacion