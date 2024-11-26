import { create } from "zustand";

export const useCartStore = create(
    (set, get) => ({
        // Estado INICIAL
        cart: [],

        //Actions
        pedir: (newProductCrema) => {
            // ¿Existe el nuevo producto en el carrito de compra?
            const productCremaInCartIndex = get().cart.findIndex(
                productCrema => productCrema.id === newProductCrema.id
            )

            if (productCremaInCartIndex >= 0) {
                // La lógica para cuando el producto ya existe en el carrito de compras
                // Aquí incrementaremos el campo quantity

                const newCart = get().cart.map(productCrema => {
                    if (productCrema.id === newProductCrema.id) {
                        return {
                            ...productCrema,
                            cantidad: productCrema.cantidad + 1
                        }
                    }
                    return productCrema
                })

                set(() => ({ cart: newCart }))

                return
            }

            // Esta línea se ejecuta cuando el producto es nuevo en el carrito de compras
            set(state => ({
                cart: [...state.cart, { ...newProductCrema, cantidad: 1 }]
            }))
        },
        removeFromCart: (id) => {
            //Remover el producto usando el id que tenemos en los parámetros de la función
            set(state => {
                const newCart = state.cart.filter(productCrema => productCrema.id !== id)
                
                return { cart: newCart }
            })
        },
        cleanCart: () => {
            //limpiar el carrito de compras
            set(() => ({ cart: [] }))
        }
    })
)