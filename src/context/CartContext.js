import { createContext, useState } from "react"
import { useNotification } from '../notification/Notification'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [mensaje, setMensaje] = useState("")
    const { setNotification } = useNotification()
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        } else {
            setNotification('success', `Se agrego correctamente ${productToAdd.cont} ${productToAdd.nombre}`, 1)
        }
    }

    const removeItem = (id) => {
        const cartUpdated =  cart.filter(producto => producto.id !== id)
        setCart(cartUpdated)
        setNotification('success', `Se eliminó el producto`, 1)
    }

    const isInCart = (id) => {
        return cart.some(producto => producto.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(producto => {
            totalQuantity += producto.cont
        })
        return totalQuantity
    }

    const getTotalPrecio = () =>{
        let totalPrecio = 0;
        cart.forEach(producto =>{
            totalPrecio += producto.precio*producto.cont
        })
        return totalPrecio
    }

    const limpiarCarrito = () =>{
        setCart([])
    }

    const totalQuantity = getTotalQuantity()
    const totalPrice = getTotalPrecio()
    const mMensaje = mensaje;

    return (
        <CartContext.Provider value={{cart, mMensaje, addItem, removeItem, totalQuantity, totalPrice, limpiarCarrito}}>
         { children }
        </CartContext.Provider>
    )
}