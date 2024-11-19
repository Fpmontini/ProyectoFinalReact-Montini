// imports
import "./css/style.css"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import db from "../../db/db.js"

//componente

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})
    const {idProduct} = useParams()

    const getProductById = () => {
        const docRef = doc(db, "products", idProduct)
        getDoc(docRef)
        .then((dataDb)=>{
            const data ={ id: dataDb.id, ...dataDb.data()}
            setProduct(data)

        })
    }

    useEffect (()=>{
        getProductById()
        }, [])

  return (
  
        <ItemDetail product={product}/>
  
  )
}


//exports
export default ItemDetailContainer
