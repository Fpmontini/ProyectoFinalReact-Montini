//imports 
import "./css/style.css"
import React from 'react'
import { useState } from 'react'


const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1)
    
    //resta 1 al contador
    const handleClickSubtract =() => {
        if (count > 1){
            setCount (count -1)
        }
    }

    const handleClickAdd =() => {
       if (count < stock){

       } setCount (count +1)
    }

  return (
    <div className="item-count-container">
      <div className="count-container"> 
        <button className= "button-count" onClick={handleClickSubtract}>-</button>
        <p>{count}</p>
        <button className= "button-count" onClick={handleClickAdd}>+</button>  
      </div>
        <button className= "button-cart" onClick={ () => addProduct(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
