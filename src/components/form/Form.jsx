import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../context/cartContext';
import { db } from '../../services/firebaseConfig';
import Notfound from '../error/notfound';

const Formulario = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [direccion, setDireccion] = useState('');
    const [tel, setTel] = useState('');

    const [orderId, setOrderId] = useState('');

    const { cart, totalPrecio, clear } = useContext(CartContext)
    const totalCarrito = totalPrecio();

    const enviarDatos = (e) => {
        e.preventDefault();

        const objOrden = {
            buyer: {
                name,
                lastName,
                email,
                email2,
                direccion,
                tel,
            },
            Producto: cart,
            Total: totalCarrito,
            Fecha: serverTimestamp(),
        };

        const orderColection = collection(db, 'orders');

        addDoc(orderColection, objOrden)
            .then((res) => {
                setOrderId(res.id);
                clear();
            })
            .catch((error) => {
                <Notfound/>
            })
    };

    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleEmail2 = (e) => setEmail2(e.target.value);
    const handleDireccion = (e) => setDireccion(e.target.value);
    const handleTel = (e) => setTel(e.target.value);

    if (orderId) {
        return (
            <>
                <div className='contenedor compraExitosa'>
                    <img src='/Imagenes/logoimperfecta.png' alt='' className='logoCompra'/>
                    <h1 className='upper'> Gracias por tu compra {name}!</h1>
                    <h2> Número de seguimiento: {orderId}</h2>
                    <h3> Recuerda que puede tener una demora de 3 a 5 días hábiles.</h3>
                </div>
            </>
        );
    }

    return (
        <>
            <form onSubmit={enviarDatos} className="contenedor formulario mt-4 mb-4">

                <Form.Group className="mb-3 mt-3">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        onChange={handleName} 
                        value={name}
                        required
                        className='btnForm'
                    />
                </Form.Group>


                <Form.Group className="mb-3">
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        onChange={handleLastName} 
                        value={lastName}
                        required
                        className='btnForm'
                    />
                </Form.Group>


                <Form.Group className="mb-3">
                    <input
                        type="text"
                        name="email"
                        placeholder="Correo Electrónico"
                        onChange={handleEmail} 
                        value={email}
                        required
                        className='btnForm'
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <input
                        type="text"
                        name="email"
                        placeholder="Repetir Correo Electrónico"
                        onChange={handleEmail2} 
                        value={email2}
                        required
                        className='btnForm'
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <input
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                        onChange={handleDireccion} 
                        value={direccion}
                        required
                        className='btnForm'
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Número de teléfono"
                        onChange={handleTel} 
                        value={tel}
                        required
                        className='btnForm'
                    />
                </Form.Group>

                <Link to='/' className="btn light lg btn-outline-secondary btn-lg mb-4 mx-auto"> Agregar productos </Link>               
                <Form.Group className="mb-3">
                    <button disabled={email !== email2} className="btn light lg btn-outline-secondary btn-lg  mb-4 mx-auto" >Enviar</button>
                </Form.Group>

            </form>

        </>
    );
};

export default Formulario;