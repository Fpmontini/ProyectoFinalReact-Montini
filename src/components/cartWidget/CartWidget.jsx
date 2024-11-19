//imports
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

//componente funcional

const CartWidget = () => {
  const { totalQuantity} = useContext(cartContext)

  const total = totalQuantity()

  return (
    <Link to="/cart">                                                       
    <i className="fa-solid fa-cart-shopping">{ total >= 1 && total }</i> 
    </Link>
  )
}

//export
export default CartWidget