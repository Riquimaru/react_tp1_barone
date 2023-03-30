import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {
    const { cart, totalQuantity } = useContext(CartContext)

    return(
        <div to='/carrito'>
            <div>
                {cart.map(prod=>(
                    <div key={prod.id}>
                    <h2>{prod.nombre}</h2>
                    <img style={{height: 300}} src={prod.imagen}/>
                    <p>Precio individual: {prod.precio}</p>
                    <p>Cantidad: {prod.cont}</p>
                    <p>Precio final: {prod.precio*prod.cont}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;