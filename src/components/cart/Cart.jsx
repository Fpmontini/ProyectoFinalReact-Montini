//import

import { useContext } from "react"
import { cartContext } from "../../context/cartContext"



//componente

const Cart = () => {
    const {cart, totalPrice, deleteProductById} = useContext (cartContext)
  return (
    <div>
        {
            cart.map((productCart) => (
                <div key={productCart.id}>
                    <img src = {productCart.image}/>
                    <p>{productCart.name} </p>
                    <p>Precio: $ {productCart.price}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio parcial: $ {productCart.quantity*product.price}</p>
                    <button onClick={() => deleteProductById(productCart.id)}>Eliminar Producto</button>
                </div>

            ))
            }
        <p>Precio Total: {totalPrice()}</p>\
        <button onClick={deleteCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
