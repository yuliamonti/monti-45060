import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams();

    console.log(id);
    console.log(parseInt(id));

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <ItemDetail />
            </div>
        </>
    )
}

export default ItemDetailContainer


