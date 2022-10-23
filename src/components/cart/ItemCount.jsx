import { useState } from 'react';

const ItemCount = (stock = 0)  => {
    const [cantidad, setCantidad] = useState(0);

    const sumar = (stock = 20) => { 
    if (cantidad >= 0 && cantidad < 20) {
        setCantidad (cantidad + 1)
        } else {
            setCantidad (0)
        }
    }
    const restar = (stock = 20) => { 
    if (cantidad <20 && cantidad > 0 ) {
        setCantidad (cantidad - 1)
    }
}

    return (
        <div>
            <p> {cantidad} </p>
            <button className="btn light lg btn-outline-secondary btn-lg rounded-2 mb-4 ms-2 mx-auto" onClick={restar}> - </button>
            <button className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-4 ms-2 mx-auto" onClick={sumar}> + </button>
            <br/>
        </div>
    );
};
export default ItemCount
