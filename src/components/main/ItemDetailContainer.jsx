import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore';
import { collectionProd } from '../../services/firebaseConfig';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();
    const override = {display: "flex",margin: "0 auto"};

    useEffect(() => {
        const ref = doc(collectionProd, idProd);

        getDoc(ref)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [idProd])

    if (loading) {
        return (
            <div style={{ height: "40rem" }}>
                <FadeLoader color="#7952b3" cssOverride={override} />
            </div>
        )
    }

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer 


