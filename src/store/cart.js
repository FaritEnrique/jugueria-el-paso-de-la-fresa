import { create } from "zustand";

export const useCartStore = create(
    (set, get) => ({
        // Estado INICIAL
        cart: [],

        //Actions
        pedir: (newProducts) => {
            // ¿Existe el nuevo producto en el carrito de compra?
            const productsInCartIndex = get().cart.findIndex(
                products => products.id === newProducts.id
            )

            if (productsInCartIndex >= 0) {
                // La lógica para cuando el producto ya existe en el carrito de compras
                // Aquí incrementaremos el campo quantity

                const newCart = get().cart.map(products => {
                    if (products.id === newProducts.id) {
                        return {
                            ...products,
                            cantidad: products.cantidad + 1
                        }
                    }
                    return products
                })

                set(() => ({ cart: newCart }))

                return
            }

            // Esta línea se ejecuta cuando el producto es nuevo en el carrito de compras
            set(state => ({
                cart: [...state.cart, { ...newProducts, cantidad: 1 }]
            }))
        },
        removeFromCart: (id) => {
            // DONE: remover el producto usando el id que tenemos en los parámetros de la función
            set(state => {
                const newCart = state.cart.filter(products => products.id !== id)
                
                return { cart: newCart }
            })
        },
        cleanCart: () => {
            //limpiar el carrito de compras
            set(() => ({ cart: [] }))
        }
    })
)