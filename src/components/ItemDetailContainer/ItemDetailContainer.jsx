import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { gFetch } from "../../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [product, setProductsDetail] = useState({})
    const { idProduct } = useParams()
    const { cartList } = useCartContext()

    useEffect(() => {
        if (idProduct) {
            gFetch()
                .then(resp => setProductsDetail(resp.find(products => products.id === idProduct)))
        }
    }, [idProduct])

    console.log('cartList: ',cartList);
    return (
        <ItemDetail product={product}/>
    )

}

export default ItemDetailContainer