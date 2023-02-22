import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/gFetch"



const ItemDetailContainer = () => {

    const [product, setProductsDetail] = useState({})
    const { idProduct } = useParams()

    useEffect(() => {
        if (idProduct) {
            gFetch()
                .then(resp => setProductsDetail(resp.find(products => products.id === idProduct)))
        }
    }, [idProduct])

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
        </div>
    )

}

export default ItemDetailContainer