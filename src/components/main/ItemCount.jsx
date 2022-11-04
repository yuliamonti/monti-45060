import { useState } from 'react';

const ItemCount = (stock = 0) => {
    const [cantidad, setCantidad] = useState(0);

    const sumar = (stock = 20) => {
        if (cantidad >= 0 && cantidad < 20) {
            setCantidad(cantidad + 1)
        }
    }
    const restar = () => {
        if (cantidad < 20 && cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }
    const reset = () => {
        setCantidad(0)
    }

    return (
        <div>
            <button className="btn light lg btn-outline-secondary btn-lg rounded-2 mb-1 ms-2 mx-auto" onClick={restar}> - </button>
            <button className="btn light lg btn-outline-secondary btn-lg rounded-2 mb-1 ms-2 mx-auto" > {cantidad} </button>
            <button onClick={sumar} className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-1 ms-2 mx-auto" > + </button>
            <br />
            <br />
            <button onClick={reset} className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-4 ms-2 mx-auto" > Vaciar </button>
        </div>
    );
};
export default ItemCount
