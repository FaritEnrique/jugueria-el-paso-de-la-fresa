import React, { useState } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import logoJugo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useCartStore } from '../store/cart';
import { LiaWindowClose } from "react-icons/lia";
import { BsTrash } from "react-icons/bs";


const Header = () => {
    const { cart } = useCartStore()

    const [open, setOpen] = useState(false)

    const classSidebar = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white max-w-[450px] text-gray-600'

    const classShowCart = open ? 'translate-none' : 'translate-x-full'

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
                    <button className="text-3xl relative" onClick={() => setOpen(!open)}>
                        <BsCart4 />
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold
                        text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2
                        dark:border-gray-900">{cart.length}</div>
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
                                <div className='border my-2 rounded-lg p-2'>
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th className='px-6 py-3'>Descripción</th>
                                                <th className='px-6 py-3'>Precio</th>
                                                <th className='px-6 py-3'>Cant</th>
                                                <th className='px-6 py-3'></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart && cart.map(products => 
                                                <tr class="bg-white border-b">
                                                    <td className="px-6 py-4">{products.nombre}</td>
                                                    <td className="px-6 py-4 text-right">S/ {products.precio}</td>
                                                    <td className="px-6 py-4 text-center">{products.cantidad}</td>
                                                    <td className="px-6 py-4">
                                                        <button><BsTrash className='text-red-500 text-center'/></button>
                                                    </td>
                                                </tr>
                                            )}
                                        
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            

                        {/* {JSON.stringify(cart)} */}
                    </div>                    
                </div>
            </header>
        </>
    )
}

export default Header