import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaRegWindowClose } from "react-icons/fa";
import swal from 'sweetalert';


const ModalUsuarios = () => {

    const { register, formState: { errors } , handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
        swal({
            title: 'Buen Trabajo',
            text: 'El registro de un Nuevo Usuario, se realizó con éxito',
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
                Agregar Usuario
            </button>
            
            {open &&(
                <>
                    <div className= 'max-w-3/4 fixed inset-0 rounded-xl p-4 backdrop-blur-sm justify-self-center bg-cyan-100'>
                        <button className='flex px-3 mt-2 ring-slate-300 ring-2 bg-red-500 items-center justify-self-end gap-2 
                            rounded-xl' onClick={()=>setOpen(false)}>
                            <p>
                                Cerrar
                            </p>
                            <FaRegWindowClose />
                        </button>
                        <div className='w-full py-4 flex justify-center'>
                            <div className='w-full max-h-[560px] bg-slate-400 py-4 px-6 rounded-xl'>
                                <div className='bg-white py-2'>
                                    <h2 className='mb-2 font-bold text-center'>Registre Nuevo Usuario</h2>
                                    <p className='px-4 text-justify'>Ingrese todos los campos para un registro satisfatoriio</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className='mt-4 p-2 w-full max-h-[440px] bg-black rounded-xl overflow-y-scroll'>
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
                </>
            )}
        </>
    )
}

export default ModalUsuarios