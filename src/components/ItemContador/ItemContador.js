import { useState } from "react"

const ItemContador = ({ stock, btnAgregar }) => {
    const [contador, setContador] = useState(1)
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    return (
        <div>
            <div>
                <button onClick={() => btnAgregar(contador)}>Agregar al carrito</button>
            </div>
            <h3>Cantidad: {contador}</h3>
            <button onClick={restar}>   -   </button>
            <button onClick={sumar}>   +   </button>

        </div>
    )
}

export default ItemContador;