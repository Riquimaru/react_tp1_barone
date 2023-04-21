import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { bd } from '../../services/firebase/firebaseConfig'
import { useNotification } from '../../notification/Notification'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, totalPrice, limpiarCarrito } = useContext(CartContext);
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [direccion, setDireccion] = useState('')
    const { setNotification } = useNotification()

    const handleConfirm = async (e) => {
        e.preventDefault()
        const objOrder = {
            comprador: {
                nombre: nombre,
                apellido: apellido,
                direccion: direccion
            },
            items: cart,
            total: totalPrice
        }
        console.log(objOrder)
        const idProd = cart.map(prod => prod.id)
        const prodRef = query(collection(bd, 'productos'), where(documentId(), 'in', idProd))
        const prodDesdeFS = await getDocs(prodRef)
        const { docs } = prodDesdeFS
        const sinStock = []
        const batch = writeBatch(bd)

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockBd = dataDoc.stock
            const productoDelCarrito = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productoDelCarrito?.cont

            if (stockBd >= prodQuantity) {
                batch.update(doc.ref, { stock: stockBd - prodQuantity })
            } else {
                sinStock.push({ id: doc, ...dataDoc })
            }
        })
        if (sinStock.length === 0) {
            batch.commit()
            const orderRef = collection(bd, 'ordenes')
            const ordenAgregada = await addDoc(orderRef, objOrder)
            limpiarCarrito()
            setOrderId(ordenAgregada.id)
            setNotification('success', 'Compra realizada')
        } else {
            setNotification('error', 'Producto sin Stock')
        }
    }

    return (
        <div class="container">
            <h1>Checkout</h1>
            <h1>Datos de envío</h1>
            <div class="card">
            <div class="card-body">
            <form onSubmit={handleConfirm}>
                <div class="form-group">
                <label>
                    Nombre
                    <input type="text" class="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </label>
                </div>
                <div class="form-group">
                <label>
                    Apellido
                    <input type="text" class="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </label>
                </div>
                <div class="form-group">
                <label>
                    Dirección
                    <input type="text" class="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </label>
                </div>
                <p>Total: {totalPrice}</p>
                {orderId ? <h2>El id de su orden es: {orderId}</h2> : <button>Generar orden</button>}
            </form>
            </div>
            </div>
        </div>
    )
}

export default Checkout;