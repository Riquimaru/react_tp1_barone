import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, removeItem, totalPrice } = useContext(CartContext)

    if (cart.length<1){
        return <h2 style={{marginTop:25}}>No hay productos en el carrito</h2> 
    }

    return(
        <div to='/carrito'>
            <div>
                {cart.map(prod=>(
                    <div key={prod.id}>
                    <h2>{prod.nombre}</h2>
                    <img style={{height: 300}} src={prod.imagen}/>
                    <p>Precio individual: {prod.precio}</p>
                    <p>Cantidad: {prod.cont}</p>
                    <p>Precio: {prod.precio*prod.cont}</p>
                    <button onClick={()=>removeItem(prod.id)} style={{marginBottom:35}}>Remover item</button>
                    </div>
                ))}
                    <h2>TOTAL COMPRA: {totalPrice}</h2>
                    <Link to='/checkout'><button>Finalizar Compra</button></Link>
            </div>
        </div>
    );
}

export default Cart;