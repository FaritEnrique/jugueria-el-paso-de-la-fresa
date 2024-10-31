import React from 'react'
import encabezado from '../images/Encabezado_Pedidos.png';

const OrderPage = () => {
  return (
    <>
      <main className=' m-4'>
        <section className='bg-red-300 h-[205px]'>
          <div className='w-full h-full mb-4 rounded-xl'>
            <img className='rounded-xl border-2 border-black' src={encabezado} alt="" />
          </div>
          <div className='border-black w-full'>
            <div>
              
            </div>

          </div>
        </section>
      </main>
    </>
    
  )
}

export default OrderPage