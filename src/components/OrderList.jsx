import { useEffect, useState } from "react"
import { useCartStore } from "../store/cart"
import usePasoFresa from "../hooks/usePasoFresa";

const OrderList = () => {
    const { pedir } = useCartStore()

    const { fetchProductCrema, fetchProductFrozen, fetchProductFresa } = usePasoFresa()

    const [productCrema, setProductCrema] = useState([])

    useEffect(() => {
        fetchProductCrema()
            .then(data => setProductCrema(data))
    }, [])

    const [productFrozen, setProductFrozen] = useState([])

    useEffect(() => {
        fetchProductFrozen()
            .then(data => setProductFrozen(data))
    }, [])


    const [productFresa, setProductFresa] = useState([])

    useEffect(() => {
        fetchProductFresa()
            .then(data => setProductFresa(data))
    }, [])

    return (
        <>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {productCrema.map(productCrema => {
                    return (
                        <div key={productCrema.id} className="w-full border-2 border-gray-200 rounded-lg min-h-80">
                            <img
                                className="rounded-lg w-[295px]"
                                src={productCrema.photo}/>
                            <div className="px-5 pb-5 flex flex-col mt-2">
                                <h5 className="text-lg min-h-16 pb-2 text-white font-semibold text-justify">
                                    {productCrema.name}
                                </h5>
                                {/* <div>
                                    <Counter />
                                </div> */}
                                <div className="flex flex-col justify-between md:flex-row gap-2 bg-gray-50 p-2 rounded-lg">
                                    <span className="text-xl font-bold">
                                        S/ {parseFloat(productCrema.priceSmall).toFixed(2)}
                                    </span>
                                    <button
                                        className="bg-blue-700 hover:bg-red-300 text-white ring-offset-2 ring-2 font-medium rounded-xl text-sm px-4 py-2"
                                        onClick={() => pedir(productCrema)}>Pedir
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {productFrozen.map(productFrozen => {
                    return (
                        <div key={productFrozen.id} className="w-full border-2 border-gray-200 rounded-lg min-h-80">
                            <img
                                className="rounded-lg w-[295px]"
                                src={productFrozen.photo}/>
                            <div className="px-5 pb-5 flex flex-col mt-2">
                                <h5 className="text-lg min-h-16 pb-2 text-white font-semibold text-justify">
                                    {productFrozen.name}
                                </h5>
                                {/* <div>
                                    <Counter />
                                </div> */}
                                <div className="flex flex-col justify-between md:flex-row gap-2 bg-gray-50 p-2 rounded-lg">
                                    <span className="text-xl font-bold">
                                        S/ {parseFloat(productFrozen.priceSmall).toFixed(2)}
                                    </span>
                                    <button
                                        className="bg-blue-700 hover:bg-red-300 text-white ring-offset-2 ring-2 font-medium rounded-xl text-sm px-4 py-2"
                                        onClick={() => pedir(productFrozen)}>Pedir
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {productFresa.map(productFresa => {
                    return (
                        <div key={productFresa.id} className="w-full border-2 border-gray-200 rounded-lg min-h-80">
                            <img
                                className="rounded-lg w-[295px]"
                                src={productFresa.photo}/>
                            <div className="px-5 pb-5 flex flex-col mt-2">
                                <h5 className="text-lg min-h-16 pb-2 text-white font-semibold text-justify">
                                    {productFresa.name}
                                </h5>
                                {/* <div>
                                    <Counter />
                                </div> */}
                                <div className="flex flex-col justify-between md:flex-row gap-2 bg-gray-50 p-2 rounded-lg">
                                    <span className="text-xl font-bold">
                                        S/ {parseFloat(productFresa.priceSmall).toFixed(2)}
                                    </span>
                                    <button
                                        className="bg-blue-700 hover:bg-red-300 text-white ring-offset-2 ring-2 font-medium rounded-xl text-sm px-4 py-2"
                                        onClick={() => pedir(productFresa)}>Pedir
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default OrderList