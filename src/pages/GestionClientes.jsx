import React, { useState, useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TfiTrash } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import usePasoFresa from '../hooks/usePasoFresa'
import { toast } from 'sonner';

const GestionClientes = () => {

    const { fetchCliente, removeCliente } = usePasoFresa()

    const [cliente, setCliente] = useState([])

    const [buscar, setBuscar] = useState('')

    useEffect(() => {
        fetchCliente()
            .then(data => setCliente(data))
    }, [])

    const handleRemoveCliente = (id) => {
        Swal.fire({
            title: "¿Estás Seguro?",
            text: "¡No lo podrás revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¿Sí, Borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeCliente(id)
                    .then(() => {
                        setCliente(cliente.filter(c => c.docId !== id));
                        toast.success('El cliente ha sido eliminado')
                    })
                    .catch(() => {
                        toast.error('Hubo un error al eliminar el cliente')
                    })
            }
        });
    }

    return (

        <section className='m-6 bg-black p-4 rounded-xl'>
            <h1 className='font-extrabold py-4 bg-white rounded-xl text-center text-3xl'>CLIENTES REGISTRADOS</h1>
            <br />
            <div className='py-4 px-1 bg-white md:px-4'>
                <table className='w-full'>
                    <thead>
                        <tr className=''>
                            <th className='hidden py-2 px-1 text-sm ring-2 ring-blue-300 md:p-2 w-[90px] h-full md:block md:text-base'>DNI</th>
                            <th className='py-2 px-1 text-sm ring-2 ring-blue-300 w-[1500px] md:p-2 md:text-base'>Nombre</th>
                            <th className='py-2 px-1 text-sm ring-2 ring-blue-300 w-24 md:p-2 md:text-base'>Celular</th>
                            <th className='py-2 px-1 text-sm ring-2 ring-blue-300 md:p-2 md:text-base'>Ver</th>
                            <th className='text-sm ring-2 ring-blue-300 p-2 md:text-base'>Editar</th>
                            <th className='text-sm ring-2 ring-blue-300 p-2 md:text-base'>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cliente.map(cliente => {
                            return (
                                <tr key={cliente.id} className=''>
                                    <td className='hidden py-0 px-1 text-sm ring-2 ring-blue-300 md:p-2 w-[90px] text-justify md:block md:text-base'>
                                        <div className='w-full h-9 flex items-center'>
                                            <p className='text-sm md:text-base'>{cliente.dni}</p>
                                        </div>
                                    </td>
                                    <td className='py-2 px-1 text-sm ring-2 ring-blue-300 md:p-2 text-justify md:text-base'>{cliente.name}</td>
                                    <td className='py-2 px-1 text-sm ring-2 ring-blue-300 md:p-2 w-24 text-center md:text-base'>{cliente.celular}</td>
                                    <td className='p-0 ring-2 ring-blue-300 w-20 text-center md:p-2 md:text-base'>
                                        <Link to = {`/ver/cliente/${cliente.docId}`}>
                                            <div className='p-0 flex justify-center md:p-2 bg-cyan-300 text-center rounded-lg rin-2 ring-gray-400'>
                                                <FaEye size={20} />
                                            </div>
                                        </Link>
                                    </td>
                                    <td className='p-0 ring-2 ring-blue-300 w-20 text-center md:p-2 md:text-base'>
                                        <Link to = {`/edit/cliente/${cliente.docId}`}>
                                            <div className='p-0 flex justify-center bg-cyan-300 md:p-2 text-center rounded-lg rin-2 ring-gray-400'>
                                                <CiEdit size={20} />
                                            </div>
                                        </Link>                                        
                                    </td>
                                    <td className='p-0 ring-2 ring-blue-300 w-20 text-center md:p-2 md:text-base'>
                                        <div onClick={() => handleRemoveCliente(cliente.docId)} className='p-0 flex justify-center md:p-2 bg-cyan-300 rounded-lg rin-2 ring-gray-400'>
                                            <TfiTrash className='text-red-600' size={20} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br />
                <div className='flex flex-wrap gap-4'>
                    <Link to = {`/register`} >
                        <button className='bg-blue-700 ring-2 ring-slate-400 text-white text-center px-4 py-2 rounded-lg'>
                            Nuevo Cliente
                        </button>
                    </Link>
                    <Link to = {`/admin`}>
                        <button className='bg-blue-700 ring-2 ring-slate-400 text-white text-center px-4 py-2 rounded-lg'>
                            Gestión
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default GestionClientes