

const Contador = ({contador, aumentarContador}) => {
  return (
    <div>
    <p>{contador}</p>
    <button onClick={aumentarContador}>+</button>
    </div>
  )
}

export default Contador