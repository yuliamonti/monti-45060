import CardProducto from './CardProducto';

const ItemList = ({items}) => {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
                {items.map((producto) => {
                    return <CardProducto producto={producto} key={producto.id}/>
            })}
        </div>
    )
}

export default ItemList