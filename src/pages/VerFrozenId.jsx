import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePasoFresa } from '../hooks/usePasoFresa'

const VerFrozenId = () => {

    const { id } = useParams()

    const [ frozen, setFrozen ] = useState({
        codigo: '',
        name: '',
        priceSmall: '',
        priceMedium: '',
        priceBig: '',
        photo: ''
    });

    const { obtenerFrozen } = usePasoFresa()

    useEffect(() => {
        obtenerFrozen(id)
            .then(data => {
                console.log(data);
                setFrozen(data); // Se establece el estado con los datos obtenidos
            })
            .catch(error => {
                console.error("Error al obtener el Frozen:", error);
            });
    }, [id]);

    return (
        <section className='mx-auto my-4 flex justify-center lg:my-6'>
                <div className='items-stretch bg-green-100 p-2 sm:flex md:max-w-[1200px] gap-2'>
                    <div className='flex items-center border-2 border-black rounded-xl'>
                        <img className='w-full lg:min-w-[600px] rounded-xl' src= {frozen.photo} alt="Foto Producto" />
                    </div>
                    <div className='bg-green-100 mx-auto md:p-6'>
                        <div className='px-6 text-center'>
                            <span className='font-bold mb-2'>Codigo:</span>
                            <h2 className='text-center font-extrabold text-2xl mb-2'>{frozen.codigo}</h2>
                            <span className='font-bold mb-2'>Nombre:</span>
                            <h2 className='text-center font-extrabold text-2xl mb-2'>{frozen.name}</h2>
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
                                        <tr >
                                            <td className='p-2 border-2 border-slate-700 text-center'>{parseFloat(frozen.priceSmall).toFixed(2)}</td>
                                            <td className='p-2 border-2 border-slate-700 text-center'>{parseFloat(frozen.priceMedium).toFixed(2)}</td>
                                            <td className='p-2 border-2 border-slate-700 text-center'>{parseFloat(frozen.priceBig).toFixed(2)}</td>
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

export default VerFrozenId