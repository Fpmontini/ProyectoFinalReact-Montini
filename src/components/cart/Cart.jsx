//import

import "./css/style.css"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"



//componente

const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext (cartContext)

    // early return

    if(cart.length === 0){
        return (
            <div className="cart-container cart-description">
                <h2>EL CARRITO ESTA VACIO! </h2>
                <Link to ="/" className="button-back"> ver Productos </Link>
            </div>
        )
    }



  return (
    <div className="cart-container">
        {
            cart.map((productCart) => (
                <div key={productCart.id}>
                    <img src = {productCart.image[0]} alt="Productos del Carrito" width={350}/>
                <div className="cart-description">
                    <p> Modelo:{productCart.name} </p>
                    <p>Precio por unidad: u$s {productCart.price}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio parcial: u$s {productCart.quantity*productCart.price}</p>
                    <button className="button-sup" onClick={() => deleteProductById(productCart.id)}>Eliminar Producto</button>
                </div>
                </div>

            ))
            }
        <p className="important-p">Precio Total: u$s {totalPrice()}</p>\
        <button className="button-back" onClick={deleteCart}>Vaciar carrito</button>  
        <Link to="/checkout" className="order-button"> Continuar con mi compra </Link>
                                                                                                                                                   
    </div>
  )
}                                                           

export default Cart
