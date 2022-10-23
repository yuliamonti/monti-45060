import { useState, useEffect} from 'react'; 
import champu from '../../Imagenes/champu-solido-min.JPG'
import acondicionador from '../../Imagenes/acondicionador-min.JPG'
import mascarilla from '../../Imagenes/mascarilla--min.JPG'
import CardProducto from './CardProducto'

const ItemList= [
    {
        id: 1,
        title: 'Champú Sólido',
        descripcion: 'De Yerba Mate, Avena, Clavo de Olor; Romero y Manteca de Cacao',
        image: champu,
    },
    {
        id: 2,
        title: 'Acondicionador Sólido',
        descripcion: 'Fortalecedor, humectante, natural, libre de tóxicos',
        image: acondicionador,
    },
    {
        id: 3,
        title: 'Mascarilla Sólida',
        descripcion: 'Con carbón activado, suavemente exfoliante',
        image: mascarilla,
    },
];

const Item = () => {
    const [items, setItems] = useState ([])

    useEffect(() => {
    const getTimer = () => {
        return new Promise ((resolve, reject) => {
            setTimeout (()=>{
                resolve(ItemList);
            },2000)
        });
    };
    getTimer ()
    .then((res) => {
        setItems(res);
    })
    .catch((error) => {
        setItems(error);
    })
    }, []);
    

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {items.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <CardProducto title={card.title} imageSrc={card.image} Descripcion={card.descripcion} onAdd={card.agregar}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Item