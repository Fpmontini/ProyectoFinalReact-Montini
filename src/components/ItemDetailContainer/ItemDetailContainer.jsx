// imports
import "./css/style.css"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import db from "../../db/db.js"

//componente

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState ({})
    const {idProduct} = useParams()

    const getProductById = () => {
        setLoading(true)
        const docRef = doc(db, "products", idProduct)
        getDoc(docRef)
        .then((dataDb)=>{
            const data ={ id: dataDb.id, ...dataDb.data()}
            setProduct(data)   
        })
        .finally(()=> setLoading(false))
    }

    useEffect (()=>{
       
        getProductById()
        
        }, [])

  return (
  
       <>
        {
         loading === true ? (<div>cargando...</div>): <ItemDetail product={product}/>
        }
       </> 
  
  )
}


//exports
export default ItemDetailContainer
