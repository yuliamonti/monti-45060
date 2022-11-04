import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { getProduct } from '../../mock/productos';

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    const { id } = useParams();

    useEffect (()=> {
        getProduct (id)
        .then((res) => {
            setItem (res);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])


    return (
            <div className="container d-flex justify-content-center align-items-center h-100">
                <ItemDetail item={item} />
            </div>
    )
}

export default ItemDetailContainer 


