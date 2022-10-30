import CardProducto from './CardProducto';
import { ItemListado } from './productos';



const ItemList = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {ItemListado.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <CardProducto title={card.title} imageSrc={card.image} Descripcion={card.descripcion} Price={card.price} onAdd={card.agregar} Id={card.id}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList