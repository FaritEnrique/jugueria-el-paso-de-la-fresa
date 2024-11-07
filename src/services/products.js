const url = 'https://apimocha.com/menubarrafresa/api/v1/productos'

export const fetchProducts = async () => {


    const response = await fetch(url)

    const data = await response.json()

    return data.products
    }

    export const crearProducts = async (form) => {

        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)

        }
    
        const response = await fetch(url, options)
    
        return await response.json()
        }