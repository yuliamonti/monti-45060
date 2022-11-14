import { useState } from 'react';

const Form = () => {
    const [data, setData] = useState({ nombre: '', apellido: '' });
    
    const enviarDatos = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    console.log(data);

/* useEffect(() => {console.log('Código del useEffect');
    return () => {console.log('Limpieza'); };}); */

    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form action="" onSubmit={enviarDatos}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleChange}
                    value={data.nombre}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleChange}
                    value={data.apellido}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;