import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { gFetch } from "../../utils/gFetch"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetailContainer = () => {

    const [product, setProductsDetail] = useState({})
    const { idProduct } = useParams()
    const {addCart, cartList} = useContext(CartContext)

    useEffect(() => {
        if (idProduct) {
            gFetch()
                .then(resp => setProductsDetail(resp.find(products => products.id === idProduct)))
        }
    }, [idProduct])

    function onAdd(amount=2){
        console.log(amount)
        addCart({...product, amount})
    }
    console.log('cartList: ',cartList);
    return (
        <div className="d-flex justify-content-center flex-wrap m-5 text-center" >
            <div className="card w-25 m-2">
                <div className="card-header">
                    <h2>{product.name}</h2>
                </div>
                <div className="body-card p-2">
                    <img className="w-100" src={product.img} alt="" />
                    <p>{product.desc}</p>
                </div>
                <div>
                
                    <button className="btn btn-outline-dark w-75 m-2">Comprar</button>
                </div>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )

}

export default ItemDetailContainer