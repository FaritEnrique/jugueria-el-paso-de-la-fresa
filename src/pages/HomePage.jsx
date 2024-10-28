import Header from '../components/Header'
import juane from "../images/Juane.png";
import heladoFresa from "../images/Helado_fresa.jpg";
import sangucheChicharron from "../images/Sanguche_Chicharron.png";
import tacachoCecina from "../images/tacacho_con_cecina.png";
import infusiones from "../images/Infusiones.png";
import jugos from "../images/Foto_Jugos.png";
import criollosRegionales from "../images/Foto_Criollos_Regionales.png";
import popularesJuane from "../images/Foto_Populares_Juane.png";
import cremas from "../images/Cremas.png";
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <body className='bg-gray-300'>
        <Header />
        <main className='place-items-center h-full p-6'>
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
            <section className='max-w-7xl bg-white place-items-center p-4 rounded-xl'>
                <div className='bg-black rounded-xl p-2 mb-2 w-96'>
                    <h2 className='text-white text-2xl font-bold text-center rounded-xl'>
                        Nuestros Productos
                    </h2>
                </div>
                <div id="default-carousel" className="relative w-full bg-blue-500" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src= {juane} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Foto Juane"/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src= {heladoFresa} className="absolute block w-full -translate-x-1/2
                             -translate-y-1/2 top-1/2 left-1/2" alt="Foto Helado de Fresa"/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src= {sangucheChicharron} className="absolute block w-full
                             -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Foto Sanguche de Chicharrón"/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src= {tacachoCecina} className="absolute block w-full -translate-x-1/2
                             -translate-y-1/2 top-1/2 left-1/2" alt="Foto Tacacho con Cecina"/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src= {infusiones} className="absolute block w-full -translate-x-1/2
                             -translate-y-1/2 top-1/2 left-1/2" alt="Foto Infusiones"/>
                        </div>
                    </div>
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 
                    rtl:space-x-reverse">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" 
                        aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" 
                        aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" 
                        aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" 
                        aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" 
                        aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center 
                    h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full
                         bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50
                          dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white
                           dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" 
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                                stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center 
                    h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full
                         bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50
                          dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white
                           dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" 
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </section>
            <section className='bg-white mt-4 mb-4 p-6 w-full rounded-xl'>
                <div>
                    <h2 className='bg-red-600 w-full text-white font-bold text-2xl text-center rounded-xl'>Bebidas</h2>
                </div>
                <div className='w-full flex gap-4 pt-4 place-content-around'>
                    <div className='bg-pink-200 w-96 rounded-xl p-3 content-center'>
                        <h3 className='font-bold'>CREMA</h3>
                        <div className='flex place-content-between'>
                            <p>Fresa + Crema de Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa Glaseada + Crema de Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa Durazno + Crema de Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa Maracuya + Crema de Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa con Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa Oreo + Crema de Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                    </div>
                    <div className='bg-sky-200 w-96 rounded-xl p-3 content-center'>
                        <h3 className='font-bold'>FROZEN</h3>
                        <div className='flex place-content-between'>
                            <p>Frozen Limón Fresa</p>
                            <span>S/ 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Frozen de Fresa</p>
                            <span>S/ 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa Piña Durazno</p>
                            <span>S/ 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Frozen Fresa + Leche</p>
                            <span>S/ 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Frozen de Lúcuma</p>
                            <span>S/ 12.00, 18.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Frozen de Maracuya</p>
                            <span>S/ 12.00, 18.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Frozen de Coco</p>
                            <span>S/ 12.00, 18.00</span>
                        </div>                    
                    </div>
                    <div className='bg-green-200 w-96 rounded-xl p-3 content-center'>
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
                    </div>
                </div>
            </section>
            <section className='bg-orange-400 mt-4 mb-4 p-6 w-full rounded-xl'>
                <div>
                    <h2 className='w-full bg-red-600 text-center font-bold text-2xl rounded-xl'>Para Picar</h2>
                </div>
                <div className='w-full bg-yellow-100 p-4 flex justify-between gap-4'>
                    <div className='bg-slate-400 p-4 rounded-xl w-2/4'>
                        <h3 className='font-bold'>Sanguches Criollos</h3>
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
                        <h3 className='font-bold'>Comida Regional</h3>
                        <div className='flex place-content-between'>
                            <p>Cecina + Tacacho</p>
                            <span>S/ 15.00</span>
                        </div>
                        <div className='m-4 place-items-center'>
                            <img src= {criollosRegionales} alt="Foto de Platos Criollos y Regionales" className='rounded-lg border-2'/>
                        </div>
                        <div className='mb-4 place-items-center'>
                            <img src={cremas} alt="" />
                        </div>
                    </div>
                    <div className='bg-slate-400 p-4 rounded-xl w-2/4'>
                        <h3 className='font-bold'>Sanguches Populares</h3>
                        <div className='flex place-content-between'>
                            <p>Huevo</p>
                            <span>S/ 4.00</span>
                        </div>
                        <h3 className='font-bold'>Variados</h3>
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
                    </div>
                </div>

            </section>
            <section>
                <aside className='w-full'>
                    
                </aside>
            </section>
        </main>
        <Footer />
    </body>
  )
}

export default HomePage