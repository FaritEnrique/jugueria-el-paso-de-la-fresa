import React from 'react'
import whatsapp from '../images/Whatsapp.png';
import instagram from '../images/Instagram-Icon.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import esquina from '../images/Esquina_ubicacion.png';
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <>
        <footer className='w-full bg-orange-400 p-2'>
            <div className='flex p-4 gap-4 justify-between'>
                <div className='bg-white p-2 rounded-xl w-1/3'>
                    <h3 className='font-bold'>Contáctanos</h3>
                    <pre>Dirección: Yavarí / Condamine</pre>
                    <pre>Teléfono:  +51 xxxxxxxxxx</pre>
                    <button className='mt-3 px-3 bg-gray-200 border-2 border-black rounded-lg'>
                        <a href="https://api.whatsApp.com/send?phone=+51900569806&text=Hola" target="_blank"><img src={whatsapp} alt="" /></a>
                    </button>
                </div>
                <div className='flex gap-4 bg-white p-2 rounded-xl w-1/3'>
                    <h3 className='font-bold text-xl justify-center'>
                        Ubíquenos
                    </h3>
                    <button className='border-2 border-blue-300 p-2 h-fit'>
                        <a href="">
                            <SlLocationPin className='text-2xl' />
                        </a>
                    </button>
                </div>
                <div className='gap-4 bg-white p-2 rounded-xl w-1/3'>
                    <h3 className='font-bold text-xl'>
                        Descargue la Carta
                    </h3>
                    <button className='border-2 bg-blue-900 h-fit rounded-lg p-2 mt-3 text-white'>
                        Descargar
                    </button>
                </div>
            </div>
            <div className='bg-white p-2'>
                <h3 className='font-bold text-center mb-2'>Contáctenos en Redes Sociales</h3>
                <div className='flex gap-8 justify-center'>
                    <a  className='bg-white hover:bg-blue-400 p-2 rounded-full' href="" target="_blank"><img className='rounded-lg' src={facebook} alt=''></img></a>
                    <a className='bg-white hover:bg-red-200 p-2 rounded-full ' href="" target="_blank"><img src={instagram} alt=''></img></a>
                    <a className='bg-white hover:bg-red-500 p-2 rounded-full' href="" target="_blank"><img className='rounded-lg' src={youtube} alt=''></img></a>
                </div>
            </div>
            <h3 className='font-bold text-xl text-center p-2'>Derechos Reservados Iquitos, Perú - 2024</h3>
        </footer>
    </>
  )
}

export default Footer