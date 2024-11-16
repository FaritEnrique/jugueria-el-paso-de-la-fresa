import React from 'react'
import instagram from '../images/Instagram-Icon.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import ubicacion from '../images/Ubicacion.png';
import carta from '../images/Codigo_Qr.png';
import ModalUbicacion from './ModalUbicacion';

const Footer = () => {
  return (
    <>
        <footer className='w-full bg-orange-400 p-2'>
            <div className='flex flex-wrap w-full py-4 px-4 gap-2 justify-between'>
                <div className='bg-white p-4 rounded-xl w-full sm:w-72 sm:flex-grow md:min-w-80 md:flex-grow'>
                    <h3 className='font-bold'>Contáctanos</h3>
                    <p className='text-justify'>Dirección: Yavarí / Condamine</p>
                    <p className=''>Teléfono:  +51 xxxxxxxxxx</p>
                    <button className='mt-3 px-3 bg-gray-200 border-2 border-black rounded-lg ring-offset-2 ring-2'>
                        <a href="https://api.whatsApp.com/send?phone=+51900569806&text=Hola" target="_blank"><img src='https://i.ibb.co/Nsh0zjN/WhatsApp.png' alt="" /></a>
                    </button>
                </div>
                <div className='bg-white p-4 rounded-xl w-full sm:w-72 sm:flex-grow md:min-w-80 md:flex-grow justify-between'>
                    <h3 className='font-bold text-xl'>
                        Ubíquenos
                    </h3>
                    <div className='w-full flex gap-4 pt-2 pb-2 items-center justify-between'>
                        <p>Pulse ícono de ubicación</p>
                        <ModalUbicacion />
                        <div className='hidden md:block w-28 ring-offset-2 ring-2 bg-red-300'>
                        <img src={ubicacion} alt="Figura de Ubicación" />
                        </div>
                    </div>
                    
                </div>
                <div className='flex bg-white pt-4 pb-2 pr-4 pl-6 rounded-xl w-full sm:w-72 sm:flex-grow md:min-w-80 md:flex-grow place-content-between'>
                    <div className=''>
                        <h3 className='font-bold text-xl'>
                            Descargue la Carta
                        </h3>
                        <button className='border-2 bg-blue-900 h-fit rounded-lg p-2 mt-3 text-white'>
                            <a href="https://drive.google.com/file/d/1SMrx4P1qi1YavtFTZsAjfhV0K3jcUbtn/view?usp=drive_link/
                                    view?usp=sharing" target="_blank">Descargar</a>
                        </button>
                    </div>
                    <div className='hidden md:block w-44 justify-center'>
                            <img src={carta} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-white p-2'>
                <h3 className='font-bold text-center mb-2'>Contáctenos en Redes Sociales</h3>
                <div className='flex gap-8 justify-center'>
                    <a className='bg-white hover:bg-blue-400 p-2 rounded-full ring-offset-2 ring-2' href="" target="_blank"><img className='rounded-lg' src={facebook} alt=''></img></a>
                    <a className='bg-white hover:bg-red-200 p-2 rounded-full ring-offset-2 ring-2 ' href="" target="_blank"><img src={instagram} alt=''></img></a>
                    <a className='bg-white hover:bg-red-500 p-2 rounded-full ring-offset-2 ring-2' href="" target="_blank"><img className='rounded-lg' src={youtube} alt=''></img></a>
                </div>
            </div>
            <h3 className='font-bold text-xl text-center p-2'>Derechos Reservados Iquitos, Perú - 2024</h3>
        </footer>
    </>
  )
}

export default Footer