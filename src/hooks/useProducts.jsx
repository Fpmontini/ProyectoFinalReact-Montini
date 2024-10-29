// imports
import { getProducts } from "../data/data"
import { useState, useEffect } from "react"


//componente 
const useProducts = () =>{
    const [products, setProducts] = useState([])


  useEffect (() => {
    getProducts()
    .then((dataProducts)=> {
      setProducts(dataProducts)
    })
    .catch ((error) => {
      console.error(error)
    })
  },[])

  return {products}
} 

//exports

export default useProducts