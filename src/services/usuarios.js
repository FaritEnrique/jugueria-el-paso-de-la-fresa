export const fetchUsuarios = async () => {
    const url = 'https://apimocha.com/menubarrafresa/api/v1/newusers'

    const response = await fetch(url)

    const data = await response.json()

    return data.usuarios
    }