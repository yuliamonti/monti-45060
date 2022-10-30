import ItemCount from "./ItemCount"
import champu from '../../Imagenes/champu-solido-min.JPG'

const ItemDetail = () => {
    const onAdd = () => console.log();

    return (

        <div className="card text-center">
            <div className="card-body">
                <h3 className="card-title"> Champú Sólido </h3>
                <p className="card-text text-secondary"> Fortalecedor, humectante, natural, libre de tóxicos </p>
                <p className="card-title bold"> $400 </p>
                <ItemCount stock={10} onAdd={onAdd} />
                <img src={champu} alt="Imagen de Producto" width={500} className='img-fluid'></img>
            </div>
        </div>

    )


}

export default ItemDetail