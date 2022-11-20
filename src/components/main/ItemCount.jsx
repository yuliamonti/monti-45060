import { useState } from 'react';

const ItemCount = ({ stock, onAdd, initial = 1 }) => {
    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    const agregar = () => {
        onAdd(cantidad);
    };
    const reset = () => {
        setCantidad(0)
    } 

    return (
        <div>
            <button onClick={restar} className="btn btnCont light lg btn-outline-secondary btn-lg mb-1 ms-2 mx-auto" > - </button>
            <button className="btn btnCont light lg btn-outline-secondary btn-lg mb-1 ms-2 mx-auto" > {cantidad} </button>
            <button onClick={sumar} className="btn btnCont light lg btn-outline-secondary btn-lg  mb-1 ms-2 mx-auto" > + </button><br/>
            <button onClick={agregar} className="btn  light lg btn-outline-secondary btn-lg  mb-4 ms-2 mx-auto" > Agregar al Carrito </button><br/>
            <button onClick={reset} className="btn  light lg btn-outline-secondary btn-lg  mb-4 ms-2 mx-auto" > Vaciar Carrito </button><br />
        </div>
    );
};
export default ItemCount
