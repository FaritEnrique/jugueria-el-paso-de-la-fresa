import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleLogin = async (event) => {
    event.preventDefault();

    if (form.username === 'Farit'){
      navigate('/admin')
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]:value})
  }

  return (
    <main>
      <div className='container bg-black border border-black max-w-[400px] mx-auto my-4 rounded-xl p-4'>
        <h1 className='text-2xl font-extrabold font-serif p-2 text-center text-white'>Autenticación de Usuarios</h1>
        <p className='border border-black p-2 text-justify rounded-lg bg-white'>Ingrese usuario y contraseña para su validación y pueda tener acceso a hacer modificaciones</p>
        <form onSubmit={handleLogin} className='flex flex-col my-4 p-2 bg-slate-600 border border-black rounded-lg' action="">
          <label className='flex flex-col gap-2 p-4 text-white font-bold' htmlFor="">
            <span>Usuario:</span>
            <input className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black' 
              type="text" 
              placeholder='Ejem. Carlos01' 
              name='username' 
              onChange={handleChange} 
            />
          </label>
          <label className='flex flex-col gap-2 p-4 text-white font-bold' htmlFor="">
            <span>Contraseña:</span>
            <input  
              className='border border-black px-2 py-1 rounded-lg hover:border-blue-400 text-black'
              type='password'
              placeholder='***********' 
              name='password'
              onChange={handleChange}
            />
          </label>
          <input className='my-4 mx-auto px-4 py-2 bg-violet-500 hover:bg-red-300 rounded-lg font-bold' 
            type="submit" 
            value='Acceder' 
          />
        </form>
      </div>
      
    </main>
  )
}

export default LoginPage