import React, { useState } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import swal from 'sweetalert';
import usePasoFresa from '../hooks/usePasoFresa'; 
import { useNavigate } from 'react-router-dom';

const ModalProductos = () => {

    const { crearCrema } = usePasoFresa()

    const navigate = useNavigate()

    const [form, setForm] = useState ({
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

    const handleSave = async (event) => {
        event.preventDefault();

        const respCrearCrema = await crearCrema(form)

        if (respCrearCrema.id) {
            setForm({
                codigo: '',
                name: '',
                priceSmall: '',
                priceMedium: '',
                priceBig: '',
                photo: ''
            })
                
            navigate('/admin')
        }

        console.log('Guardando datos ...')
        crearCrema
        swal({
            title: 'Buen Trabajo',
                text: 'El registro de un Nuevo Producto, se realizó con éxito',
                icon: 'success',
                buttons: 'Aceptar',
                timer: '5000'
        })

        setOpen(true)
    }

    const [open, setOpen] = useState(false);

    return (
        <>
            <button className='bg-blue-400 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm 
            font-bold rounded-xl' onClick={() => setOpen(true)}>
                Agregar Crema
            </button>
            
            {open &&(
                <>
                    <div className= 'w-full fixed inset-0 rounded-xl p-4 backdrop-blur-sm justify-self-center bg-cyan-100 sm:w-3/4 md:w-3/4 lg:w-1/2'>
                        <button className='flex px-3 mt-2 ring-slate-300 ring-2 bg-red-500 items-center justify-self-end gap-2 
                            rounded-xl' onClick={()=>setOpen(false)}>
                            <p>
                                Cerrar
                            </p>
                            <FaRegWindowClose />
                        </button>
                        <div className='w-full py-4 flex justify-center'>
                            <div className='w-full bg-slate-400 py-4 px-6 rounded-xl'>
                                <div className='bg-white py-2'>
                                    <h2 className='mb-2 font-bold text-center'>Registre Nueva Crema</h2>
                                    <p className='px-4 text-justify'>Ingrese todos los campos para un registro satisfatoriio</p>
                                </div>
                                <form onSubmit={handleSave} className='mt-4 p-2 w-full bg-black max-h-[440px] rounded-xl overflow-y-scroll'>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>Codigo</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="text" 
                                            placeholder='Ejem. Para cremas 1.1, 1.2 ...' 
                                            name='codigo'
                                            value={form.codigo}
                                            required
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>Nombre</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="text" 
                                            placeholder='Ejem. Crema de ...' 
                                            name='name'
                                            value={form.name}
                                            required
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>Precio Pequeño</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="number" 
                                            placeholder='Ingrese Precio (2 decimales)' 
                                            name='priceSmall'
                                            value={form.priceSmall}
                                            required
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>Precio Mediano</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="number" 
                                            placeholder='Ingrese Precio (2 decimales)' 
                                            name='priceMedium'
                                            value={form.priceMedium}
                                            required
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>Precio Grande</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="number" 
                                            placeholder='Ingrese Precio (2 decimales)' 
                                            name='priceBig'
                                            value={form.priceBig}
                                            required
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>Foto</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="url" 
                                            placeholder='Ingrese url de Foto' 
                                            name='photo'
                                            value={form.photo}
                                            required
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <div className='flex justify-center'>
                                        <input type="submit" value="Guardar" className='bg-blue-500 border border-black hover:bg-red-200 ring-gray-400 ring-2 px-4 py-2 rounded-xl m-4' />
                                    </div>
                                </form>
                                {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ModalProductos