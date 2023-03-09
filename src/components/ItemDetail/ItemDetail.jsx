import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({product}) => {
    const { addCart } = useCartContext()

    function onAdd(amount) {
        console.log(amount)
        addCart({ ...product, amount })
    }

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

                    <button className="btn btn-outline-dark w-75 m-2">{product.stock}</button>
                </div>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail