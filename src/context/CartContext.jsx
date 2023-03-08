import { createContext, useContext, useState } from "react"

const CartContext = createContext([])
export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider  = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addCart = (product) => {
        setCartList([
            ...cartList,
            product
        ])
    }

    const cleanCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addCart,
            cleanCart
        }}>
            {children}
        </CartContext.Provider>
        )
}