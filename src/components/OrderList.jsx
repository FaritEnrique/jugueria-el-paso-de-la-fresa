import { useEffect, useState } from "react"
import { fetchProducts } from "../services/products"
import { useCartStore } from "../store/cart"
import Counter from "./Counter"

const OrderList = () => {
    const { addToCart } = useCartStore()

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        //<div>{JSON.stringify(products)}</div>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.map(products => {
                return (
                    <div key={products.id} className="w-full border-2 border-gray-200 rounded-lg min-h-80">
                        <img
                            className="rounded-lg w-[295px]"
                            src={products.foto}/>
                        <div className="px-5 pb-5 flex flex-col mt-2">
                            <h5 className="text-lg min-h-14 pb-2 text-white font-semibold text-justify">
                                {products.nombre}
                            </h5>
                            <div>
                                <Counter />
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 bg-gray-50 p-2 rounded-lg">
                                <span className="text-xl font-bold">
                                    S/ {products.precio.toFixed(2)}
                                </span>
                                <button
                                    className="bg-blue-700 hover:bg-red-300 text-white ring-offset-2 ring-2 font-medium rounded-xl text-sm px-4 py-2"
                                    onClick={() => addToCart(products)}>Pedir
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
        
    )
}

export default OrderList