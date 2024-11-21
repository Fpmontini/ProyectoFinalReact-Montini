//imports
import { useState, useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from 'react-toastify'
import "./css/style.css"



// componente

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "", 
        phone: "",
        email: ""
    })

    const [idOrder, setIdOrder] = useState(null)
    const {cart, totalPrice, deleteCart} = useContext(cartContext)

    const handleChangeInput = (event) => {

    setDataForm ({...dataForm, [event.target.name]: event.target.value })


}

const handleSubmitForm = async (event)=>{
    event.preventDefault()

    const order = {
        buyer: {...dataForm},
        products: [...cart],
        date: Timestamp.fromDate(new Date()),
        total: totalPrice(),

    }

 
     const response = await validateForm(dataForm)
     if(response.status === "succes"){
     uploadOrder(order)
     }else{
      toast.error(response.message)
     }
}


    const uploadOrder =(newOrder) =>{
       const orderRef = collection(db, "orders")

       addDoc(orderRef, newOrder)
       .then((response)=>{
        setIdOrder(response.id)
       })
        .finally(()=>{
            deleteCart()
            toast.success("Tu orden ha sido generada correctamente")
        })

     }

    
  return (
    <div className=" checkout-container">
       {
        idOrder === null ? (
            <form className="checkout-form"onSubmit = {handleSubmitForm}>
                <input type="text" name="fullname" value = {dataForm.fullname} onChange={handleChangeInput} placeholder="Nombre"/>
                <input type="number" name="phone" value = {dataForm.phone} onChange={handleChangeInput} placeholder="Telefono"/>
                <input type="email" name="email" value = {dataForm.email} onChange={handleChangeInput} placeholder="Email"/>

                <button className="button-submit" type= "submit">Finalizar Compra</button>
            </form>
        ): (
            <div>
                <h2>Orden generada correctamente!</h2>
                <p className="important-p">Tu numero de orden es: {idOrder}</p>
                <Link to = "/" className="button-back">Volver al inicio</Link>
            </div>
        )
       }
        
        
      
    </div>
  )
}


// exports

export default Checkout
