import { useState, useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import ItemList from '../main/ItemList';
import { getProducts } from '../../mock/productos';

const ItemListContainer = () => {
    const [items, setItems] = useState ([])
    const {id} = useParams();

    useEffect(() => {
        getProducts (id)
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            setItems(error);
        })
        }, [id]);

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <ItemList items={items}/>
            </div>
        </div>
    )
}
export default ItemListContainer