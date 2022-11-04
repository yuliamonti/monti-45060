import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

function CardProducto({ producto }) {
    return (
        <>
            <div className="card text-center">
                <img src={producto.image} alt="Imagen de Producto" className='img-fluid'></img>
                <div className="card-body">
                    <h3 className="card-title"> {producto.title} </h3>
                    <p className="card-text text-secondary"> {producto.descripcion} </p>
                    <p className="card-title bold"> ${producto.price} </p>
                    <Link to={`/item/${producto.id}}`} className="btn btn-secondary btn-lg  rounded-2 mb-4 ms-2 ">ver detalle</Link>
{                    <ItemCount />}
                </div>
            </div>
        </>
    )
}
export default CardProducto