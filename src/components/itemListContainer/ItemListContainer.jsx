

// imports
import './css/style.css'
import ItemList from './ItemList'
import hocFilterProducts from '../../hoc/hocFilterProducts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDocs, collection,query, where } from 'firebase/firestore'
import db from '../../db/db.js'



// componente funcional
const ItemListContainer = () => { //no funciona el hoc por la logica de filtrado por categorias - ver como solucionarlo
  const [products, setProducts]=useState([])
  const {idCategory} = useParams()

  const getProducts = () => {
    const productsRef = collection (db, "products")

    getDocs(productsRef)
      .then ((dataDb) => {
        const data = dataDb.docs.map((productDb)=>{
        return { id: productDb.id, ...productDb.data()} //spread porque no puede haber objeto dentro de objeto
      })

      setProducts(data)
    })
    
  }

    useEffect(() => {
      if(idCategory) {
        getProductsByCategory()
    }else{
      getProducts()
    }
   }, [idCategory])

  
      const getProductsByCategory =()=>{
        const productsRef = collection(db, "products")
        const queryFilter = query(productsRef, where("category", "==", idCategory))

        getDocs(queryFilter)
        .then((dataDb)=> {
          const data=dataDb.docs.map((productDb)=>{
            return { id: productDb.id, ...productDb.data()} 
          })

          setProducts(data)

        })

      }

  return (
    <div className='container-fluid'>
          <div className="fm_main row justify-content-center">
            <h1 className="fm__h1 col-md-8 col-sm 3 text-align-center m-4">
                Bienvenidos a una nueva experiencia
            </h1>
          </div>
      <ItemList products ={products}/>
    </div>

  )
}


const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

//export
export default ItemListContainerWithHoc