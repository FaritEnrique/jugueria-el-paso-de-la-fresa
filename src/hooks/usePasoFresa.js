import { collection, query, getDocs, addDoc, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export const usePasoFresa = () => {
    
    const refCrema = collection(db, 'productCrema')

    const fetchProductCrema = async () => {
        const qCrema = query(refCrema)
        const dataCrema = await getDocs(qCrema)
        const resultsCrema = []
        dataCrema.forEach(doc => {
            console.log(doc.id, doc.data())
            resultsCrema.push({
                docId: doc.id,
                ...doc.data() // Representa el documento actual
            })
        })
        return resultsCrema
    }

    const crearCrema = async (crema) => {
        const newCrema = {
            codigo: crema.codigo,
            name: crema.name,
            priceSmall: crema.priceSmall,
            priceMedium: crema.priceMedium,
            priceBig: crema.priceBig,
            photo: crema.photo
        }
        const responseCrema = await addDoc(refCrema, newCrema)

        return {
            id: responseCrema.id,
            newCrema
        }
    }

    const removeCrema = async (id) => {
        const documentCrema = doc (refCrema, id)

        await deleteDoc(documentCrema)

        return { success: true, id }
    }

    const obtenerCrema = async (id) => {
        const documentObtenerCrema = doc(refCrema, id)

        const crema = await getDoc(documentObtenerCrema)

        /* console.log(crema.data()) */

        return crema.data()
    }

    const editarCrema = async (form, id) => {

        const documentEditarCrema = doc(refCrema, id)

        const cremaModificada = await updateDoc(documentEditarCrema, form)
        
        return {
            "success": true,
            "message": "Producto editado correctamente"
        }
    }

    const refFrozen = collection(db, 'productFrozen')

    const fetchProductFrozen = async () => {
        const qFrozen = query(refFrozen)
        const dataFrozen = await getDocs(qFrozen)
        const resultsFrozen = []
        dataFrozen.forEach(doc => {
            console.log(doc.id, doc.data())
            resultsFrozen.push({
                docId: doc.id,
                ...doc.data() // Representa el documento actual
            })
        })
        return resultsFrozen
    }

    const crearFrozen = async (frozen) => {
        const newFrozen = {
            codigo: frozen.codigo,
            name: frozen.name,
            priceSmall: frozen.priceSmall,
            priceMedium: frozen.priceMedium,
            priceBig: frozen.priceBig,
            photo: frozen.photo
        }
        const responseFrozen = await addDoc(refFrozen, newFrozen)

        return {
            id: responseFrozen.id,
            newFrozen
        }
    }

    const removeFrozen = async (id) => {
        const documentFrozen = doc (refFrozen, id)

        await deleteDoc(documentFrozen)

        return { success: true, id }
    }

    const obtenerFrozen = async (id) => {
        const documentObtenerFrozen = doc(refFrozen, id)

        const frozen = await getDoc(documentObtenerFrozen)

        /* console.log(crema.data()) */

        return frozen.data()
    }

    const editarFrozen = async (form, id) => {

        const documentEditarFrozen = doc(refFrozen, id)

        const frozenModificada = await updateDoc(documentEditarFrozen, form)
        
        return {
            "success": true,
            "message": "Producto editado correctamente"
        }
    }

    return {
        fetchProductCrema,
        crearCrema,
        removeCrema,
        obtenerCrema,
        editarCrema,
        fetchProductFrozen,
        crearFrozen,
        removeFrozen,
        obtenerFrozen,
        editarFrozen
    }

}

export default usePasoFresa