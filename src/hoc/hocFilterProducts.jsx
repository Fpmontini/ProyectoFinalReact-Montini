// imports
import useProducts from "../hooks/useProducts"
import { useState } from "react"

//componente


const hocFilterProducts = (Component) => {

  return function (){
    const {products} = useProducts()
    const [query, setQuery]= useState("")

    const changeInput = (event) => {
        setQuery(event.target.value.toLowerCase())
    }

    const search = ()=> {
        const filterProducts = products.filter((product)=> (
            product.name.toLowerCase().includes(query)
        ))

        return filterProducts
    }

    return(
        <>
            <div>
                <input className="item__search" type ="text" placeholder="Buscar..." onChange={changeInput}/> 
            </div>
            <Component products={search()}/> 
        </>
    )
  }
}

export default hocFilterProducts