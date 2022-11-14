import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../context/cartContext";

function CartWidget() {
    const { totalUnidades } = useContext(CartContext)

    return (
            <div>
                <BsCart3 style={{color: 'rgb(234, 230, 230)', fontSize: '30px'}} />
                <span style={{color: 'rgb(234, 230, 230)', fontSize: '20px'}}> {totalUnidades() || ''}</span>
            </div>

    );
}

export default CartWidget;