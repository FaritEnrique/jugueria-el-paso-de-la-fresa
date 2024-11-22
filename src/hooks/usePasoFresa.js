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

        const responseRemoveCrema = await deleteDoc(documentCrema)

        return responseRemoveCrema
    }

    const obtenerCrema = async (id) => {
        const documentObtenerCrema = doc(db, 'productCrema', id)

        const responseObtenerCrema = await getDoc(documentObtenerCrema)

        return responseObtenerCrema
    }

    const editarCrema = async (form, id) => {
        const documentEditarCrema = doc(db, 'productCrema', id)

        const responseEditarCrema = await fetch(documentEditarCrema)
        
        return responseEditarCrema
    }

    return {
        fetchProductCrema,
        crearCrema,
        removeCrema,
        obtenerCrema,
        editarCrema
    }

}

export default usePasoFresa
