import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import usePasoFresa from '../hooks/usePasoFresa';
import Swal from 'sweetalert2';


const EditarClientePage = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const { obtenerCliente, editarCliente } = usePasoFresa()

    const [ form, setForm ] = useState({
        dni: '',
        name: '',
        direccion: '',
        celular: '',
        correo: ''
    })

    useEffect(() => {
        obtenerCliente(id)
            .then(data => 
                //console.log(data)
                setForm(data)
            )
            .catch(error => console.error('Error obteniendo Cliente: ', error))
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm ({ ...form, [name]: value })
    }

    const handleSave = async (event) => {
        event.preventDefault();

        try {
            const respEditarCliente = await editarCliente(form, id);
            console.log(respEditarCliente);
            if (respEditarCliente && respEditarCliente.success) {
                setForm({
                    dni: '',
                    name: '',
                    direccion: '',
                    celular: '',
                    correo: ''
                });
                
                navigate('/gestionCliente');

                Swal.fire({
                    title: 'Buen Trabajo',
                    text: 'La Modificación de los Datos del Cliente, se realizó con éxito',
                    icon: 'success',
                    buttons: 'Aceptar',
                    timer: '5000'
                })
            }
        } catch (error) {
            console.error("Error al editar Cliente:", error)
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al editar los datos',
                icon: 'error',
                timer: 3000
            })
        }

    }

    return (
        <div className='flex justify-center mx-auto'>
            <div className='w-full bg-slate-400 py-4 px-2 mx-auto rounded-xl my-4 sm:w-3/4 md:w-3/4 md:px-6 lg:w-1/2 lg:px-6'>
                <div className='bg-white py-2'>
                    <h2 className='mb-2 font-extrabold text-2xl text-center'>EDITAR CLIENTE ID: {id}</h2>
                </div>
                <form onSubmit={handleSave} className='mt-4 p-2 w-full bg-black rounded-xl'>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>DNI N°</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                            type="text"
                            name='dni'
                            required
                            onChange={handleChange}
                            value={form.dni}
                        />
                    </label>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Nombre Completo</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                            type="text"
                            name='name'
                            required
                            onChange={handleChange}
                            value={form.name}
                        />
                    </label>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Dirección</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                            type="text"
                            name='direccion'
                            required
                            onChange={handleChange}
                            value={form.direccion}
                        />
                    </label>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Celular</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                            type="text"
                            name='celular'
                            required
                            onChange={handleChange}
                            value={form.celular}
                        />
                    </label>
                    <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Correo</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                            type="text"
                            name='correo'
                            required
                            onChange={handleChange}
                            value={form.correo}
                        />
                    </label>
                        <div className='flex justify-center'>
                            <input type="submit" value="Guardar" className='bg-blue-500 border border-black hover:bg-red-200 ring-gray-400 ring-2 px-4 py-2 rounded-xl m-4' />
                        </div>
                </form>
            </div>
        </div>
    )
}

export default EditarClientePage