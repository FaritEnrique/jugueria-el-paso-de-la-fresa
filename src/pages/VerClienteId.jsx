import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { usePasoFresa } from '../hooks/usePasoFresa'

const VerClienteId = () => {

    const { id } = useParams()

    const [ cliente, setCliente ] = useState({
        dni: '',
        name: '',
        direccion: '',
        celular: '',
        correo: ''
    });

    const { obtenerCliente } = usePasoFresa()

    useEffect(() => {
        obtenerCliente(id)
            .then(data => {
                console.log(data);
                setCliente(data); // Se establece el estado con los datos obtenidos
            })
            .catch(error => {
                console.error("Error al obtener el Frozen:", error);
            });
    }, [id]);

    return (
        <div className='m-4 flex justify-center'>
            <div className='container bg-white ring-4 ring-slate-500 p-4 lg:w-1/2 md:w-7/12'>
                <div className='w-full p-4'>
                    <span className='font-bold'>DNI</span>
                    <div className='border-2 border-indigo-400 p-2 font-bold rounded-xl text-xl'>
                        { cliente.dni }
                    </div>
                </div>
                <br />
                <div className='w-full p-4'>
                    <span className='font-bold'>NOMBRE COMPLETO</span>
                    <div className='border-2 border-indigo-400 p-2 font-bold rounded-xl text-xl'>
                        { cliente.name }
                    </div>
                </div>
                <br />
                <div className='w-full p-4'>
                    <span className='font-bold'>DIRECCIÓN</span>
                    <div className='border-2 border-indigo-400 p-2 font-bold rounded-xl text-xl'>
                        { cliente.direccion }
                    </div>
                </div>
                <br />
                <div className='w-full p-4'>
                    <span className='font-bold'>CELULAR</span>
                    <div className='border-2 border-indigo-400 p-2 font-bold rounded-xl text-xl'>
                        { cliente.celular }
                    </div>
                </div>
                <br />
                <div className='w-full p-4'>
                    <span className='font-bold'>CORREO ELECTRÓNICO</span>
                    <div className='border-2 border-indigo-400 p-2 font-bold rounded-xl text-xl'>
                        { cliente.correo }
                    </div>
                </div>
                <br />
                <div className='flex justify-center'>
                    <Link to={`/gestionCliente`}>
                        <button className='bg-blue-700 ring-2 font-extrabold ring-slate-400 text-white text-center px-4 py-2 rounded-lg mb-4'>
                            Retornar
                        </button>
                    </Link>
                </div>
        </div>

    </div>
  )
}

export default VerClienteId