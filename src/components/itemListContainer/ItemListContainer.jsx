

// imports
import './css/style.css'
import ItemList from './ItemList'
import hocFilterProducts from '../../hoc/hocFilterProducts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProducts } from '../../data/data'



// componente funcional
const ItemListContainer = () => { //no funciona el hoc por la logica de filtrado por categorias - ver como solucionarlo
  const [products, setProducts]=useState([])
  const {idCategory} = useParams()

    useEffect(() => {
      getProducts()
        .then((data)=>{
          if(idCategory){
            const productsFilter = data.filter((product)=> product.category === idCategory)
            setProducts(productsFilter)
          }else{
            setProducts(data)
          }
        })
      .catch((error) =>{
        console.error(error)
      })
      
    }, [idCategory])

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