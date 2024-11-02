export const fetchProducts = async () => {
    const url = 'https://apimocha.com/menubarrafresa/api/v1/productos'

    const response = await fetch(url)

    const data = await response.json()

    return data.products
    }