import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from '../../services/firebaseConfig';
import ItemList from '../main/ItemList';
/* import { getProducts } from '../../mock/productos'; */

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const override = { display: "flex", margin: "0 auto"};

    useEffect(() => {
        if (id) {
            const filtrarProd = query(collectionProd, where('category', '===', id))
            getDocs(filtrarProd)
                .then((res) => {
                    //transformo a  array con const products mediante MAP
                    const products = res.docs.map((prod) => {
                        return {
                            id: prod.id,
                            ...prod.data(),
                        };//data: metodo de firestore para retornar datos
                    });
                    setItems(products);
                })
        } else {
            getDocs(collectionProd)
                .then(res => setItems(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                })
                .finally(() => { setLoading(false) });
        }

        /* getProducts(id)
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); */

        return () => setLoading(true)

    }, [id]);

    if (loading) {
        return (
            <div style={{ height: "40rem" }}>
                <FadeLoader color="#7952b3" cssOverride={override} />
            </div>
        )
    }
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    )
}
export default ItemListContainer