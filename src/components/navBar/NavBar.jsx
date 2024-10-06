// imports
import './css/style.css'
import monbroLogo from '../../assets/banner.webp'
import Cart from '../cartWidget/CartWidget'
// componente funcional

function NavBar() {
  return (
    <header className="fm__header-container">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand"  href="./index.html">
            <img src={monbroLogo} alt="logo-monbro" width="400" height="150"/>
          </a>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <div className="container-fluid"></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                <a className="nav-link" href="./html/products.html">Productos</a>
                <a className="nav-link" href="./html/faq.html">FAQ</a>
                <a className="nav-link" href="./html/contact.html">Contacto</a>
                <a className="nav-link" href="./html/about-us.html">Nosotros</a>
                <a className="nav-link"><Cart /></a>
              </div>
            </div>
        </div>
      </nav>
    </header>
  )
}

//export
export default NavBar