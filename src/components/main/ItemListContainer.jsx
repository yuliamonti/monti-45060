import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import { getDocs, query, where } from 'firebase/firestore';
import ItemList from '../main/ItemList';
import { collectionProd } from '../../services/firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoriaId } = useParams();

    const [loading, setLoading] = useState(true);
    const override = {display: "flex",margin: "0 auto"};

    useEffect(() => {
        if (categoriaId) {
            const filtrarProd = query(collectionProd,
                where( 'category',  '==', categoriaId))

            getDocs(filtrarProd)
                .then(res => setItems(res.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
                
            } else {
            getDocs(collectionProd)
                .then(res => setItems(res.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
            }
    }, [categoriaId])

    if (loading) {
        return (
            <div style={{ height: "40rem" }}>
                <FadeLoader color="#7952b3" cssOverride={override} />
            </div>
        )
    }
    return (
        <div>
            <div>
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer