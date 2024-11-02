import React from 'react'
import encabezado from '../images/Encabezado_Pedidos.png';
import OrderList from '../components/OrderList';

const OrderPage = () => {
  return (
    <>
      <main className=' m-4'>
        <section className='bg-red-300 h-full'>
          <div className='w-full h-full mb-4 rounded-xl'>
            <img className='rounded-xl border-2 border-black' src={encabezado} alt="" />
          </div>
        </section>
        <section className='border-4 rounded-xl bg-gray-500 pb-4'>
          <h1 className='w-full font-bold text-center mt-2 mb-2 text-xl text-white'>SELECCIONE LOS PRODUCTOS</h1>
          <div className='mx-2'>
            <OrderList />
          </div>
        </section>
      </main>
    </>
    
  )
}

export default OrderPage