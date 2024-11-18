import React from 'react'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

export const usePasoFresa = () => {
    const reference = colecction(db, 'productCrema')

    const fetchproductCrema = async () => {
        const q = query(reference)
        const data = await getDocs(q)
        const results = []
        data.forEach(doc => {
            console.log(doc.id, doc.data())
            results.push({
                docId: doc.id,
                ...doc.data() // Representa el documento actual
            })
        })
    }

    return {
        fetchproductCrema
    }

}

export default usePasoFresa
