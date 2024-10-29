// imports
import './css/style.css'
import logoFooter from'./assets/LOGO.webp'


// componente funcional
function Footer() {
  return (
<div>
    <footer>
        <div className="container-fluid fm__footer__container">
            <div className="row">
                <div className="fm__footer__container__email col-md-4 mb-4 d-flex flex-column align-items-center justify-content-center">
                    <h6>E-MAIL</h6>
                    <a href="mailto:monbrosimracing@mail.com" className="text-light">monbrosimracing@gmail.com</a>
                </div>
                <div className="fm__footer__container__links col-md-4 mb-4 d-flex flex-column align-items-center justify-content-center">
                    <h6>LINKS</h6>
                    <a href="https://twitter.com/monbrosimracing" target="_blank" className="text-light"><i
                        className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/monbrosimracing/?hl=es" target="_blank" className="text-light"><i
                        className="fab fa-instagram"></i></a>
                    <a href="../html/contact.html" className="text-light"><i className="fa-solid fa-envelope"></i></a>
                </div>
            <div className="fm__footer__container__logo col-md-4 mb-4 d-none d-md-block d-flex justify-content-center align-items-center">
                <img src={logoFooter} alt="Logo" className="img-fluid"/>
            </div>
        </div>
        <div className="row">
            <div className="fm__footer__container__copyright col-md-12 text-center">
            <p className="mb-0">Copyright © Francisco Montini - 2024</p>
            </div>
        </div>
        </div>
    </footer>
</div>
  )
}


//exports
export default Footer