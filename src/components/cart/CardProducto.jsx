import ItemCount from './ItemCount'

export const onAdd = (onAdd) => {
    console.log('Producto agregado')
}
function CardProducto ({title, imageSrc, Descripcion}) {
    return (
        <>
            <div className="card text-center">
                <img src={imageSrc} alt="Imagen de Producto" className='img-fluid'></img>
                <div className="card-body">
                    <h3 className="card-title"> {title} </h3>
                    <p className="card-text text-secondary"> {Descripcion} </p>
                    <ItemCount/>
                    <button className="btn light lg btn-outline-secondary btn-lg  rounded-2 mb-4 ms-2 mx-auto" onClick={onAdd}> Agregar </button> 
                </div>
            </div>
            </>
    )
}
export default CardProducto;