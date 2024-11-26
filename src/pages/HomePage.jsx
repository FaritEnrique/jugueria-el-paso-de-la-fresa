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

    return (
        <section className='place-items-center h-full p-6'>
            <section className='w-full mt-4 mb-4 bg-green-200 p-6 rounded-xl'>
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
            <section className='w-full p-2 mt-4 mb-4 rounded-xl place-items-center'>
                <Carrusel />
            </section>
            <section className="w-full p-2 mb-4 rounded-xl place-items-center">
                <div className="bg-gray-300" >
                    <img src="https://i.ibb.co/8sfdz5T/Propiedades-Fresa.png" alt="Propiedades de la Fresa" />
                </div>
                <div className="w-full p-2 rounded-xl place-items-center">
                    <img src="https://i.ibb.co/ydwtzVQ/Ubicar-Fresas.png" alt="Imagen sugerir encontrar fresas" />
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
                    {/* <div className='hidden bg-green-200 w-full rounded-xl p-3 content-center'>
                        <h3 className='font-bold'>TÉ CHINO</h3>
                        <div className='flex place-content-between'>
                            <p>Té Jazmín + Limón</p>
                            <span>S/ 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Té + Leche</p>
                            <span>S/ 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Pulpa Fruta</p>
                            <span>S/ 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Leche Coco con Fruta</p>
                            <span>S/ 18.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Frappe + Frutas</p>
                            <span>S/ 18.00</span>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="w-full">
                <div className="bg-gray-300 flex">
                    <img className="flex-grow rounded-2xl" src="https://i.ibb.co/k5HY5K8/VENTA-DE-FRESA.png" alt="Banner de Venta de Fresas" />
                </div>
            </section>
            <section className='bg-orange-400 mt-4 mb-4 p-6 w-full rounded-xl'>
                <div>
                    <h2 className='w-full bg-red-600 text-center font-bold text-2xl rounded-xl'>Venta de Fresas</h2>
                </div>
                <div style={{backgroundImage: 'url(https://i.ibb.co/99M8wmd/Fondo-Infusiones.png)'}} className="bg-no-repeat bg-cover">
                    <div  className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 p-4 mx-auto'>
                        
                                <div className="w-full border-2 border-gray-200 rounded-lg min-h-80">
                                    <h5 className="text-lg min-h-16 pb-2 text-white font-semibold text-justify">
                                        Fresa en Bolsa 1Kg
                                    </h5>
                                    <img
                                        className="rounded-lg w-[295px]"
                                        src= {criollosRegionales} alt="Foto de Platos Criollos y Regionales"/>
                                    <div className="px-5 pb-5 flex flex-col mt-2">
                                        <div className="flex flex-col justify-between md:flex-row gap-2 bg-gray-50 p-2 rounded-lg">
                                            <span className="text-xl font-bold">
                                                S/ 16.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            {/* )
                        })} */}
                    </div>
                
                    {/* <div style={{backgroundImage: 'url(https://i.ibb.co/nsP4vT0/Fondo-Criollos.png)'}} className='bg-no-repeat bg-cover p-4 rounded-xl text-black font-bold w-2/4'>
                        <div className='bg-slate-500 bg-opacity-60 p-2'>
                            <h3 className='font-extrabold'>Sanguches Criollos</h3>
                            <div className='flex place-content-between'>
                                <p>Pollo Deshilachado</p>
                                <span>S/ 15.00</span>
                            </div>
                            <div className='flex place-content-between'>
                                <p>Pavo Horneado</p>
                                <span>S/ 15.00</span>
                            </div>
                            <div className='flex place-content-between'>
                                <p>Lechón Horneado</p>
                                <span>S/ 15.00</span>
                            </div>
                            <div className='flex place-content-between'>
                                <p>Jamón y Queso</p>
                                <span>S/ 10.00</span>
                            </div>
                            <div className='flex place-content-between'>
                                <p>Lomito Ahumado</p>
                                <span>S/ 15.00</span>
                            </div>
                            <div className='flex place-content-between'>
                                <p>Chicharrón</p>
                                <span>S/ 15.00</span>
                            </div>
                            <div className='flex place-content-between'>
                                <p>Crossain Jam + Queso</p>
                                <span>S/ 12.00</span>
                            </div>
                            <br />
                            <h3 className='font-extrabold'>Comida Regional</h3>
                            <div className='flex place-content-between'>
                                <p>Cecina + Tacacho</p>
                                <span>S/ 15.00</span>
                            </div>
                        </div>
                        <div className='m-4 place-items-center'>
                            <img src= {criollosRegionales} alt="Foto de Platos Criollos y Regionales" className='rounded-lg border-2'/>
                        </div>
                        <div className='mb-4 place-items-center'>
                            <img src={cremas} alt="" />
                        </div>
                    </div>
                    <div style={{backgroundImage: 'url(https://i.ibb.co/pKyK58K/Fondo-Populares.png)'}} className='bg-no-repeat bg-cover p-4 rounded-xl w-2/4 text-cyan-200 font-bold'>
                        <h3 className='font-extrabold'>Sanguches Populares</h3>
                        <div className='flex place-content-between'>
                            <p>Huevo</p>
                            <span>S/ 4.00</span>
                        </div>
                        <h3 className='font-extrabold'>Variados</h3>
                        <div className='flex place-content-between'>
                            <p>Empanadas</p>
                            <span>S/ 5.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Keke</p>
                            <span>S/ 3.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Juane</p>
                            <span>S/ 10.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Pan al Ajo</p>
                            <span>S/ 4.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Tostadas</p>
                            <span>S/ 2.00</span>
                        </div>
                        <div className='m-4 place-items-center'>
                            <img src= {popularesJuane} alt="Foto de Platos Criollos y Regionales" className='rounded-lg border-2'/>
                        </div>
                    </div> */}
                </div>
            </section>
        </section>
    )
}

export default HomePage