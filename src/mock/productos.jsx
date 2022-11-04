import champu from '../Imagenes/champu-solido-min.JPG'
import acondicionador from '../Imagenes/acondicionador-min.JPG'
import mascarilla from '../Imagenes/mascarilla--min.JPG'

export const ItemListado= [
    {
        id: 1,
        title: 'Champú Sólido',
        descripcion: 'De Yerba Mate, Avena, Clavo de Olor; Romero y Manteca de Cacao',
        image: champu,
        price: 400,
        stock: 50
    },
    {
        id: 2,
        title: 'Acondicionador Sólido',
        descripcion: 'Fortalecedor, humectante, natural, libre de tóxicos',
        image: acondicionador,
        price: 300,
        stock: 45
    },
    {
        id: 3,
        title: 'Mascarilla Sólida',
        descripcion: 'Con carbón activado, suavemente exfoliante',
        image: mascarilla,
        price: 200,
        stock: 30
    },
];
export const getProducts = (id) => {
    return new Promise ((res, rej) => {
        const prodFiltrados = ItemListado.filter(
            (prod)=> prod.category === id 
            )
        const ref = id ? prodFiltrados : ItemListado;
        setTimeout (()=>{
            res(ref);
        },2000)
    });
}; 

export const getProduct = (id) => {
    return new Promise ((res, rej) => {
        const product = ItemListado.find((prod)=> prod.id === +id) 
        setTimeout (()=>{
            res(product);
        },2000)
    });
}; 