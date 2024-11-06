import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaRegWindowClose } from "react-icons/fa";
import swal from 'sweetalert';


const ModalProductos = () => {

    const { register, formState: { errors } , handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
        swal({
            title: 'Buen Trabajo',
            text: 'El registro de un Nuevo Producto, se realizó con éxito',
            icon: 'success',
            buttons: 'Aceptar',
            timer: '5000'
        })
    }

    const [open, setOpen] = useState(false);

    return (
        <>
            <button className='bg-blue-400 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm 
            font-bold rounded-xl' onClick={() => setOpen(true)}>
                Agregar Productos
            </button>
            
            {open &&(
                <>
                    <div className= 'w-1/2 fixed inset-0 rounded-xl p-4 backdrop-blur-sm justify-self-center bg-cyan-100'>
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
                                    <h2 className='mb-2 font-bold text-center'>Registre Nuevo Producto</h2>
                                    <p className='px-4 text-justify'>Ingrese todos los campos para un registro satisfatoriio</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className='mt-4 p-2 w-full bg-black rounded-xl'>
                                    <label className='flex flex-col gap-2 px-4 text-white' htmlFor="">
                                        <span className='font-bold'>id</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="number" 
                                            placeholder='Ingresar N° Id' 
                                            name='id'
                                            {...register('id', {required: true})}
                                        />
                                        {errors.id?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                                    </label>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>Nombre</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="text" 
                                            placeholder='Ejem. Helado de ...' 
                                            name='nombre'
                                            {...register('nombre', {required: true})}
                                        />
                                        {errors.nombre?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                                    </label>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>precio</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="number" 
                                            placeholder='Ingrese Precio (2 decimales)' 
                                            name='precio'
                                            {...register('precio', {required: true})}
                                        />
                                        {errors.precio?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                                    </label>
                                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                                        <span className='font-bold'>Foto</span>
                                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                            type="url" 
                                            placeholder='Ingrese url de Foto' 
                                            name='foto'
                                            {...register('foto', {required: true})}
                                        />
                                        {errors.foto?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                                    </label>
                                        <div className='flex justify-center'>
                                            <input type="submit" className='bg-blue-500 border border-black hover:bg-red-200 ring-gray-400 ring-2 px-4 py-2 rounded-xl m-4' />
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ModalProductos