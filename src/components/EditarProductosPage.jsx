import React, { useState, useEffect } from 'react'
import { editarProducto, obtenerProducto } from '../services/products';
import { useParams } from 'react-router-dom';


const EditarProductos = () => {

    const { id } = useParams()

    useEffect(() => {
        obtenerProducto(id)
            .then(data => {
                console.log(data)
                setForm(data)
            })
    }, [id])

    const [form, setForm] = useState ({
        nombre: '',
        precio: '',
        foto: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm ({ ...form, [name]: value })
    }

    const handleSave = (event) => {
        event.preventDefault();
        editarProducto (form, id)
            .then(data => {
                console.log(data)
                //Redirección a la lista de Productos
            })
    }


    return (
        <div className='flex justify-center mx-auto'>
            <div className='w-full bg-slate-400 py-4 px-2 mx-auto rounded-xl my-4 sm:w-3/4 md:w-3/4 md:px-6 lg:w-1/2 lg:px-6'>
                <div className='bg-white py-2'>
                    <h2 className='mb-2 font-bold text-center'>Editar Producto</h2>
                </div>
                <form onSubmit={handleSave} className='mt-4 p-2 w-full bg-black rounded-xl'>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Nombre</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                            type="text" 
                            placeholder='Ejem. Helado de ...' 
                            name='nombre'
                            required
                            onChange={handleChange}
                            value={form.nombre}
                        />
                    </label>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>precio</span>
                            <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                                type="number" 
                                placeholder='Ingrese Precio (2 decimales)' 
                                name='precio'
                                required
                                onChange={handleChange}
                                value={form.precio}
                            />
                    </label>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Foto</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                            type="url" 
                            placeholder='Ingrese url de Foto' 
                            name='foto'
                            required
                            onChange={handleChange}
                            value={form.foto}
                        />
                    </label>
                    <div className='flex justify-center'>
                        <input type="submit" value="Guardar" className='bg-blue-500 border border-black hover:bg-red-200 ring-gray-400 ring-2 px-4 py-2 rounded-xl m-4' />
                    </div>
                </form>
                {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
            </div>
        </div>
    )
}

export default EditarProductos