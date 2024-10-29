// imports
import "./css/style.css"
import { useState, useEffect } from "react"
import {getProducts} from "../../data/data"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

//componente

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})
    const {idProduct} = useParams()

    useEffect (()=>{
        getProducts()
        .then((data)=> {
            const findProduct = data.find((productData) => productData.id === parseInt(idProduct))
            setProduct(findProduct)
        })
    }, [])
  return (
  
        <ItemDetail product={product}/>
  
  )
}


//exports
export default ItemDetailContainer
