const BASE_URL = 'https://apimocha.com/menubarrafresa/api/v1/productos'

export const fetchProducts = async () => {


    const response = await fetch(`${BASE_URL}`)

    const data = await response.json()

    return data.products
}

export const crearProducto = async (form) => {

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(form)

    }
    
    const response = await fetch(`${BASE_URL}`, options)
    
    return await response.json()
}

export const obtenerProducto = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    return await response.json()
}

export const editarProducto = async (form, id) => {
    const url = `${BASE_URL}/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(form)
    }
    
    const response = await fetch(url, options)
    
    return await response.json()
}

export const eliminarProducto = async (id) => {
    const url = `${BASE_URL}/${id}`

    const options = {
        method: 'DELETE'
    }
    
    const response = await fetch(url, options)

    return await response.json()
}