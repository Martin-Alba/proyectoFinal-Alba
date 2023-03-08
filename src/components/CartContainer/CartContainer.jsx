import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const { cartList, cleanCart } = useCartContext()
    return (
        <div>
            {
                cartList.map(prodCart => (
                    <label key={prodCart.id}>
                        <div>
                            <img src={prodCart.img} className='w-25'></img>
                            Nombre: {prodCart.name}
                            Cantidad: {prodCart.amount}
                            precio: {prodCart.price}
                        </div>
                    </label>
                ))
            }
            <button onClick={cleanCart}>Vaciar carrito</button>
        </div>
    )
}

export default CartContainer