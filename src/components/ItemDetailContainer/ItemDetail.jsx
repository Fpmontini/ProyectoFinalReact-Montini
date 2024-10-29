// imports

import "./css/style.css"
import { useNavigate } from "react-router-dom"

//componente

const ItemDetail = ({product}) => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1) 
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
                        <p>Precio: ${product.price}</p>  
                        <button onClick={handleBack} className="fm__link">
                            Volver
                        </button>     
                    </div>
                    
                </div>
        </div>
    )
}

export default ItemDetail