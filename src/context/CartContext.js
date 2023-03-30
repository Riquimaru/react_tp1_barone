import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        } else {
        console.log('El producto ya esta agregado')
        }
    }

    const removeItem = (id) => {
        const cartUpdated =  cart.filter(producto => producto.id !== id)
        setCart(cartUpdated)
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

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity}}>
         { children }
        </CartContext.Provider>
    )
}