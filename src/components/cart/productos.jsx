import champu from '../../Imagenes/champu-solido-min.JPG'
import acondicionador from '../../Imagenes/acondicionador-min.JPG'
import mascarilla from '../../Imagenes/mascarilla--min.JPG'

export const ItemListado= [
    {
        id: 1,
        title: 'Champú Sólido',
        descripcion: 'De Yerba Mate, Avena, Clavo de Olor; Romero y Manteca de Cacao',
        image: champu,
        price: 400
    },
    {
        id: 2,
        title: 'Acondicionador Sólido',
        descripcion: 'Fortalecedor, humectante, natural, libre de tóxicos',
        image: acondicionador,
        price: 300
    },
    {
        id: 3,
        title: 'Mascarilla Sólida',
        descripcion: 'Con carbón activado, suavemente exfoliante',
        image: mascarilla,
        price: 200
    },
];
export const getTimer = (id) => {
    return new Promise ((resolve, reject) => {
            
        const prodFiltrados = ItemListado.find((prod)=> prod.category === id )
        const ref = id ? prodFiltrados : ItemListado;

        setTimeout (()=>{
            resolve(ref);
        },2000)
    });
}; 