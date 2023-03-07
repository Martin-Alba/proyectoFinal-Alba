import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartContextProvider  = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addCart = (product) => {
        setCartList([
            ...cartList,
            product
        ])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addCart
        }}>
            {children}
        </CartContext.Provider>
        )
}