import React from 'react'

export const fetchClientes = async () => {
    const url = 'https://apimocha.com/clientesbarrafresa/api/v1/clientes'

    const response = await fetch(url)

    const data = await response.json()

    return data.clientes
    }
