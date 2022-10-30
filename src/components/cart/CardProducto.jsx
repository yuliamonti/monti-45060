import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

function CardProducto({ title, imageSrc, Descripcion, Price, Id }) {
    return (
        <>
            <div className="card text-center">
                <img src={imageSrc} alt="Imagen de Producto" className='img-fluid'></img>
                <div className="card-body">
                    <h3 className="card-title"> {title} </h3>
                    <p className="card-text text-secondary"> {Descripcion} </p>
                    <p className="card-title bold"> ${Price} </p>
                    <Link to={`/item/${Id}`} className="btn btn-secondary btn-lg  rounded-2 mb-4 ms-2 ">ver detalle</Link>
                    <ItemCount />

                </div>
            </div>
        </>
    )
}
export default CardProducto