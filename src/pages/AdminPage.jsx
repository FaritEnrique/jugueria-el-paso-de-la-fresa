import React, { useState, useEffect } from 'react'
import { fetchUsuarios } from '../services/usuarios'
import { FaPencil } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";
import usePasoFresa from "../hooks/usePasoFresa";
import ModalUsuarios from '../components/ModalUsuarios';
import ModalCrearCrema from '../components/ModalCrearCrema';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { toast } from 'sonner';

const AdminPage = () => {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetchUsuarios()
        .then(data => setUsuarios(data))
  }, [])

  const { fetchProductCrema, removeCrema } = usePasoFresa()

  const [porductCrema, setProductCrema] = useState([])
  
  useEffect(() => {
    fetchProductCrema()
      .then(data => setProductCrema(data))
  }, [])


  const handleRemoveCrema = (id) => {
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
        removeCrema(id)
          .then(() => {
            fetchProductCrema()
              .then(data => setProductCrema(data))
            toast.success('El producto ha sido eliminado')
          })
      }
    });
  }

  const Actualizar = () => {
    fetchProductCrema()
      .then(data => setProductCrema(data))
  }

  return (
    <>
        <section className='my-4 mx-6 py-4'>
            <h1 className='font-bold text-center text-3xl py-2 w-full bg-slate-100 border-black rounded-xl'>
                GESTIÓN DE USUARIOS
            </h1>
            <div className='my-2 py-4 border border-black rounded-xl bg-slate-400'>
              <div className='bg-slate-400'>
                <h2 className='font-bold text-center bg-white text-2xl'>
                  Usuarios Existentes
                </h2>
                <div className='flex justify-around'>
                  <ModalUsuarios />
                  <button className='bg-green-200 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm 
                  font-bold rounded-xl'>
                    Actualizar
                  </button>
                </div>
                
                <div className='py-4 px-4 w-full bg-black rounded-xl'>
                  <table className='w-full bg-white'>
                    <thead>
                      <tr className=''>
                        <th className='w-10 border border-black'>Id</th>
                        <th className='w-40 border border-black'>Nombres</th>
                        <th className='w-44 border border-black'>Apellidos</th>
                        <th className='w-16 border border-black'>Editar</th>
                        <th className='w-16 border border-black'>Borrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.map(usuarios => {
                        return (
                          <tr key={usuarios.id}>
                            <td className='border border-black px-2 text-center'>{usuarios.id}</td>
                            <td className='border border-black px-2'>{usuarios.nombres}</td>
                            <td className='border border-black px-2'>{usuarios.apellidos}</td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <Link>
                                <button className='px-3 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                  <FaPencil size={16} className='text-blue-500 text-center' />
                                </button>
                              </Link>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-3 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                <BsTrash3 size={16} className='text-red-500 text-center'/>
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </section>
        <section className='my-4 mx-6 py-4'>
            <h1 className='font-bold text-center text-3xl py-2 w-full bg-slate-100 border-black rounded-xl'>
                GESTIÓN DE PRODUCTOS
            </h1>
            <div className='my-4 py-4 border border-black rounded-xl bg-slate-400'>
              <div className='px-4 bg-slate-400-500'>
                <h2 className='font-bold text-center bg-white text-2xl'>
                  Productos Existentes
                </h2>
                <div className='flex justify-between'>
                  <ModalCrearCrema />
                  <button className='bg-green-200 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm 
                  font-bold rounded-xl' onClick={Actualizar}>
                    Actualizar
                  </button>
                </div>
                
                <div className='py-4 px-4 w-full bg-white rounded-xl'>
                  <table className='w-full'>
                    <thead>
                      <tr className=''>
                        <th className='w-10 border border-black'>Cod</th>
                        <th className='border border-black'>Nombre</th>
                        {/* <th className='border border-black'>Precio</th> */}
                        <th className='hidden border border-black lg:block'>Foto</th>
                        <th className='border border-black'>Editar</th>
                        <th className='border border-black'>Borrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {porductCrema.map(productCrema => {
                        return (
                          <tr key = {productCrema.docID}>
                            <td className='border border-black px-2 text-center'>{productCrema.codigo}</td>
                            <td className='border border-black px-2'>{productCrema.name}</td>
                            {/* <td className='border border-black px-2 text-center'>S/ {products.precio.toFixed(2)}</td> */}
                            <td className='hidden border border-black py-1 lg:block'>
                              <img className='rounded-lg max-w-20 justify-self-center border border-black' src={productCrema.photo ?? 'https://placehold.co/80x80'} alt="" />
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-3 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                <Link to={`/edit/crema/${productCrema.docId}`} >
                                  <FaPencil size={16} className='text-blue-500 text-center' />
                                </Link>
                              </button>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button onClick={() => handleRemoveCrema(productCrema.docId)} className='px-3 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                <BsTrash3 size={16} className='text-red-500 text-center'/>
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default AdminPage