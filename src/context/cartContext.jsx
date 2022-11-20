import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //Funcion para agregar el produto al carrito
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, cantidad : product.cantidad + cantidad } : product
            }));
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //funcion setCart para ver si el producto ya se encuentra en el carrito
    const isInCart = (id) => cart.find (product => product.id === id) ? true : false;

    //funcion  para sumar unidades de un producto >>sumarCantidad
    const addItem = (itemPorAgregar, cantidad) => {
        const cartActualizado = cart.map((prodCarrito) => {
            if (itemPorAgregar.id === prodCarrito.id) {
                const productoActualizado = {
                    ...prodCarrito,
                    cantidad: prodCarrito.cantidad += cantidad,
                };
                return productoActualizado;
            } else {
                return prodCarrito;
            }
        })
        setCart(cartActualizado)
    }

    //funcion  para vaciar el carrito >>deleteAll
    const clear = () => { setCart([])};

    //funcion  para eliminar un solo producto
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    //funcion  para sumar unidades total del carrito
    const totalUnidades = () => { 
        let count = 0
        const copia = [...cart]
        copia.forEach((prod) => {
            count = count += prod.cantidad
        })
        return count;
    };

    //funcion  para sumar precio total del carrito
    const totalPrecio = () => {
        return cart.reduce((total, item) => total + item.cantidad * item.price, 0)
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clear, addItem, removeItem, totalUnidades, totalPrecio }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;