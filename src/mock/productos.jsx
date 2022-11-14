export const ItemListado= [
    {
        id: 1,
        category: 'champu',
        title: 'Champú Sólido',
        descripcion: 'De Yerba Mate, Avena, Clavo de Olor y Romero',
        image: '/Imagenes/champu-solido-min.JPG',
        price: 400,
        stock: 50
    },
    {
        id: 2,
        category: 'acondicionador',
        title: 'Acondicionador Sólido',
        descripcion: 'De Cacao',
        image: '/Imagenes/acondicionador-min.JPG',
        price: 300,
        stock: 45
    },
    {
        id: 3,
        category: 'mascarilla',
        title: 'Mascarilla Sólida',
        descripcion: 'Con carbón activado. Exfoliante',
        image: '/Imagenes/mascarilla-min.JPG',
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

export const getProduct = (idProd) => {
    return new Promise ((res, rej) => {
        const product = ItemListado.find((prod)=> prod.id === idProd) 
        setTimeout (()=>{
            res(product);
        },2000)
    });
}; 