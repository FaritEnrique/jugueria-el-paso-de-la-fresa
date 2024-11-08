import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {

  const { register, formState: { errors } , handleSubmit } = useForm();

  const onSubmit = (data) => {
    
    console.log(JSON.stringify(data));

  }

  return (
    <section className='container w-1/2 bg-green-100 mx-auto my-12 rounded-2xl p-6 shadow-2xl shadow-blue-400'>
        <h1 className='font-extrabold text-center p-4'>REGISTRO DE CLIENTES</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-black rounded-lg p-6'>
          <div className='w-full mb-3'>
            <label className='p-2' htmlFor="">Nombre Completo:</label>
            <br />
            <input placeholder='Ejem: Juan Perez' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="text" {...register('nombre', {required: true, maxLength: 35})} />
            {errors.nombre?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
          </div >
          <div className='w-full mb-3'>
            <label className='p-2' htmlFor="">Dirección:</label>
            <br />
            <input placeholder='Calle Morona N° 728' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="text" {...register('direccion', {required: true, maxLength: 30})} />
            {errors.direccion?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
          </div>
          <div className='w-full mb-3'>
            <label className='p-2' htmlFor="">Correo:</label>
            <br />
            <input placeholder='ejemplo@dominio.com' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="email" {...register('correo', {required: true, pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/})} />
            {errors.correo?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
          </div>
          <div className='w-full mb-4'>
            <label className='p-2' htmlFor="">Número de Celular:</label>
            <br />
            <input placeholder='900569803' className='py-2 border border-black rounded-lg px-4 hover:border-blue-600 
            w-full' type="text" {...register('celular', {required: true})} />
            {errors.celular?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
          </div>
          <div className='w-full mb-4'>
            <label htmlFor="" className='mr-10 p-2'>Nacionalidad:</label>
            <select {...register('nacionalidad', {required: true})}>
              <option value=""></option>
              <option value="PE">Peruana</option>
              <option value="CO">Colombiana</option>
              <option value="O">Otro</option>
            </select>
            {errors.nacionalidad?.type === 'required' && <p className='text-red-500'>Este campo es necesario</p>}
          </div>
          <div className='w-full text-center'>
            <input type="submit" value='Enviar' className='ring-white ring-4 bg-slate-600 rounded-lg text-bold py-2 px-4 text-white hover:bg-blue-400' />
          </div>
        </form>

    </section>
  )
}

export default RegisterPage
