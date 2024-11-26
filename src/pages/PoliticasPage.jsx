import React from 'react'
import { TbPointFilled } from "react-icons/tb";


const PotliticasPage = () => {
  return (
    <div className='md:px-4 lg:px-8'>
      <div className='w-full py-6 px-4 bg-white mt-3 mb-4 rounded-xl'>
        <h1 className='text-center font-bold underline'>POLITICAS DE DELIVERY</h1>
        <br />
        <p className='text-justify'>Estimado cliente, a continuación te presentamos los Términos y Condiciones de nuestra política de Delivery. Te recomendamos que lo revises cuando realices tus pedidos por este canal.</p>
        <br />
        <h2 className='font-bold'>1. MEDIDAS DE SEGURIDAD</h2>
        <br />
        <table className=''>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>Por temas de seguridad sanitaria los repartidores entregarán los pedidos en la puerta principal de la casa, condominio, edificio, empresas, etc. Es decir, el motorizado no ingresará ni subirá a los departamentos, áreas, torres, etc.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>Con respecto a la preparación, empaque y entrega de los productos, garantizar que como empresa estamos cumpliendo con todos los protocolos de seguridad sanitaria.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>Por motivos de prevención y seguridad en el reparto, el servicio de delivery a clínicas, hospitales u otros centros de salud se realizará la entrega en la puerta principal</td>
          </tr>
        </table>
        <br />
        <h2 className='font-bold'>2. SOBRE EL SERVICIO DE DELIVERY</h2>
        <br />
        <table className='ml-4'>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>El servicio de delivery se brinda respecto de aquellos pedidos efectuados por los clientes a través de las siguientes vías: (I) vía telefónica o (II) Vía online, realizando el pedido a través de nuestra web.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>La zona de Reparto es limitada e inforamda por el operador en la llamada. Si hace el pedido vía online, se indicará la cobertura de reparto al ingresar a la plataforma web.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>El costo de envío es de S/ 5.00 por los canales telefónicos y Online. No se utilizan otros canales.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>No se aceptan billetes mayores de S/ 50.00 como forma de pago.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>No se aceptan pedidos de otras marcas. Deberán ser realizados de forma independiente por el cliente, teniendo en consideración los costos que esto le demanden.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>No se adicionan porciones mayores de salsas o cremas a las establecidas por cada pedido por nuestra empresa.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>En caso el cliente no se encontrara conforme con el servicio prestado por alguno de los repartidores o quisiera interponer una queja sobre la forma de conducir, podrá comunicarlo a través del libro de reclamaciones virtualdentro de los horarios de atención (08:00 am a 06:00 pm).</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>Es responsabilidad del cliente asegurarse que, al momento de la entrega del producto, este se encuentre conforme.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>La empresa se reserva el derecho de suspender el servicio de delivery en cualquier momento.</td>
          </tr>
        </table>
        <br />
        <h2 className='font-bold'>3. HORARIO DE DELIVERY</h2>
        <br />
        <table className='ml-4'>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>Los pedidos se atenderán de lunes a domingo de 08:00 am a 06:00 pm.</td>
          </tr>
          <tr>
            <td className='pr-4'><TbPointFilled /></td>
            <td className='text-justify'>El horario de delivery podrá estar sujeto a modificaciones por diferentes motivos, entre ellos: nuevas disposiciones emitidas por el Gobierno, cierre de tienda, días festivos y/o feriados, huelgas, condiciones de clima (lluvia, neblina, garúa, etc.), desastres naturales, días de eventos deportivos/partidos de fútbool o ubicación de la vivienda (dificultades de accesoen determinadas horas, incremento de peligrosidad, etc.) lo cual será informado al momento en que usted se contacte con nosotros para realizar su pedido.</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default PotliticasPage