import React from 'react'
import { Link } from 'react-router-dom'


const VerCremaId = () => {
  return (
    <section className='mx-auto my-4 flex justify-center lg:my-6'>
        <div className='items-stretch bg-green-100 p-2 sm:flex md:max-w-[1200px] gap-2'>
            <div className='flex items-center'>
                <img className='w-full lg:min-w-[600px] rounded-xl' src="https://placehold.co/400x400" alt="" />
            </div>
            <div className='bg-green-100 mx-auto md:p-6'>
                <div className='p-6 text-center'>
                    <span className='font-bold'>Nombre: </span>
                    <h2 className='text-center font-extrabold text-2xl'>CREMA VOLTEADA</h2>
                </div>
                <div className=''>
                    <h3 className='font-bold text-center'>PRECIOS</h3>
                    <p className='font-bold text-center'>Según Tamaño (En S/)</p>
                    <div className='w-[400px] mx-auto p-1 border-2 border-blue-400 rounded-xl bg-white'>
                        <table className='w-96 mx-auto border-4 border-black-400'>
                            <thead className=''>
                                <tr className=''>
                                    <th className='p-2 border-2 border-slate-700'>Pequeño</th>
                                    <th className='p-2 border-2 border-slate-700'>Mediano</th>
                                    <th className='p-2 border-2 border-slate-700'>Grande</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2 border-2 border-slate-700 text-center'>8.00</td>
                                    <td className='p-2 border-2 border-slate-700 text-center'>10.00</td>
                                    <td className='p-2 border-2 border-slate-700 text-center'>15.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mb-4'>
                        <Link className='flex justify-center' to='/admin'>
                            <button className='mt-4 bg-blue-600 ring-4 ring-slate-400 font-bold rounded-lg text-white p-2 hover:bg-blue-300'>Volver a Gestión</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default VerCremaId