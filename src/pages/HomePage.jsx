import criollosRegionales from "../images/Foto_Criollos_Regionales.png";
import Carrusel from '../util/Carrusel';
import usePasoFresa from "../hooks/usePasoFresa";
import { useEffect, useState } from "react";

const HomePage = () => {
    const { fetchProductCrema } = usePasoFresa()

    const [productCrema, setProductCrema] = useState([])

    useEffect(() => {
        fetchProductCrema()
            .then(data => setProductCrema(data))
    }, [])

    const { fetchProductFrozen } = usePasoFresa()

    const [productFrozen, setProductFrozen] = useState([])

    useEffect(() => {
        fetchProductFrozen()
            .then(data => setProductFrozen(data))
    }, [])

    const { fetchProductFresa } = usePasoFresa()

    const [productFresa, setProductFresa] = useState([])

    useEffect(() => {
        fetchProductFresa()
            .then(data => setProductFresa(data))
    }, [])

    return (
        <section className='place-items-center h-full p-6'>
            <section className='w-full mt-4 mb-4 bg-green-50 p-6 rounded-xl border-2 border-gray-400'>
                <div>
                    <h2 className='text-2xl text-center font-bold mb-4'>¿Quienes Somos?</h2>
                </div>
                <div>
                    <p className='text-justify'>
                    Estamos convencidos que la salud constituye la verdadera riqueza, por lo que estamos comprometidos con tu 
                    salud, ofreciendo productos productos elaborados con ingredientes cuidadosamente seleccionados y frescos.
                    Así como también nuestros procesos de elaboración, tienen en cuenta las medidas sanitarias adecuadas. <br />
                    Nuestros productos no sólo son deliciosos, sino que también van acompañados de la mejor atención, con 
                    personal capacitado para dar un adecuado servicio y hacer que el cliente goce de una experiencia inolvidable.
                    </p>
                </div>
            </section>
            <section className="w-full">
                <div className="bg-gray-300 flex">
                    <img className="flex-grow rounded-2xl" src="https://i.ibb.co/k5HY5K8/VENTA-DE-FRESA.png" alt="Banner de Venta de Fresas" />
                </div>
            </section>
            <section className='w-full p-2 mt-4 mb-4 rounded-xl place-items-center'>
                <Carrusel />
            </section>
            <section className="w-full p-2 mb-4 rounded-xl place-items-center">
                <div className="bg-gray-300" >
                    <img src="https://i.ibb.co/8sfdz5T/Propiedades-Fresa.png" alt="Propiedades de la Fresa" />
                </div>
                <div className="w-full p-2 rounded-xl place-items-center">
                    <img src="https://i.ibb.co/gmKh2hF/Paso-Fresa-Solucion.png" alt="Imagen sugerir encontrar fresas" />
                </div>
            </section>
            <section style={{backgroundImage: 'url(https://i.ibb.co/bHgyYXR/Foto-Jugos.png)'}} className='bg-no-repeat bg-cover bg-center mb-4 py-6 px-2 w-full rounded-xl'>
                <div>
                    <h2 className='bg-red-600 w-full text-white font-bold text-2xl text-center rounded-xl'>Productos</h2>
                </div>
                <div className='w-full flex flex-wrap gap-4 pt-4 place-content-around'>
                    <div className='bg-pink-200 w-full rounded-xl p-3 content-center md:w-96 md:flex-grow'>
                        <h3 className='font-bold text-center'>CREMA</h3>
                        <table className='w-full bg-white'>
                            <thead>
                                <tr className=''>
                                    <th className='w-40 border border-black'>Producto</th>
                                    <th className='w-20 border border-black md:w-20'>Peq.</th>
                                    <th className='w-20 border border-black md:w-20'>Med.</th>
                                    <th className='w-20 border border-black md:w-20'>Grde.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productCrema.map(productCrema => {
                                    return (
                                        <tr key = {productCrema.docId}>
                                            <td className='border border-black px-2'>{productCrema.name}</td>
                                            <td className='w-20 border border-black px-2 text-center md:w-20'>S/{parseFloat(productCrema.priceSmall).toFixed(2)}</td>
                                            <td className='w-20 border border-black px-2 text-center md:w-20'>S/{parseFloat(productCrema.priceMedium).toFixed(2)}</td>
                                            <td className='w-20 border border-black px-2 text-center md:w-20'>S/{parseFloat(productCrema.priceBig).toFixed(2)}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-sky-200 w-full rounded-xl p-3 content-center md:w-96 md:flex-grow'>
                        <h3 className='font-bold text-center'>FROZEN</h3>
                        <table className='w-full bg-white'>
                            <thead>
                                <tr className=''>
                                    <th className='w-40 border border-black'>Producto</th>
                                    <th className='w-20 border border-black md:w-20'>Peq.</th>
                                    <th className='w-20 border border-black md:w-20'>Med.</th>
                                    <th className='w-20 border border-black md:w-20'>Grde.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productFrozen.map(productFrozen => {
                                    return (
                                        <tr key = {productFrozen.docId}>
                                            <td className='border border-black px-2'>{productFrozen.name}</td>
                                            <td className='w-20 border border-black px-2 text-center md:w-20'>S/{parseFloat(productFrozen.priceSmall).toFixed(2)}</td>
                                            <td className='w-20 border border-black px-2 text-center md:w-20'>S/{parseFloat(productFrozen.priceMedium).toFixed(2)}</td>
                                            <td className='w-20 border border-black px-2 text-center md:w-20'>S/{parseFloat(productFrozen.priceBig).toFixed(2)}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            
            <section className='bg-red-500 mt-4 mb-4 p-6 w-full rounded-xl'>
                <div>
                    <h2 className='w-full bg-white text-center font-bold text-2xl rounded-xl'>Venta de Fresas</h2>
                </div>
                <br />
                <div style={{backgroundImage: 'url(https://i.ibb.co/99M8wmd/Fondo-Infusiones.png)'}} className="bg-no-repeat bg-cover rounded-xl p-4">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mx-auto rounded-xl w-full '>
                        {productFresa.map(productFresa => {
                            return(
                                <div key={productFresa.docId} className="w-full border-2 border-gray-200 rounded-lg flex flex-col
                                bg-black p-2 justify-center">
                                    <h5 className="text-lg min-h-16 pb-2 text-white font-semibold text-center px-2">
                                        {productFresa.name}
                                    </h5>
                                    <img
                                        className="rounded-lg object-cover flex-grow"
                                        src= {productFresa.photo} alt="Foto Producto"/>
                                    <div className="px-5 pb-5 flex flex-grow flex-wrap gap-4 justify-between mt-2 w-full md:justify-around">
                                            <p className="text-lg text-white">Precio:</p>
                                            <p className="text-xl text-white font-bold">
                                                S/{parseFloat(productFresa.price).toFixed(2)}
                                            </p>
                                    </div>    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HomePage