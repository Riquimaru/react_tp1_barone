import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../ItemList/ItemList.css'
import ItemContador from "../ItemContador/ItemContador";
import { useNotification } from '../../notification/Notification'
import Comprar from "../Comprar/Comprar"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, nombre, precio, imagen, descripcion, stock, categoria, }) => {
    const [contador, setContador] = useState(0)
    const { addItem, mMensaje } = useContext(CartContext)
    const { setNotification } = useNotification()
    const Agregar = (cont) => {
        const carritoProducto = {
            id, nombre, precio, imagen, cont
        }
        setContador(cont)
        addItem(carritoProducto)
        setNotification('success', `Se agregó al carrito`, 1)
    }

    return (
        <div class="container">
            <div className="card align-items-center p-2" id="tarjeta">
                <img className="card-img-top" src={imagen} alt={id} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
                <ul className="list-group list-group-flush m-3">
                    <li className="list-group-item">Precio: {precio}</li>
                    <li className="list-group-item">Stock: {stock}</li>
                    <li className="list-group-item">Categoría: {categoria}</li>
                </ul>
                {
                    contador > 0 ? (
                        <Comprar />
                    ) : (
                        <ItemContador btnAgregar={Agregar} stock={stock} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail;