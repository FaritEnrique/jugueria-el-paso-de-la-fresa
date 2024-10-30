import React from 'react'
import whatsapp from '../images/Whatsapp.png';
import instagram from '../images/Instagram-Icon.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import { SlLocationPin } from "react-icons/sl";
import ubicacion from '../images/Ubicacion.png';
import carta from '../images/Codigo_Qr.png';
/* import { setOpen } from '../hooks/ModalUbicacion'; */

const Footer = () => {
  return (
    <>
        <footer className='w-full bg-orange-400 p-2'>
            <div className='flex p-4 gap-4 justify-between'>
                <div className='bg-white p-4 rounded-xl w-1/3'>
                    <h3 className='font-bold'>Contáctanos</h3>
                    <pre>Dirección: Yavarí / Condamine</pre>
                    <pre>Teléfono:  +51 xxxxxxxxxx</pre>
                    <button className='mt-3 px-3 bg-gray-200 border-2 border-black rounded-lg ring-offset-2 ring-2'>
                        <a href="https://api.whatsApp.com/send?phone=+51900569806&text=Hola" target="_blank"><img src={whatsapp} alt=""/></a>
                    </button>
                </div>
                <div className='bg-white p-4 rounded-xl w-1/3 justify-between'>
                    <h3 className='font-bold text-xl'>
                        Ubíquenos
                    </h3>
                    <div className='w-full flex gap-4 pt-2 pb-2 items-center justify-between'>
                        <p>Pulse ícono de ubicación</p>
                        <button className='border-2 border-blue-300 p-2 h-fit' /* onClick={() => setOpen(true)} */>
                            <SlLocationPin className='text-2xl' />
                        </button>
                        <div className='w-28 ring-offset-2 ring-2 bg-red-300'>
                        <img src={ubicacion} alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='flex bg-white pt-4 pb-2 pr-4 pl-6 rounded-xl w-1/3 place-content-between'>
                    <div className=''>
                        <h3 className='font-bold text-xl'>
                            Descargue la Carta
                        </h3>
                        <button className='border-2 bg-blue-900 h-fit rounded-lg p-2 mt-3 text-white'>
                            <a href="https://drive.google.com/file/d/1SMrx4P1qi1YavtFTZsAjfhV0K3jcUbtn/
                                    view?usp=sharing">Descargar</a>
                        </button>
                    </div>
                    <div className='w-44 justify-center'>
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