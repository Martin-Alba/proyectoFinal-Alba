import { useEffect, useState } from "react"
import { gFetch } from '../../utils/gFetch'
import { Link, useParams } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"
import './ItemListContainer.css'
export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {
        if (idCategory) {
            gFetch()
                .then(resp => setProducts(resp.filter(product => product.category === idCategory)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            
            gFetch()
                .then(resp => setProducts(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [idCategory])

    return (
        <>
            {loading ?
                <div className="loadingIcon">
                    <ClipLoader color={'#000303'} loading={loading} size={150}/>
                </div>
                :
                <div className="d-flex justify-content-center flex-wrap m-5 text-center">
                    {products.map(product => (
                        <div key={product.id} className="card w-25 m-2">
                            <div className="card-header fw-bold">
                                {product.name}
                            </div>
                            <div className="card-body">
                                <img className="w-100 m-1" src={product.img} alt="" />
                                <label>Precio: ${product.price}</label>
                            </div>
                            <div className="card-footer">
                                <Link to={`/detalle/${product.id}`}>
                                    <button className="btn btn-outline-success w-75 fw-bold">Detalles</button>
                                </Link>
                            </div>
                        </div>
                    ))
                    }
                </div>
            }
        </>
    )
}