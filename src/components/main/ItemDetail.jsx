import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
    const [show, setShow] = useState(true);
    const { addToCart} = useContext(CartContext);


    const onAdd = (qty) => {
        setShow(false);
        addToCart(item, qty);
    };

    return (
        <div className="card cardMW text-center mb-4 mt-4">
            <div className="card-body">
                <h3 className="card-title"> {item.title}</h3>
                <p className="card-text text-secondary">{item.descripcion}</p>
                <p className="card-title bold"> ${item.price} </p>
                {
                    show
                        ? (<ItemCount stock={item.stock} onAdd={onAdd}/>)
                        : (<Link to='/cart' className="btn  light lg btn-outline-secondary text-center btn-lg  mb-4 ms-2 mx-auto"> Ver carrito </Link>)
                }
                <Link to='/' className="btn  light lg btn-outline-secondary text-center btn-lg  mb-4 ms-2 mx-auto" > Seguir comprando </Link>
                <img src={item.image} alt={item.title} width={400} className='img-fluid align-self-center '></img>
            </div>
        </div>
    )
}

export default ItemDetail