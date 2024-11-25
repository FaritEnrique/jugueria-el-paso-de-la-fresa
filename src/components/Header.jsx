import React, { useState } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import logoJugo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useCartStore } from '../store/cart';
import { LiaWindowClose } from "react-icons/lia";
import { FaUserTie } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { LuMenuSquare } from "react-icons/lu";

const Header = () => {
    const { cart, removeFromCart, cleanCart } = useCartStore()

    const [open, setOpen] = useState(false)

    const [abrir, setAbrir] = useState(false)

    const classSidebar = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white max-w-[450px] text-gray-600'

    const classShowCart = open ? 'translate-none' : 'translate-x-full'

    const classMenu = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white max-w-[450px] text-gray-600'

    const classShowMenu = abrir ? 'translate-none' : 'translate-x-full'

    const total = cart.reduce((acc, products) => {
        const subTotal = products.precio * products.cantidad

        return acc + subTotal
    }, 0)

    return (
        <>
            <header className='w-full bg-orange-400 py-2 px-6'>
                <div className='container mx-auto flex justify-between items-center mb-2'>
                    <div className='max-w-full'>
                        <Link to='/' >
                            <img src= {logoJugo} alt="Logotipo" />
                        </Link>
                    </div>
                    <div className='flex items-center p-2'>
                        <button data-collapse-toggle="navbar" className='md:hidden hover:bg-gray-100 focus:outline-nonering-slate-300 
                            ring-2 bg-blue-600 p-2 inline-flex place-items-center gap-2 mr-8 rounded-lg' 
                            onClick={() => setAbrir(!abrir)}>
                            <b className='text-white font-bold'>Menú</b>
                            <LuMenuSquare size={30} className='text-white'/>
                        </button>
                        <div className={`${classMenu} ${classShowMenu}`}>
                            <button onClick={() => setAbrir(false)}>
                                <LiaWindowClose size={40} className='text-red-500'/>
                            </button>
                            <div className='w-[250px]'>
                                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                                    <li>
                                        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/'>Inicio</Link>
                                    </li>
                                    <li>
                                        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/order'>Pedidos</Link>
                                    </li>
                                    <li>
                                        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/politicas'>Políticas</Link>
                                    </li>
                                    <li>
                                        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/register'>Registro</Link>
                                    </li>
                                    <li>
                                        <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to='/login'>Gestión</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className= 'text-3xl relative inline-flex' onClick={() => setOpen(!open)}>
                            <BsCart4 size={40} />
                            <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold
                            text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2'>{cart.length}</div>
                        </button>
                        <div className={`${classSidebar} ${classShowCart}`}>
                            <div className='flex justify-between items-center'>
                                <h5 className='font-bold text-xl'>Pedidos Realizados</h5>
                                <button onClick={() => setOpen(false)}>
                                    <LiaWindowClose size={40} className='text-red-500'/>
                                </button>
                            </div>
                            {cart.length === 0 &&(
                                <div className='border my-2 rounded-lg p-2'>
                                    No hay productos
                                </div>
                            )}
                            {cart.length > 0 &&(
                                <>
                                    <div className='py-2'>
                                        <button className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 
                                        focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={cleanCart}>Limpiar Carrito</button>
                                    </div>
                                    <div className='border my-2 rounded-lg p-2'>
                                        <table className="w-full text-sm text-left text-gray-500 border-separate table-fixed p-2 bg-slate-200">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    <th className='px-4 py-3 w-[45%] border-gray-600 border rounded-lg text-center'>Descripción</th>
                                                    <th className='px-4 py-3 w-20 border-gray-600 border rounded-lg text-center'>Precio</th>
                                                    <th className='px-4 py-3 w-20 border-gray-600 border rounded-lg text-center'>Cant</th>
                                                    <th className='px-4 py-3'></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart && cart.map(products => {
                                                    return (
                                                        <tr className='bg-white border-b' key={products.id}>
                                                            <td className='px-4 py-2'>
                                                                {products.nombre}
                                                            </td>
                                                            <td className='px-4 py-2 text-right'>S/ 
                                                                {products.precio.toFixed(2)}
                                                            </td>
                                                            <td className="px-4 py-2 text-center">
                                                                {products.cantidad}
                                                            </td>
                                                            <td className="px-4 py-2 text-center">
                                                                <button onClick={() => removeFromCart(products.id)}>
                                                                    <BsTrash size={20} className='text-red-600 text-center' />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}
                            <div className='flex justify-between'>
                                <h2 className='font-extrabold'>TOTAL</h2>
                                <span className='font-extrabold'>
                                    S/ {total.toFixed(2)}
                                </span>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className='max-w-lg'>
                    <div className='hidden w-full md:block md:w-auto px-2' id='navbar'>
                        <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                            <li className='px-3'>
                                <Link className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' to='/'>Inicio</Link>
                            </li>
                            <li>
                                <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to='/order'>Pedidos</Link>
                            </li>
                            <li>
                                <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to='/politicas'>Políticas</Link>
                            </li>
                            <li>
                                <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to='/register'>
                                    <div className='flex items-center gap-2'>
                                    Registro
                                    <IoPersonCircle className='text-xl'/>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to='/login'>
                                    <div className='flex items-center gap-2'>
                                        Gestión
                                        <FaUserTie className='text-lg'/>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header