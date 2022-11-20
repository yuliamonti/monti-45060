import { Link } from 'react-router-dom';

const CardProducto = ({ producto }) => {

    return (
        <>
            <div className=" cardMW card text-center mb-4 mt-4 ">
                <img src={producto.image} alt="Imagen de Producto" className='image-fluid'></img>
                <div className="card-body">
                    <h3 className="card-title"> {producto.title} </h3>
                    <p className="card-text text-secondary"> {producto.descripcion} </p>
                    <p className="card-title bold"> ${producto.price} </p>

                    {/*ruta*/}
                    <Link to={`/detalle/${producto.id}`} className="btn btn-secundary btn-lg  mb-4 ms-2">Ver detalle</Link>
                    <br />
                    <Link to='/cart' className="btn btn-lg  mb-4 ms-2"> Ver carrito </Link>
                </div>
            </div>
        </>
    )
}

export default CardProducto