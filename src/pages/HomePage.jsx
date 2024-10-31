import Header from '../components/Header'
import juane from "../images/Juane.png";
import heladoFresa from "../images/Helado_fresa.jpg";
import sangucheChicharron from "../images/Sanguche_Chicharron.png";
import tacachoCecina from "../images/tacacho_con_cecina.png";
import infusiones from "../images/Infusiones.png";
import criollosRegionales from "../images/Foto_Criollos_Regionales.png";
import popularesJuane from "../images/Foto_Populares_Juane.png";
import cremas from "../images/Cremas.png";
import Footer from '../components/Footer';
import Carrusel from '../util/Carrusel';

const HomePage = () => {
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
            <section style={{backgroundImage: 'url(https://i.ibb.co/bHgyYXR/Foto-Jugos.png)'}} className='bg-no-repeat bg-cover mt-4 mb-4 p-6 w-full rounded-xl'>
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
                            <p>Fresa Glaseada + Crema <br /> de Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa Durazno + Crema <br /> de Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa Maracuya + Crema <br /> de Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa con Leche</p>
                            <span>S/ 8.00, 10.00, 15.00</span>
                        </div>
                        <div className='flex place-content-between'>
                            <p>Fresa Oreo + Crema <br /> de Leche</p>
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
                <div style={{backgroundImage: 'url(https://i.ibb.co/99M8wmd/Fondo-Infusiones.png)'}} className='w-full bg-yellow-100 p-4 flex justify-around gap-4'>
                    <div style={{backgroundImage: 'url(https://i.ibb.co/nsP4vT0/Fondo-Criollos.png)'}} className='bg-no-repeat bg-cover p-4 rounded-xl text-black font-bold w-2/4'>
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
                    </div>
                </div>

            </section>
            <section>
                <aside className='w-full'>
                    
                </aside>
            </section>
        </section>
    )
}

export default HomePage