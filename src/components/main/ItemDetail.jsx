import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "./ItemCount"

//Vista Ver Detalle de Productos

const ItemDetail = ({ item }) => {
    const [show, setShow] = useState(true);
    const { addToCart } = useContext(CartContext);
    const onAdd = (qty) => {
        setShow(false);
        addToCart(item, qty);
    };

    return (
        <div className="card text-center mb-4 mt-4">
            <div className="card-body">
                <h3 className="card-title"> {item.title}</h3>
                <p className="card-text text-secondary">{item.descripcion}</p>
                <p className="card-title bold"> ${item.price} </p>
                {
                    show
                        ? (<ItemCount stock={item.stock} onAdd={onAdd} />)
                        : (<Link to='/cart' className="card btn btn-lg rounded-2 mb-4 ms-2"> Ver carrito </Link>)
                }
                <Link to='/' className="card btn btn-lg rounded-2 mb-4 ms-2"> Seguir comprando </Link>
                <img src={item.image} alt={item.title} width={500} className='img-fluid'></img>
            </div>
        </div>
    )
}

export default ItemDetail