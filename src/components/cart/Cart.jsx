import { useContext } from 'react'
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { CartContext } from '../../context/cartContext';

//Carrito con los productos seleccionados
function Cart() {
    const { cart, clear, removeItem, totalPrecio } = useContext(CartContext);

    if (cart.length === 0)
        return (
            <Alert variant="success" className="container card text-center mb-4 mt-4">
                <Alert.Heading> No has seleccionado ningún producto. Puedes seleccionar a continuación.</Alert.Heading>
                <hr />
                <Link to='/' className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-4 mx-auto"> Home </Link>
            </Alert>
        );

    return (
        <div className="card text-center mb-4 mt-4">
            {cart.map((prod) => (
                <div key={prod.id}>
                    <img src={prod.image} alt={prod.title} width={300} className='img-fluid'></img>
                    <div>
                        <h2 className="card-title mb-4 ms-2"> Seleccionaste: {prod.title}</h2>
                        <p className="card-text text-secondary"> Cantidad: {prod.cantidad}</p>
                        <p className="card-text text-secondary"> Precio: {prod.price}</p>
                        <p className="card-text text-secondary"> Subtotal: {prod.cantidad * prod.price}</p>
                        <button onClick={() => removeItem(prod.id)} className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-4 mx-auto"> Eliminar producto </button>
                    </div>
                </div>
            ))}
            <hr/>
            <h3 className="card-title bold mb-4 mt-4" >Total: ${totalPrecio()}</h3>
            <Link to='/' className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-4 mx-auto"> Seguir Comprando </Link>
            <button onClick={clear} className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-4 mx-auto" > Vaciar Carrito </button>
        </div>
    );
}

export default Cart;