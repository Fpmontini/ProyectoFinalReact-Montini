//imports
import { createContext } from 'react'
import { useState } from 'react'

//componente

const cartContext = createContext()

const CartProvider = (children) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) =>{
        //comporbar si el producto esta en carrito
        const tempCart = [...cart]
        const indexProduct = cart.findIndex((productCart)=> productCart.id === newProduct.id)

        if (indexProduct >= 0){
            tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + newProduct.quantity   //sumar cantidades
        }else{
            setCart([...cart, newProduct]) //agrega producto nuevo
        }
 

    }

    const deleteProductById =(idProduct) => {
        const productFilter = cart.filter((productCart) => productCart.id !== idProduct )
        setCart(productFilter)
    }

    const deleteCart = ()=>{
        setCart ([])
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }


    const totalPrice = () => {
        const price = cart.reduce ((total, productCart) => total + (productCart.quantity*productCart.price), 0)
    }

  return (
    <cartContext.Provider value = { { cart, addProductInCart, totalQuantity, deleteProductById,deleteCart } }>
      {children}
    </cartContext.Provider >
  )
}

export {cartContext, CartProvider} 
