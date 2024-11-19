// imports

import "./css/style.css"
import { useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
//componente

const ItemDetail = ({product}) => {
    const [showItemCount, setShowItemCount] = useState (true)
    const {addProductInCart} = useContext(cartContext)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1) 
    }

    const addProduct = (count) => {
        
        const productCart = { ...product, quantity: count}
        addProductInCart(productCart)

        //ocultar itemCount
        setShowItemCount(false)
    }

    return (
        <div className="fm__detail container-fluid row justify-content-around">
            <h1 className="fm__h1">Nuestros Productos</h1>
                <div className="detail__card col-md-3 col-sm-12 m-2">
                    <div className="card-img detail__img">
                        <img src={product.image} alt={product.name} /> 
                    </div>
                    <div className="detail__description"> 
                        <h2>Modelo: {product.name}</h2>
                        <p>{product.description}</p>
                        <p>Precio: u$s{product.price}</p>

                        {
                            showItemCount === true ?
                            ( <ItemCount stock={product.stock} addProduct={addProduct}/>)
                            :
                            (<Link to ="/cart" className="item-count-container button-checkout">Finalizar Compra</Link>)

                        }

                       
                        <div className="item-count-container">
                            <button className="button-back fm__link" onClick={handleBack} >
                                Volver
                            </button>     
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default ItemDetail