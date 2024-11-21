

import './App.css'
import NavBar from './components/navBar/navBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ItemListContainerWithHoc from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import { ToastContainer } from 'react-toastify'
import Cart from './components/cart/Cart.jsx'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (

    <div className='fm__main'>
      <BrowserRouter>  
        <CartProvider>
         <NavBar/>
         <ToastContainer 
         theme="light"/>

        <Routes>
          <Route path="/" element={<ItemListContainerWithHoc/>} />
          <Route path="/category/:idCategory" element={<ItemListContainerWithHoc/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

        <Footer/>   
        </CartProvider> 
            
      </BrowserRouter>
    </div>
  )
}

export default App
