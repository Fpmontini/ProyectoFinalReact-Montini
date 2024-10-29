
//imports

import { useState, useEffect } from "react"
import Contador from "./Contador"
import ItemListContainer from "../itemListContainer/ItemListContainer"

// componente

const ContadorContainer = () => {

    const [contador, setContador ] = useState(0)
    const [toggle, setToggle] = useState(true)

    const aumentarContador = ()=>{
        setContador ( contador+1)

    }

    const alternarToggle = ()=> {
      setToggle(!toggle)
    }
   
    // se ejecuta solo al montar el componente
    // ej: llamadas a api, suscripciones a eventListener
    useEffect(()=>{
      console.log(" 1er useEffect")
    }, [])

    // se ejecuta en el montaje y tambien cada vez que se actualice la variable
    // ej: para realizar acciones especificas cuando una variable dependiente cambie
    useEffect (() => {
      console.log ("2do useEffect")
    }, [contador])

    // se ejecuta en el montaje y se ejecuta cuando cualquier variable se acutalice
    // ej: para observar el comportamiento del usuario
    useEffect (() => {
      console.log ("3er useEffect")
    })


  return (
    <>
    <Contador contador={contador} aumentarContador = {aumentarContador}/>
    <div>
      <p>Valor Toggle: {toggle.toString()}</p>
      <button onClick={alternarToggle}>Alternar Toggle</button>
      {
        toggle === true && <ItemListContainer />
      }
    </div>
    </>
  )
}


//exports

export default ContadorContainer