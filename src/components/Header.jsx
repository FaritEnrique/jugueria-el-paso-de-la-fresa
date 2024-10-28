import React from 'react'
import PropTypes from 'prop-types'
import { IoPersonCircle } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { PiGreaterThanDuotone } from "react-icons/pi";
import logoJugo from "../images/logo.png";


const Header = () => {
  return (
    <>
        <header className='w-full bg-orange-400 py-2 px-6'>
            <div className='container mx-auto flex justify-between place-items-center'>
                <div>
                    <img src= {logoJugo} alt="" />
                </div>
                <nav className='bg-gray-400 border-gray-200 dark:bg-gray-900 rounded-xl'>
                    <div className='hidden w-full md:block md:w-auto px-3 py-2 rounded-xl' id='navbar-default'>
                        <ul className='font-medium flex p-4 md:p-0 mt-4 border border-gray-100
                        bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white
                        dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 rounded-xl'>
                            <li className='flex flex-row items-center px-2'>
                                <a href="#" className='block py-2 px-3 text-white bg-blue-700 rounded 
                                md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" 
                                aria-current="page'>Home</a>
                                <PiGreaterThanDuotone />
                            </li>
                            <li className='flex flex-row items-center px-2'>
                                <a href="#" className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
                                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                                md:dark:hover:bg-transparent'>Bebidas</a>
                                <PiGreaterThanDuotone />
                            </li>
                            <li className='flex flex-row items-center px-2'>
                                <a href="#" className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
                                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                                md:dark:hover:bg-transparent'>Comidas</a>
                                <PiGreaterThanDuotone />
                            </li>
                        </ul>
                    </div>
                </nav>
                <button className='flex items-center gap-2 bg-lime-400 px-2 border-b-red-950 border-4 rounded-3xl'>
                    <p>Registro</p>
                    <IoPersonCircle className='text-xl'/>
                </button>
                <button className="text-3xl relative">
                    <BsCart4 />
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold
                    text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2
                    dark:border-gray-900">0</div>
                </button>
            </div>
        </header>
    </>
    
  )
}

Header.propTypes = {}

export default Header