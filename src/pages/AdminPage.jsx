import React, { useState, useEffect } from 'react'
import { fetchUsuarios } from '../services/usuarios'
import { FaPencil } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";
import usePasoFresa from "../hooks/usePasoFresa";
import ModalUsuarios from '../components/ModalUsuarios';
import ModalCrearCrema from '../components/ModalCrearCrema';
import ModalCrearFrozen from '../components/ModalCrearFrozen';
import ModalCrearFresa from '../components/ModalCrearFresa';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { toast } from 'sonner';

const AdminPage = () => {

  const navigate = useNavigate()

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetchUsuarios()
        .then(data => setUsuarios(data))
  }, [])

  const { fetchProductCrema, removeCrema } = usePasoFresa()

  const [productCrema, setProductCrema] = useState([])
  
  useEffect(() => {
    fetchProductCrema()
      .then(data => setProductCrema(data))
  }, [])

  const handleEditCrema = (id) => {
    Swal.fire({
      title: "¿Está Seguro de Hacer Modificaciones?",
      text: "No podrá revertir las Modificaciones",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, deseo Editar"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/edit/crema/${id}`)
      }
    });
  }

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

  const actualizarCrema = () => {
    fetchProductCrema()
      .then(data => setProductCrema(data))
  }

  const { fetchProductFrozen, removeFrozen } = usePasoFresa()

  const [productFrozen, setProductFrozen] = useState([])
  
  useEffect(() => {
    fetchProductFrozen()
      .then(data => setProductFrozen(data))
  }, [])

  const handleEditFrozen = (id) => {
    Swal.fire({
      title: "¿Está Seguro de Hacer Modificaciones?",
      text: "No podrá revertir las Modificaciones",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, deseo Editar"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/edit/frozen/${id}`)
      }
    });
  }

  const handleRemoveFrozen = (id) => {
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
        removeFrozen(id)
          .then(() => {
            fetchProductFrozen()
              .then(data => setProductFrozen(data))
            toast.success('El producto ha sido eliminado')
          })
      }
    });
  }

  const ActualizarFrozen = () => {
    fetchProductFrozen()
      .then(data => setProductFrozen(data))
  }

  const { fetchProductFresa, removeFresa } = usePasoFresa()

  const [productFresa, setProductFresa] = useState([])
  
  useEffect(() => {
    fetchProductFresa()
      .then(data => setProductFresa(data))
  }, [])

  const handleEditFresa = (id) => {
    Swal.fire({
      title: "¿Está Seguro de Hacer Modificaciones?",
      text: "No podrá revertir las Modificaciones",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, deseo Editar"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/edit/fresa/${id}`)
      }
    });
  }

  const handleRemoveFresa = (id) => {
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
        removeFresa(id)
          .then(() => {
            fetchProductFresa()
              .then(data => setProductFresa(data))
            toast.success('El producto ha sido eliminado')
          })
      }
    });
  }

  const actualizarFresa = () => {
    fetchProductFresa()
      .then(data => setProductFresa(data))
  }

  return (
    <>
        <section className='my-4 mx-2 py-4'>
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
                  <button className='bg-green-200 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-2 text-sm 
                  font-bold rounded-xl'>
                    Actualizar
                  </button>
                </div>
                
                <div className='py-4 px-2 w-full bg-black rounded-xl'>
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
                                <button className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                  <FaPencil size={16} className='text-blue-500 text-center' />
                                </button>
                              </Link>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
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
        <section className='mt-4 mx-6 py-4'>
            <h1 className='font-bold text-center text-3xl py-2 w-full bg-slate-100 border-black rounded-xl'>
                GESTIÓN DE PRODUCTOS
            </h1>
            <div className='my-4 py-4 border border-black rounded-xl bg-slate-400'>
              <div className='px-2 bg-slate-400-500'>
                <h2 className='font-bold text-center bg-white text-2xl'>
                  Productos Existentes
                </h2>
                <div className='flex justify-between'>
                  <ModalCrearCrema />
                  <button className='bg-green-200 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm 
                  font-bold rounded-xl' onClick={actualizarCrema}>
                    Actualizar
                  </button>
                </div>
                
                <div className='py-4 px-2 w-full bg-white rounded-xl'>
                  <table className='w-full'>
                    <thead>
                      <tr className=''>
                        <th className='w-10 border border-black'>Cod</th>
                        <th className='border w-[2000px] border-black'>Nombre</th>
                        <th className='hidden border w-24 border-black lg:block'>Foto</th>
                        <th className='border border-black'>Ver</th>
                        <th className='border border-black'>Editar</th>
                        <th className='border border-black'>Borrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productCrema.map(productCrema => {
                        return (
                          <tr key = {productCrema.docId}>
                            <td className='border border-black px-2 text-center'>{productCrema.codigo}</td>
                            <td className='border w-[2000px] border-black px-2'>{productCrema.name}</td>
                            <td className='hidden w-24 border border-black py-1 lg:block'>
                              <img className='rounded-lg max-w-20 justify-self-center border border-black' src={productCrema.photo ?? 'https://placehold.co/80x80'} alt="" />
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                <Link to={`/ver/crema/${productCrema.docId}`} >
                                  <FaEye size={20} className='text-blue-500 text-center' />
                                </Link>
                              </button>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300' onClick={() => handleEditCrema(productCrema.docId)}>
                                  <FaPencil size={16} className='text-blue-500 text-center' />
                              </button>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button onClick={() => handleRemoveCrema(productCrema.docId)} className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                <BsTrash3 size={16} className='text-red-500 text-center'/>
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className='flex justify-between'>
                  <ModalCrearFrozen />
                  <button className='bg-green-200 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm 
                  font-bold rounded-xl' onClick={ActualizarFrozen}>
                    Actualizar
                  </button>
                </div>
                <div className='py-4 px-2 w-full bg-white rounded-xl'>
                  <table className='w-full'>
                    <thead>
                      <tr className=''>
                        <th className='w-10 border border-black'>Cod</th>
                        <th className='border w-[2000px] border-black'>Nombre</th>
                        <th className='hidden w-24 border border-black lg:block'>Foto</th>
                        <th className='border border-black'>Ver</th>
                        <th className='border border-black'>Editar</th>
                        <th className='border border-black'>Borrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productFrozen.map(productFrozen => {
                        return (
                          <tr key = {productFrozen.docId}>
                            <td className='border border-black px-2 text-center'>{productFrozen.codigo}</td>
                            <td className='border w-[2000px] border-black px-2'>{productFrozen.name}</td>
                            <td className='hidden border w-24 border-black py-1 lg:block'>
                              <img className='rounded-lg max-w-20 justify-self-center border border-black' src={productFrozen.photo ?? 'https://placehold.co/80x80'} alt="" />
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                <Link to={`/ver/frozen/${productFrozen.docId}`} >
                                  <FaEye size={20} className='text-blue-500 text-center' />
                                </Link>
                              </button>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300' onClick={() => handleEditFrozen(productFrozen.docId)}>
                                  <FaPencil size={16} className='text-blue-500 text-center' />
                              </button>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button onClick={() => handleRemoveFrozen(productFrozen.docId)} className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                <BsTrash3 size={16} className='text-red-500 text-center'/>
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className='flex justify-between'>
                  <ModalCrearFresa />
                  <button className='bg-green-200 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm 
                  font-bold rounded-xl' onClick={actualizarFresa}>
                    Actualizar
                  </button>
                </div>
                <div className='py-4 px-2 w-full bg-white rounded-xl'>
                  <table className='w-full'>
                    <thead>
                      <tr className=''>
                        <th className='w-10 border border-black'>Cod</th>
                        <th className='border w-[2000px] border-black'>Nombre</th>
                        <th className='hidden border w-24 border-black lg:block'>Foto</th>
                        <th className='border border-black'>Ver</th>
                        <th className='border border-black'>Editar</th>
                        <th className='border border-black'>Borrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productFresa.map(productFresa => {
                        return (
                          <tr key = {productFresa.docId}>
                            <td className='border border-black px-2 text-center'>{productFresa.codigo}</td>
                            <td className='border w-[2000px] border-black px-2'>{productFresa.name}</td>
                            <td className='hidden w-24 border border-black py-1 lg:block'>
                              <img className='rounded-lg max-w-20 justify-self-center border border-black' src={productFresa.photo ?? 'https://placehold.co/80x80'} alt="Foto Producto" />
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
                                <Link to={`/ver/fresa/${productFresa.docId}`} >
                                  <FaEye size={20} className='text-blue-500 text-center' />
                                </Link>
                              </button>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300' onClick={() => handleEditFresa(productFresa.docId)}>
                                  <FaPencil size={16} className='text-blue-500 text-center' />
                              </button>
                            </td>
                            <td className='border border-black p-1 w-16 text-center'>
                              <button onClick={() => handleRemoveFresa(productFresa.docId)} className='px-1 py-2 border ring-blue-300 ring-2 rounded-xl mx-2 bg-slate-300'>
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
        </section >
        <section className='mb-6 mx-6 border-2 border-black rounded-xl bg-white'>
          <div className='p-6 bg-slate-500 flex justify-between items-center'>
            <h2 className='text-center font-extrabold text-white text-2xl'>Gestión de Clientes</h2>
            <Link to={ '/gestionCliente' }>
              <button className='ring-2 ring-slate-200 bg-blue-500 px-4 py-2 text-white font-extrabold rounded-xl'>
                Acceder a Clientes
              </button>
            </Link>
            
          </div>
        </section>
    </>
  )
}

export default AdminPage