// imports
import Item from "./Item"
import './css/style.css'


const ItemList = ({products}) => {
  return (
    <div className="container-fluid">
        <div className="row justify-content-around">
            {   
                products.map((product)=>(
                    <Item product={product} key={product.id}/>
                ))
            }          
        </div>
    </div>
  )
}

export default ItemList
