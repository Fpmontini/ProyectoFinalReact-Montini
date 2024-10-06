import './App.css'
import NavBar from './components/navBar/navBar.jsx'
import Products from './components/Products/Products.jsx'
import Footer from './components/Footer/Footer.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'
//import Cart from './components/cartWidget/CartWidget.jsx'

function App() {

  return (
    <div className='fm__main'>
      <NavBar/>
      <ItemListContainer greeting ={'Bienvenidos a una nueva experiencia'}/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
