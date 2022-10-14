import champu from '../../Imagenes/champu-solido-min.JPG'
import acondicionador from '../../Imagenes/acondicionador-min.JPG'
import mascarilla from '../../Imagenes/mascarilla--min.JPG'
import CardProducto from './CardProducto'

const ListProductos= [
    {
        id: 1,
        title: 'Champú Sólido',
        descripcion: 'De Yerba Mate, Avena, Clavo de Olor; Romero y Manteca de Cacao',
        image: champu,
        greeting: 'Hola! Me solicitaron en la tarea'
    },
    {
        id: 2,
        title: 'Acondicionador Sólido',
        descripcion: 'Fortalecedor, humectante, natural, libre de tóxicos',
        image: acondicionador,
        greeting: 'Hola! Me solicitaron en la tarea'
    },
    {
        id: 3,
        title: 'Mascarilla Sólida',
        descripcion: 'Con carbón activado, suavemente exfoliante',
        image: mascarilla,
        greeting: 'Hola! Me solicitaron en la tarea'
    },
];

function Producto ()  {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {ListProductos.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <CardProducto title={card.title} imageSrc={card.image} Descripcion={card.descripcion} greeting={card.greeting} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Producto