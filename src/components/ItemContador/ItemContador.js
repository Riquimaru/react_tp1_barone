import { useState } from "react"

const ItemContador = ({stock})=>{
const [contador, setContador] = useState(1)
const sumar = ()=>{
    if (contador < stock){
    setContador (contador+1)
    }
}
const restar = () =>{
    if (contador > 1){
    setContador(contador-1)
    }
}
return(
    <div>
        <h3>Cantidad: {contador}</h3>
        <button onClick={sumar}>Agregar</button>
        <button onClick={restar}>Restar</button>
    </div>
)
}

export default ItemContador;