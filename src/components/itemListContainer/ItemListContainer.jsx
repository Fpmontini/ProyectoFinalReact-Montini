

// imports
import './css/style.css'


// componente funcional
function ItemListContainer({bienvenida}) {
  return (
    <div className='container-fluid'>
        <div className="fm_main row justify-content-center">
            <h1 className="fm__h1 col-md-8 col-sm 3 text-align-center m-4">
                {bienvenida}
            </h1>
        </div>
        
    </div>
  )
}


//export
export default ItemListContainer