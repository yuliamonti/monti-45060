import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";
import { doc, getDoc } from 'firebase/firestore';
import { collectionProd} from '../../services/firebaseConfig';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { detalleId } = useParams();

    const [loading, setLoading] = useState(true);
    const override = {display: "flex",margin: "0 auto"};

    useEffect(() => {
        const ref = doc(collectionProd, detalleId);

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

    }, [detalleId])

    if (loading) {
        return (
            <div style={{ height: "40rem" }}>
                <FadeLoader color="#7952b3" cssOverride={override} />
            </div>
        )
    }

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer 
