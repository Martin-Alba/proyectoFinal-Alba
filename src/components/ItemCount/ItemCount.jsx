import { useState } from "react"

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
    const [count, setCount] = useState(initial)

    const sum = () => {
        if (count < stock) {
            setCount(count+1)
        }
    }
    const minus = () => {
        if (count > initial) {
            setCount(count-1)
        }
    }


    return (
        <div className="card mt-5 w-25">
            <div className="card-body row">
                <div className="col">
                    <button className="btn btn-outline-dark w-100" onClick={sum}> + </button>
                </div>
                <div className="col">
                    <center>
                        <label>{count}</label>
                    </center>
                </div>
                <div className="col">
                    <button className="btn btn-outline-dark w-100" onClick={minus}> - </button>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-dark w-100" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount