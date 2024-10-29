// imports
import './css/style.css'
import monbroLogo from './assets/banner.webp'
import { Link } from 'react-router-dom'
import Cart from '../cartWidget/CartWidget'

// componente funcional

const NavBar = () => {
  return (
    <header className="fm__header-container">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={monbroLogo} alt="logo-monbro" width="400" height="150"/>
          </Link>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md">
        <div className="conta iner">
          <div className="container-fluid"></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
                <Link to="/category/volantes" className = "nav-link category">Volantes</Link>
                <Link to="/category/cockpits" className = "nav-link category">Cockpits</Link>
                <Link to="/category/pedaleras" className = "nav-link category">Pedaleras</Link>
                <a className="nav-link" href="...">FAQ</a>
                <a className="nav-link" href="...">Contacto</a>
                <a className="nav-link" href="...">Nosotros</a>
                <a className="nav-link"><Cart/></a>
              </div>
            </div>
        </div>
      </nav>
    </header>
  )
}

//export
export default NavBar