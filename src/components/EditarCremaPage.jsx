import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../services/firebase';
import usePasoFresa from '../hooks/usePasoFresa';


const EditarCremaPage = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const { obtenerCrema } = usePasoFresa()

    const { editarCrema } = usePasoFresa()

    useEffect(() => {
        obtenerCrema(id)
            .then(crema => {
                console.log(crema)
                setCrema(crema)
            })
    }, [id])

    const [crema, setCrema] = useState ({
        codigo: '',
        name: '',
        priceSmall: '',
        priceMedium: '',
        priceBig: '',
        photo: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm ({ ...form, [name]: value })
    }

    const handleSave = (event) => {
        event.preventDefault();
        editarCrema (form, id)
            .then(data => {
                console.log(data)
                navigate('/admin')
            })
    }

    return (
        <div className='flex justify-center mx-auto'>
            <div className='w-full bg-slate-400 py-4 px-2 mx-auto rounded-xl my-4 sm:w-3/4 md:w-3/4 md:px-6 lg:w-1/2 lg:px-6'>
                <div className='bg-white py-2'>
                    <h2 className='mb-2 font-extrabold text-2xl text-center'>EDITAR CREMA COD: {id}</h2>
                </div>
                
                    {/* {productCrema.map (productCrema => {
                        return ( */}
                        <form onSubmit={handleSave} className='mt-4 p-2 w-full bg-black rounded-xl'>
                            <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                <span className='font-bold'>Codigo</span>
                                <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                    type="text" 
                                    placeholder=''
                                    name='codigo'
                                    required
                                    onChange={handleChange}
                                    value={crema.codigo}
                                />
                            </label>
                            <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                <span className='font-bold'>Nombre</span>
                                <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                    type="text"
                                    name='name'
                                    required
                                    onChange={handleChange}
                                    value={crema.name}
                                />
                            </label>
                            <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                <span className='font-bold'>Precio Pequeño</span>
                                <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                    type="number"
                                    name='priceSmall'
                                    required
                                    onChange={handleChange}
                                    value={crema.priceSmall}
                                />
                            </label>
                            <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                <span className='font-bold'>Precio Mediano</span>
                                <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                    type="number" 
                                    name='priceMedium'
                                    required
                                    onChange={handleChange}
                                    value={crema.priceMedium}
                                />
                            </label>
                            <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                <span className='font-bold'>Precio Grande</span>
                                <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                    type="number"
                                    name='priceBig'
                                    required
                                    onChange={handleChange}
                                    value={crema.priceBig}
                                />
                            </label>
                            <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                <span className='font-bold'>Foto</span>
                                <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                    type="url"
                                    name='photo'
                                    required
                                    onChange={handleChange}
                                    value={crema.photo}
                                />
                            </label>
                            <div className='flex justify-center'>
                            <input type="submit" value="Guardar" className='bg-blue-500 border border-black hover:bg-red-200 ring-gray-400 ring-2 px-4 py-2 rounded-xl m-4' />
                            </div>
                        </form>
                        {/* )
                    })} */}
                
                {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
            </div>
        </div>
    )
}

export default EditarCremaPage