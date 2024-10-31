import React from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import logoJugo from "../images/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
        <header className='w-full bg-orange-400 py-2 px-6'>
            <div className='container mx-auto flex justify-between place-items-center'>
                <div>
                    <img src= {logoJugo} alt="" />
                </div>
                <nav className='bg-gray-400 border-gray-200 dark:bg-gray-900 rounded-xl px-4 py-3'>
                    <Link className='px-3 ring-offset-2 ring-2 text-indigo-600 font-extrabold underline mx-2 rounded hover:bg-cyan-200' to='/'>Home</Link>
                    <Link className='px-3 ring-offset-2 ring-2 text-indigo-600 font-extrabold underline mx-2 rounded hover:bg-cyan-200' to='/order'>Pedidos</Link>
                    <Link className='px-3 ring-offset-2 ring-2 text-indigo-600 font-extrabold underline mx-2 rounded hover:bg-cyan-200' to='/politicas'>Políticas</Link>
                    
                </nav>
                <button className='flex items-center gap-2 bg-lime-400 px-2 border-red-500 ring-2 border-4 rounded-3xl'>
                    <Link to='/register'>Registro</Link>
                    <IoPersonCircle className='text-xl'/>
                </button>
                <button className="text-3xl relative">
                    <BsCart4 />
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold
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