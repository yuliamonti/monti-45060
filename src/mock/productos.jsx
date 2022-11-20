export const ItemListado = [
    {
        category: 'champu',
        title: 'Champú Sólido',
        descripcion: 'De Yerba Mate, Avena, Clavo de Olor y Romero',
        image: '/Imagenes/champu-solido-min.JPG',
        price: 400,
        stock: 50
    },
    {
        category: 'acondicionador',
        title: 'Acondicionador Sólido',
        descripcion: 'De Cacao',
        image: '/Imagenes/acondicionador-min.JPG',
        price: 300,
        stock: 45
    },
    {
        category: 'mascarilla',
        title: 'Mascarilla Sólida',
        descripcion: 'Con carbón activado. Exfoliante',
        image: '/Imagenes/mascarilla-min.JPG',
        price: 200,
        stock: 30
    },
    {
        category: 'mascarilla',
        title: 'Mascarilla de Viaje',
        descripcion: 'De cacao, romero y Avena',
        image: '/Imagenes/mascarilla-cacao-romero.JPG',
        price: 150,
        stock: 15
    },
    {
        category: 'mascarilla',
        title: 'Mascarilla de Cacao y Romero',
        descripcion: 'De cacao, romero y Avena',
        image: '/Imagenes/mascarilla-cacao.JPG',
        price: 150,
        stock: 18
    }, 
];

export const getProducts = (categoriaId) => {
    return new Promise((res, rej) => {
        const prodFiltrados = ItemListado.filter(
            (prod) => prod.category === categoriaId
        )
        const ref = categoriaId ? prodFiltrados : ItemListado;
        setTimeout(() => {
            res(ref);
        }, 2000)
    });
};

export const getProduct = (detalleId) => {
    return new Promise((res, rej) => {
        const product = ItemListado.find((prod) => prod.id === detalleId)
        setTimeout(() => {
            res(product);
        }, 2000)
    });
}; 