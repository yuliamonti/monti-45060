
function CardProducto ({title, imageSrc, Descripcion, greeting}) {
    return (
            <div className="card text-center">
                <img src={imageSrc} alt="Imagen de Producto" className='img-fluid'></img>
                <div className="card-body">
                    <h4 className="card-title "> {greeting}</h4>
                    <h3 className="card-title"> {title} </h3>
                    <p className="card-text text-secondary"> {Descripcion} </p>
                    <a href='#!' className="btn btn-outline-secondary rounded-0"> Comprar</a>
                </div>
            </div>
    )
}
export default CardProducto;