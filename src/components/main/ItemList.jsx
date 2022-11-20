import CardProducto from './CardProducto';

const ItemList = ({ items }) => {
    return (
        <div className='contenedor'>
            <div className="grid">
                {items.map((producto) => {
                    return <CardProducto producto={producto} key={producto.id} />
                })}
            </div>
        </div>
    )
}

export default ItemList