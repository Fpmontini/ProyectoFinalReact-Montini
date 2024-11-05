//imports
import './css/style.css';
import { Link } from 'react-router-dom'

//componente
const Item = ({ product }) => {
  return (
            <div className="fm__cards col-md-3 col-sm-12 m-2">
                <div className="card-img fm__cards__img">
                    <img src={product.image} alt={product.name} /> 
                </div>
                <div className="fm__cards__description"> 
                    <h2>Modelo: {product.name}</h2>
                    <p>Precio: u$s{product.price}</p>
                    <Link to={"/detail/"+ product.id} className='fm__link'>Mas info</Link>
                </div>
            </div>
  );
}


//exports
export default Item;
