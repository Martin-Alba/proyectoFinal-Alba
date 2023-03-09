import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const { cartList, cleanCart } = useCartContext()
    return (
        <div>
            {
                cartList.map(prodCart => (
                    <label key={prodCart.id}>
                        <div className="d-flex flex-column w-75 m-2">
                            <img src={prodCart.img} className='w-100'></img>
                            <p>Nombre: {prodCart.name}</p>
                            <p>Cantidad: {prodCart.amount}</p>
                            <p>precio: ${prodCart.price}</p>
                        </div>
                    </label>
                ))
            }
            <button onClick={cleanCart}>Vaciar carrito</button>
        </div>
    )
}

export default CartContainer