// imports
import './css/style.css'
import cockpitBasic from '../../assets/basic.webp'
import cockpitPro from '../../assets/cockpit-pro.webp'
import cockpitGtPro from '../../assets/gt-pro.webp'
import AddCartButton from '../AddCartButton/AddCartButton'


// componente funcional

function Products() {

  return (
  <div>
    <h2 className="fm__h2">Nuestros Cockpits</h2>
    <div class="container-fluid">
      <div className="row justify-content-around"> 
        <div className=" fm__cards col-md-3 col-sm-12 m-2"> 
          <div className="card-img fm__cards__img">
            <img src={cockpitBasic} alt="cockpit-basic"/>
          </div>
          <div className="fm__cards__description">
            <h2>BASIC</h2>
            <p>Nuestro modelo <b>BASIC</b> esta construido con perfiles de aluminio tipo bosh lo
              que le da al conjunto una gran resistencia. Las columnas centrales son de perfiles 4080 mientras que el
              resto es de 4040.</p>
          </div>
          <div className='btn'>
          <AddCartButton/>
          </div>
        </div>
        <div className="fm__cards col-md-3 col-sm-12 m-2">
          <div className="card-img fm__cards__img">
            <img src={cockpitPro} alt="cockpit-pro"/>
          </div>
          <div className="fm__cards__description">
            <h2>PRO</h2>
            <p>El modelo <b>PRO</b> a diferencia del basic esta construido enteramente con
              perfiles 4080. Pensado para bases direct drive de muchos NM y potencia.</p>
          </div>
          <div className='btn'>
          <AddCartButton/>
          </div>
        </div>
        <div className="fm__cards col-md-3 col-sm-12 m-2">
          <div className="card-img fm__cards__img ">
            <img src={cockpitGtPro} alt="cockpit-gtpro"/>
          </div>
          <div className="fm__cards__description">
            <h2>GT-PRO</h2>
            <p>Nuestro producto mas completo, el <b>GT-PRO</b>. Un conjunto robusto,
              totalmente regulable en altura, distancia y en inclinacion. Podes elegir configurarlo tipo GT o Formula,
              de alli su nomenclaura.</p>
          </div>
          <div className='btn'>
          <AddCartButton/>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

//export
export default Products