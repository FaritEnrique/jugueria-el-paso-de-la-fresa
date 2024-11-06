import React, { useState, useEffect } from 'react'
import { fetchUsuarios } from '../services/usuarios'
import { FaPencil } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { fetchProducts } from '../services/products';

const AdminPage = () => {

  const { register, formState: { errors } , handleSubmit } = useForm();
  
  const onSubmit = (dataUsuarios) => {
    
    console.log(JSON.stringify(dataUsuarios));
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
                <div className='w-full flex justify-end'>
                  <button className='bg-blue-400 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm font-bold rounded-xl '>Agregar Usuario</button>
                </div>
                <div className='py-4 px-4 w-full bg-white rounded-xl'>
                  {usuarios.map(usuarios => {
                    return (
                      <table className='w-full'>
                        <thead>
                          <tr className=''>
                            <th className='w-10 border border-black'>Id</th>
                            <th className='w-40 border border-black'>Nombres</th>
                            <th className='w-44 border border-black'>Apellidos</th>
                            <th className='w-72 border border-black'>Dirección</th>
                            <th className='w-[108px] border border-black'>DNI N°</th>
                            <th className='w-[128px] border border-black'>Nivel</th>
                            <th className='w-16 border border-black'>Editar</th>
                            <th className='w-16 border border-black'>Borrar</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border border-black px-2'>{usuarios.id}</td>
                            <td className='border border-black px-2'>{usuarios.nombres}</td>
                            <td className='border border-black px-2'>{usuarios.apellidos}</td>
                            <td className='border border-black px-2'>{usuarios.direccion}</td>
                            <td className='border border-black px-2'>{usuarios.numerodoc}</td>
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
                        </tbody>
                      </table>
                    )
                  })}
                </div>
                <div className='w-full mt-4 bg-white py-4 flex justify-center'>
                  <div className='w-1/2 bg-slate-400 py-4 px-6 rounded-xl'>
                    <div className='bg-white py-2'>
                      <h2 className='mb-2 font-bold text-center'>Registre Nuevo Usuario</h2>
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
                        <span className='font-bold'>Nombres</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="text" 
                          placeholder='Ejem. Javier Martín' 
                          name='nombres'
                          {...register('nombres', {required: true})}
                        />
                        {errors.nombres?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Apellidos</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="text" 
                          placeholder='Ejem. Montenegro Zevallos' 
                          name='apellidos'
                          {...register('apellidos', {required: true})}
                        />
                        {errors.apellidos?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Dirección</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="text" 
                          placeholder='Ejem. Calvo de Araujo N° 520' 
                          name='direccion'
                          {...register('direccion', {required: true})}
                        />
                        {errors.direccion?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Tipo de Documento</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="text" 
                          placeholder='Ejem. DNI' 
                          name='documento'
                          {...register('documento', {required: true})}
                        />
                        {errors.documento?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>N° de Documento</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="number" 
                          placeholder='Ejem. 05325713' 
                          name='numerodoc'
                          {...register('numerodoc', {required: true})}
                        />
                        {errors.numerodoc?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Correo Electrónico</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="email" 
                          placeholder='Ejem. jperez@dominio.com' 
                          name='correo'
                          {...register('correo', {required: true})}
                        />
                        {errors.correo?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>N° de Celular</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="number" 
                          placeholder='Ejem. 900584502' 
                          name='celular'
                          {...register('celular', {required: true})}
                        />
                        {errors.celular?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Nivel</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="text" 
                          placeholder='Ejem. Administrador' 
                          name='nivel'
                          {...register('nivel', {required: true})}
                        />
                        {errors.nivel?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Usuario</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="text" 
                          placeholder='Ejem. Carlos01, JChavez' 
                          name='user'
                          {...register('user', {required: true})}
                        />
                        {errors.user?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Contraseña</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="password" 
                          placeholder='Como mínimo una mayúscula y un número' 
                          name='contraseña'
                          {...register('contraseña', {required: true})}
                        />
                        {errors.contraseña?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <div className='flex justify-center'>
                        <input type="submit" className='bg-blue-500 border border-black ring-gray-400 ring-2 px-4 py-2 rounded-xl m-4' />
                      </div>
                    </form>
                  </div>
                  
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
                <div className='w-full flex justify-end'>
                  <button className='bg-blue-400 ring-slate-50 ring-2 hover:bg-red-200 my-2 py-2 px-4 text-sm font-bold rounded-xl '>
                    Agregar Productos
                  </button>
                </div>
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
                <div className='w-full mt-4 bg-white py-4 flex justify-center'>
                  <div className='w-1/2 bg-slate-400 py-4 px-6 rounded-xl'>
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
                        {errors.nombres?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>precio</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="number" 
                          placeholder='Ingrese Precio (2 decimales)' 
                          name='precio'
                          {...register('precio', {required: true})}
                        />
                        {errors.apellidos?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <label className='flex flex-col gap-2 px-4 pt-4 text-white' htmlFor="">
                        <span className='font-bold'>Foto</span>
                        <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
                          type="url" 
                          placeholder='Ingrese url de Foto' 
                          name='foto'
                          {...register('foto', {required: true})}
                        />
                        {errors.direccion?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
                      </label>
                      <div className='flex justify-center'>
                        <input type="submit" className='bg-blue-500 border border-black ring-gray-400 ring-2 px-4 py-2 rounded-xl m-4' />
                      </div>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
        </section>
    </body>
  )
}

export default AdminPage