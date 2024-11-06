import React, { useState, useEffect } from 'react'
import { fetchUsuarios } from '../services/usuarios'
import { FaPencil } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { fetchProducts } from '../services/products';
import ModalUsuarios from '../components/ModalUsuarios';
import ModalProductos from '../components/ModalProductos';

const AdminPage = () => {

  const { register, formState: { errors } , handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    
    console.log(JSON.stringify(data));
  }

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetchUsuarios()
        .then(data => setUsuarios(data))
  }, [])

  const [products, setProducts] = useState ([])

  useEffect(() => {
    fetchProducts()
        .then(data => setProducts(data))
  }, [])

  return (
    <body>
        <section className='my-4 mx-6 py-4'>
            <h1 className='font-bold text-center text-3xl py-2 w-full bg-slate-100 border-black rounded-xl'>
                GESTIÓN DE USUARIOS
            </h1>
            <div className='my-4 py-4 border border-black rounded-xl bg-slate-400'>
              <div className='px-4 bg-slate-400-500'>
                <h2 className='font-bold text-center bg-white text-2xl'>
                  Usuarios Existentes
                </h2>
                <ModalUsuarios />
                <div className='py-4 px-4 w-full bg-black rounded-xl'>
                  <table className='w-full bg-white'>
                    <thead>
                      <tr className=''>
                        <th className='w-10 border border-black'>Id</th>
                        <th className='w-40 border border-black'>Nombres</th>
                        <th className='w-44 border border-black'>Apellidos</th>
                        <th className='w-72 border border-black'>Dirección</th>
                        <th className='w-[128px] border border-black'>Nivel</th>
                        <th className='w-16 border border-black'>Editar</th>
                        <th className='w-16 border border-black'>Borrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.map(usuarios => {
                        return (
                          <tr>
                            <td className='border border-black px-2 text-center'>{usuarios.id}</td>
                            <td className='border border-black px-2'>{usuarios.nombres}</td>
                            <td className='border border-black px-2'>{usuarios.apellidos}</td>
                            <td className='border border-black px-2'>{usuarios.direccion}</td>
                            <td className='border border-black px-2'>{usuarios.nivel}</td>
                            <td className='border border-black p-1 w-16'>
                              <button className='px-3 py-2 border ring-white ring-2 rounded-xl mx-2 bg-slate-300 place-self-center'>
                                <FaPencil size={16} className='text-blue-500 text-center' />
                              </button>
                            </td>
                            <td className='border border-black p-1 w-16'>
                              <button className='px-3 py-2 border ring-white ring-2 rounded-xl mx-2 bg-slate-300 place-self-center'>
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
                GESTIÓN DE PORDUCTOS
            </h1>
            <div className='my-4 py-4 border border-black rounded-xl bg-slate-400'>
              <div className='px-4 bg-slate-400-500'>
                <h2 className='font-bold text-center bg-white text-2xl'>
                  Productos Existentes
                </h2>
                <ModalProductos />
                <div className='py-4 px-4 w-full bg-white rounded-xl'>
                  <table className='w-full'>
                    <thead>
                      <tr className=''>
                        <th className='w-10 border border-black'>Id</th>
                        <th className='border border-black'>Nombre</th>
                        <th className='border border-black'>Precio</th>
                        <th className='border border-black'>Foto</th>
                        <th className='border border-black'>Editar</th>
                        <th className='border border-black'>Borrar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(products => {
                        return (
                          <tr>
                            <td className='border border-black px-2'>{products.id}</td>
                            <td className='border border-black px-2'>{products.nombre}</td>
                            <td className='border border-black px-2 text-center'>S/ {products.precio.toFixed(2)}</td>
                            <td className='border border-black py-1'>
                              <img className='rounded-lg max-w-20 justify-self-center border border-black' src={products.foto} alt="" />
                            </td>
                            <td className='border border-black p-1 w-16'>
                            <button className='px-3 py-2 border ring-white ring-2 rounded-xl mx-2 bg-slate-300 place-self-center'>
                              <FaPencil size={16} className='text-blue-500 text-center' />
                            </button>
                            </td>
                            <td className='border border-black p-1 w-16'>
                              <button className='px-3 py-2 border ring-white ring-2 rounded-xl mx-2 bg-slate-300 place-self-center'>
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
    </body>
  )
}

export default AdminPage