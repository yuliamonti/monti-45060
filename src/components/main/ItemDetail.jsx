import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
    const onAdd = (qty) => console.log(qty);

    return (
        <div className="card text-center">
            <div className="card-body">
                <h3 className="card-title"> {item.title}</h3>
                <p className="card-text text-secondary">{item.descripcion}</p>
                <p className="card-title bold"> ${item.price} </p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
                <img src={item.image} alt={item.title} width={500} className='img-fluid'></img>
            </div>
        </div>
    )
}

export default ItemDetail